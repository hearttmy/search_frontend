import request from "../request";

const SearchProvider = {
  searchForList: (payload) => {
    // const { word } = payload;
    console.log(payload);
    const parsedPayload = {};
    parsedPayload.query = { match_all: {} };
    console.log(parsedPayload);
    return request
      .get("/_search", parsedPayload)
      .then((res) => res.data.hits.hits)
      .catch((err) => err);
  },
  searchForDetail: () => {},
};

export default SearchProvider;
