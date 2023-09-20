const reducer = (state, action) => {
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((currValue) => {
          return currValue.objectID != action.payload;
        }),
      };

    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };

    case "PREV_PAGE":
      let pageNum = state.page;
      if (pageNum <= 0) {
        pageNum = 0;
      } else {
        pageNum = pageNum - 1;
      }
      return {
        ...state,
        page: pageNum,
      };

    case "NEXT_PAGE":
      let pageNuminc = state.page;
      if (pageNuminc > state.nbPages) {
        pageNuminc = 0;
      } else {
        pageNuminc = pageNuminc + 1;
      }
      return {
        ...state,
        page: pageNuminc,
      };
    
    case "GET_IMG" : 
    return{
      ...state,
      img : action.payload
    }  
  }
};

export default reducer;
