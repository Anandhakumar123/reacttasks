import { useState } from "react";

export const DisableButton = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h3>Disable Button Challenge</h3>
      <div>
        <input type="text" name="" id="" value={text} onChange={handleText} />
        <button disabled={text.length <= 0}>Submit</button>
        {/* <button disabled={text.length < 1}>Submit</button> */}
        {/* <button type="submit" disabled={text.length === 0}>Submit</button> */}
      </div>
    </div>
  );
};

/**
  Challenge: Make button disabled when there is no character on the input field. Enable the `Submit` button (remove button from being disabled) when there is at least one character.
  
  Solution: https://codepen.io/angelo_jin/pen/dyVmyYz
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/
