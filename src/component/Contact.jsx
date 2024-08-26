import React from "react";

export default function Contact(props) {
  return (
    <div className={`bg-${props.value !== "true" ? "light" : ""} container`}>
      <h1
        className={`bg-${props.value !== "true" ? "light" : ""} my-5`}
        style={{ textAlign: "center" }}
      >
        <strong className={`text-${props.value === "true" ? "light" : ""}`}>
          Contact Us
        </strong>
      </h1>
      <p className={`text-${props.value === "true" ? "light" : ""}`}>
        We’d love to hear from you! For any questions, feedback,
        <br /> or support, please reach out to us through the following <br />{" "}
        channels:
      </p>
      <ul>
        <li className={`ms-2 mt-3 text-${props.value === "true" ? "light" : ""}`}>Email: fahid7888@gmail.com</li>
        <li className={`ms-2 mt-2 text-${props.value === "true" ? "light" : ""}`}>Phone: 0327-577-8998</li>
        <li className={`ms-2 mt-2 text-${props.value === "true" ? "light" : ""}`}>Website: www.khantodolist.com</li>
      </ul>
      <p className={`my-5 text-${props.value === "true" ? "light" : ""}`}>
        We’re here to help and look forward to assisting you!
      </p>
    </div>
  );
}
