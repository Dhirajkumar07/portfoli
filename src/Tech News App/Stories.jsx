import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./TechNewsApp";

const Stories = () => {
  const { hits, removePost, img } = useGlobalContext();

  return (
    <>
      {hits.map((currElement) => {
        
        const { title, author, num_comments, url, objectID } = currElement;
        return (
          <>
            <div className="container-fluid">
              <div className="row my-3 mx-auto ">
                <div className="col-md-8 stories_column col-lg-6 col-xl-8 mx-auto bg-light p-3">
                  <div className="row">
                    <div className="col-md-7">
                      <h3>{title}</h3>
                      <p>
                        <span>By {author} </span> | 
                        <span> {num_comments} comments</span>
                      </p>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center">
                      <img className="img-fluid stories_img" src={img} alt="pic" />
                    </div>
                  </div>
                  <div className="row stories_button_row">
                    <div className="col-md-12 d-flex justify-content-between">
                      <NavLink className="stories_link" to={url}>
                        Read More
                      </NavLink>
                      <button className="stories_btn" onClick={()=>removePost(objectID)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Stories;
