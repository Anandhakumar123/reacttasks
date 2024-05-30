// import React from 'react'

import { useState } from "react";

export const TwoWayDataBinding = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>Two Way Data Binding</h2>
      <label htmlFor="">Enter your Text</label>
      <input
        type="text"
        name=""
        id=""
        placeholder="Enter here..."
        value={text}
        onChange={handleText}
      />

      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};
