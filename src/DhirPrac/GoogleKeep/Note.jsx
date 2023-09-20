import React from "react";
const Note = (props) => {

  const delnote = ()=>{
    return props.onselect(props.id)
  }
  return (
    <>
      <div id="main_note_div"
        className="main_note_div"
        style={{
               width:'25%',
               minHeight:'30vh',
               display:'inline-block',
               padding:'35px',
        }}
      >
        <div
          className="note_div"
          style={{
            width:'300px',
            height:'200px',
            backgroundColor:'white',
            borderRadius:'10px',
            boxShadow:'5px 5px 15px -5px',
            padding:'20px',
              
          }}
        >
          <h3 style={{ fontWeight: "bold",textTransform:'capitalize' }}>{props.title}</h3>
          <p style={{fontSize:'20px'}}>{props.notes}</p>
          <span>
            <button
              id="del_button"
              style={{
                width: "40px",
                height: "40px",
                border: "none",
                outline: "none",
                fontSize: "25px",
                fontWeight: "bold",
                backgroundColor: "white",
                borderRadius: "50%",
                boxShadow: "5px 5px 15px -5px black",
                padding: "2px",
                position: "relative",
                top: "45px",
                left: "225px",
              }}
             onClick={delnote}>
              D
            </button>
          </span>
        </div>
      </div>
    </>
  );
};
export default Note;
