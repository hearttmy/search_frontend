import request from "../request";

const SearchProvider = {
  searchCount: (payload) => {
    const parsedPayload = {};
    const matchObj = {};
    for (let [key, val] of Object.entries(payload)) {
      if (val !== "" && key !== "size" && key !== "from") {
        if (key === "word") {
          matchObj["sight"] = val;
          continue;
        }
        console.log(key);
        matchObj[key] = val;
      }
    }
    if (Object.keys(matchObj).length === 0) {
      parsedPayload.query = {
        match_all: {},
      };
    } else {
      parsedPayload.query = {
        match: matchObj,
      };
    }
    console.log(parsedPayload);
    return request
      .post("/_count", parsedPayload)
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
      .post("/_search", parsedPayload)
      .then((res) => res.data.hits.hits)
      .catch((err) => err);
  },
  searchForList: (payload) => {
    const parsedPayload = {};
    const matchObj = {};
    for (let [key, val] of Object.entries(payload)) {
      if (val !== "" && key !== "size" && key !== "from") {
        if (key === "word") {
          matchObj["sight"] = val;
          continue;
        }
        console.log(key);
        matchObj[key] = val;
      }
    }
    if (Object.keys(matchObj).length === 0) {
      parsedPayload.query = {
        match_all: {},
      };
    } else {
      parsedPayload.query = {
        match: matchObj,
      };
    }

    parsedPayload.size = payload.size;
    parsedPayload.from = payload.from;
    return request
      .post("/_search", parsedPayload)
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
      .post("/_search", parsedPayload)
      .then((res) => res.data.hits.hits[0]._source)
      .catch((err) => err);
  },
};

export default SearchProvider;
