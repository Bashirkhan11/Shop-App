import React from "react";

export default function Footer(props) {
  return (
    <footer
      className={`bg-${props.value === "true" ? "dark" : "light"} mt-5 `}
      id="khan"
    >
      <p>
        <strong className={`text-${props.value === "true" ? "light" : "dark"}`}>
          Copy Right &copy;{" "} 2024
        </strong>
       
      </p>
    </footer>
  );
}
