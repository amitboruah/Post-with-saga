const initialValue = {
  postData: [],
};

const postReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_DATA_SUCCESS":
    //   console.log("get success");
      return { ...state, postData: action.data };

    case "POST_DATA_SUCCESS":
    //   console.log("post success");
      return { ...state, postData: [...state.postData, action.data] };
    default:
      return state;
  }
};

export default postReducers;
