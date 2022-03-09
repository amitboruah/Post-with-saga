export const Types = {
  FETCH_DATA: "FETCH_DATA",
  POST_DATA: "POST_DATA",
};

export const fetchData = () => ({
  type: "FETCH_DATA",
});

export const postDatas = (payload) =>
  ({
    type: "POST_DATA",
    payload: payload,
  });
