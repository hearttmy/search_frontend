import request from "../request";

const SearchProvider = {
  searchCount: (payload) => {
    const parsedPayload = {};
    const matchList = [];
    const priceRange = [];
    for (let [key, val] of Object.entries(payload)) {
      if (val !== "" && key !== "size" && key !== "from") {
        if (key === "word") {
          matchList.push({ match: { sight: val } });
          continue;
        } else if (key === "price") {
          switch (val) {
            case "50以下":
              priceRange.push(0);
              priceRange.push(50);
              break;
            case "50~100":
              priceRange.push(50);
              priceRange.push(100);
              break;
            case "100~200":
              priceRange.push(100);
              priceRange.push(200);
              break;
            case "200以上":
              priceRange.push(200);
              priceRange.push(10000);
              break;
          }
          continue;
        }

        matchList.push({ match: { [key]: val } });
      }
    }
    if (matchList.length === 0 && priceRange.length === 0) {
      parsedPayload.query = {
        match_all: {},
      };
    } else if (priceRange.length !== 0) {
      parsedPayload.query = {
        bool: {
          must: [
            ...matchList,
            {
              range: {
                price: {
                  gte: priceRange[0],
                  lte: priceRange[1],
                },
              },
            },
          ],
        },
      };
    } else {
      parsedPayload.query = {
        bool: {
          must: [...matchList],
        },
      };
    }
    return request
      .post("/qunar/_count", parsedPayload)
      .then((res) => res.data.count)
      .catch((err) => err);
  },
  searchForRecommend: (payload) => {
    const parsedPayload = {};
    parsedPayload.query = {
      terms: {
        id: [...payload],
      },
    };
    return request
      .post("/qunar/_search", parsedPayload)
      .then((res) => res.data.hits.hits)
      .catch((err) => err);
  },
  searchForList: (payload) => {
    const parsedPayload = {};
    const matchList = [];
    const priceRange = [];
    for (let [key, val] of Object.entries(payload)) {
      if (val !== "" && key !== "size" && key !== "from") {
        if (key === "word") {
          matchList.push({ match: { sight: val } });
          continue;
        } else if (key === "price") {
          switch (val) {
            case "50以下":
              priceRange.push(0);
              priceRange.push(50);
              break;
            case "50~100":
              priceRange.push(50);
              priceRange.push(100);
              break;
            case "100~200":
              priceRange.push(100);
              priceRange.push(200);
              break;
            case "200以上":
              priceRange.push(200);
              priceRange.push(10000);
              break;
          }
          continue;
        }

        matchList.push({ match: { [key]: val } });
      }
    }
    if (matchList.length === 0 && priceRange.length === 0) {
      parsedPayload.query = {
        match_all: {},
      };
    } else if (priceRange.length !== 0) {
      parsedPayload.query = {
        bool: {
          must: [
            ...matchList,
            {
              range: {
                price: {
                  gte: priceRange[0],
                  lte: priceRange[1],
                },
              },
            },
          ],
        },
      };
      parsedPayload.sort = {
        price: { order: "asc" },
      };
    } else {
      parsedPayload.query = {
        bool: {
          must: [...matchList],
        },
      };
    }
    console.log(parsedPayload)
    parsedPayload.size = payload.size;
    parsedPayload.from = payload.from;
    return request
      .post("/qunar/_search", parsedPayload)
      .then((res) => res.data.hits.hits)
      .catch((err) => err);
  },
  searchForDetail: (payload) => {
    const parsedPayload = {};
    parsedPayload.query = {
      match: {
        id: payload.id,
      },
    };
    parsedPayload.size = payload.size;
    parsedPayload.from = payload.from;
    return request
      .post("/qunar/_search", parsedPayload)
      .then((res) => res.data.hits.hits[0]._source)
      .catch((err) => err);
  },
  searchStat: (payload) => {
    const parsedPayload = { ...payload };
    return request
      .post("/qunar_stat/_search", parsedPayload)
      .then((res) => res.data.hits.hits)
      .catch((err) => err);
  },
};

export default SearchProvider;
