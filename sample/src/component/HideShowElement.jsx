import { useState } from "react";

export const HideShowElement = () => {
  const [toggleShowHide, setToggleShowHide] = useState(true);

  const handleToggle = () => {
    setToggleShowHide(!toggleShowHide);
    //or
    // setToggleShowHide((prevState) => !prevState);
  };
  return (
    <div>
      <button onClick={handleToggle}>
        {toggleShowHide ? "Click to hide elelment" : "Click to show element"}
      </button>
      {toggleShowHide && <h3>This is Heading Element</h3>}
    </div>
  );
};
