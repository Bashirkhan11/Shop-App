import React from "react";

export default function About(props) {
  return (
    <div className={`container bg-${props.value !== "true" ? "light" : ""}`}>
      <h1
        className={`mb-5 mt-4 bg-${props.value !== "true" ? "light" : ""}`}
        style={{ textAlign: "center" }}
      >
        <strong className={`text-${props.value === 'true' ? "light" : "" }`} >About Us</strong>
      </h1>
      <p className={`text-${props.value === 'true' ? "light" : "" }`} >
        Welcome to ToDoList! Our mission is simple: to help you stay organized
        and achieve your goals with ease. ToDoList is designed to be your go-to
        tool for managing tasks, setting priorities, and tracking your progress.
        Whether you're juggling work projects, personal errands, or long-term
        objectives, our intuitive app helps you keep everything in one place.
      </p>
      <h5 className={`text-${props.value === 'true' ? "light" : "" }`} >Key Features:</h5>
      <ul>
        <li className={`text-${props.value === 'true' ? "light" : "" }`} >Easy task creation and organization </li>
        <li className={`text-${props.value === 'true' ? "light" : "" }`} >Customizable lists and categories </li>
        <li className={`text-${props.value === 'true' ? "light" : "" }`} >Simple, user-friendly interface</li>
        <li className={`text-${props.value === 'true' ? "light" : "" }`} >Progress tracking and reminders</li>
      </ul>
      <p className={`text-${props.value === 'true' ? "light" : "" }`} >
        We believe in making productivity accessible and stress-free. Thanks for
        choosing ToDoList to simplify your life! Feel free to contact us with
        any questions or feedback at [support@todolistapp.com].
      </p>
    </div>
  );
}
