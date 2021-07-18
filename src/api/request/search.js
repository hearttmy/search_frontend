import request from "../request";

const SearchProvider = {
  searchCount: () => {
    return request
      .get("/_count")
      .then((res) => res.data.count)
      .catch((err) => err);
  },
  searchForList: (payload) => {
    // const { word } = payload;
    const parsedPayload = {};
    parsedPayload.query = {
      match_all: {},
    };
    parsedPayload.size = payload.size;
    parsedPayload.from = payload.from;
    return request
      .post("/_search", parsedPayload)
      .then((res) => res.data.hits.hits)
      .catch((err) => err);
  },
  searchForDetail: () => {},
};

export default SearchProvider;
