import React from "react";

export default function LogOut(props) {
  return (
    <div className="container">
      <h1 style={{ margin: "22% 42%" }}>
        <strong className={`text-${props.value === "true" ? "light" : ""}`}>
          LogOut
        </strong>
      </h1>
    </div>
  );
}
