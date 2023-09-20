import Pagination from "./TechNewsPagination";
import Stories from "./Stories";
import TechNewsSearchbar from "./TechNewsSearchbar";
import "./TechNews.css";
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = 'http://hn.algolia.com/api/v1/search?';
const imgUrl = 'https://source.unsplash.com/150x150/?';


const initialstate = {
    query : 'html',
    nbPages : 0,
    page : 0,
    hits : [],
    img : "",
}


const AppContext = createContext();

const AppProvider = ({children})=>{
    
    const [state, dispatch] =  useReducer(reducer, initialstate)

     const apicall = async(get)=>{
     const response = await fetch(get)
     const result = await response.json()
     console.log(result);
     dispatch({
        type : "GET_STORIES",
        payload : {
            hits : result.hits,
            nbPages : result.nbPages
        }
     })
    }

    const imgApicall = (getImg)=>{
         dispatch({
            type : "GET_IMG",
            payload : getImg
         })
    }


    const removePost = (post_id)=>{
        dispatch({ 
            type : 'REMOVE_POST', 
            payload : post_id ,
        })
     }

    const searchPost = (searchQuery)=>{
        console.log(searchQuery);
        dispatch({
            type : "SEARCH_POST",
            payload : searchQuery
        })
      console.log(dispatch.payload);
    }

    const prevPage = ()=>{
        dispatch({
            type:'PREV_PAGE',

        })
    }

    const nextPage = ()=>{
        dispatch({
            type:'NEXT_PAGE',
            
        })
    }


   useEffect(()=>{
    apicall(`${url}query=${state.query}&page=${state.page}`);
    imgApicall(`${imgUrl}${state.query}`)
   },[state.query, state.page])

    return(
        <AppContext.Provider value={{ ...state,  removePost, searchPost, prevPage, nextPage }}>
            {children}
        </AppContext.Provider>
    )
}

const TechNewsApp = () => {

  return (
    <>
        <TechNewsSearchbar />
        <Pagination />
        <Stories />
    </>
  );
};

const useGlobalContext = ()=>{
    return useContext(AppContext);
}

export default TechNewsApp;
export { AppContext, AppProvider,  useGlobalContext  }
