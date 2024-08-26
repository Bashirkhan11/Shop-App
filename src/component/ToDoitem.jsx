import React from "react";
// import img from "./image";

export default function ToDoitem(props) {
  // const images = props.value.images || [];
  const images = props.value.images;
  return (
    <>

        <div className=" card mt-3 mx-2  " style={{ width: "250px" }}>
        <span
            onClick={() => {
              props.handle(props.id);
            }}
            className="close"
            style={{float:"right" }}
          >
            &times;
          </span>

            {images.map((v, i)=>{
                        return <img
                        onChange={()=> props.imagechange()}
                        src={v}
                        key={i}
                        style={{  height: "130px", boxSizing:"border-box" }}
                        className="card-img-top"
                        alt="..."
                        name="image"
                      />
            })}

          <div
            className="card-body"
            style={{ float: "left", position: "relative", }}
          >
            <h6 style={{ display: "inline-block", marginRight: "36%" }}>
              <strong>{props.value.text}</strong>
            </h6>
            <span>
              <strong>{props.value.number}$</strong>
            </span>
            <p>{props.value.message}</p>
            <button className="btn btn-warning text-light">Buy</button>
          </div>
        </div>

    </>
  );
}
