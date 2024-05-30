import { useState } from "react";
import "./UpdateParentState.css";
// import PropTypes from "prop-types";

/**Solution: https://codepen.io/angelo_jin/pen/KKXoKgO
  Video for reference: https://youtu.be/VzNNjNmbXpY
**/

function Child({ onChangeParentText }) {
  return (
    <>
      <div>Child</div>
      <button onClick={onChangeParentText}>Change Parent Value</button>
    </>
  );
}

export const UpdateParentState = () => {
  const [value, setValue] = useState("I need to be updated from my child");

  const handleParentText = () => {
    setValue("Parent text changed");
  };

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child onChangeParentText={handleParentText} />
      </div>
    </>
  );
};

// Child.propTypes = {
//   onChangeParentText: PropTypes.string,
// };

// Child.propTypes = {
//     onChangeParentText: PropTypes.func.isRequired,
//   };
