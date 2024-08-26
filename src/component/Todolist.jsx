import React from "react";



export default function Todolist(props) {

  return (
    <>
      <div
        className={` bg-${
          props.value !== "true" ? "light" : ""
        } , container mt-4`}
      >
        <h2 style={{ marginLeft: "45%" }}>
          <strong
            className={`text-${props.value === "true" ? "light" : "dark"}`}
          >
            Shop list
          </strong>
        </h2>
        <form
          onSubmit={props.handleclick}
          className={`bg-${props.value === "true" ? "light" : "dark"}, form`}
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              <strong
                className={`text-${props.value === "true" ? "light" : "dark"}`}
              >
                Enter Product Name
              </strong>
            </label>
            <input
              onChange={props.handlechange}
              type="text"
              name="text"
              value={props.status.text}
              className="form-control"
              id="exampleInput"
              required
              placeholder="Name"
            />
           <label htmlFor="exampleInputEmail1" className="form-label">
              <strong className={`text-${props.value === "true" ? "light" : "dark"}`}>Enter Product Price</strong>
            </label>
              <input
              onChange={props.handlechange}
              type="number"
              name="number"
              value={props.status.number}
              className="form-control mt-3"
              id="examplenumber"
              placeholder="price"
              required
            />
                        <label htmlFor="exampleInputEmail1" className="form-label">
              <strong className={`text-${props.value === "true" ? "light" : "dark"}`}>Description About product</strong>
            </label>
            <textarea
              onChange={props.handlechange}
              className="mt-3 w-100 rounded"
              id="userMessage"
              name="message"
              rows="4"
              value={props.status.message}
              cols="50"
              placeholder="Enter your description here..."
              required
            />
            <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">
              <strong className={`text-${props.value === "true" ? "light" : "dark"}`}>Product Image</strong>
            </label>
              <input
                onChange={props.imagechange}
                className={`mt-4`}
                type="file"
                id="imageUpload"
                name="image"
                value={props.status.image}
                accept="image/*"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 text-decoration-none">
            {/* <Link className="text-decoration-none text-light" to={"/Card"}></Link> */}
            Save
          </button>
        </form>
        <div className="container mt-5 row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {/* {value.map((v, i) => {
            return (
              <ToDoitem
                handle={handleDelete}
                value={v}
                key={i}
                id={i}
                imagechange={imagechange}
              />
            );
          })} */}
        </div>
      </div>
    </>
  );
}
