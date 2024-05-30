import { useState } from "react";

export const AddingTwoNumbers = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    setTotal(number1 + number2);
  };

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
        // onChange={(e) => setNumber1(e.target.value)}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
        // onChange={(e) => setNumber2(e.target.value)}
      />

      {/* <button
        onClick={() => setTotal(parseFloat(number1) + parseFloat(number2))}
      >
        Add Two Numbers
      </button> */}

      <button onClick={calculateTotal}>Add Two Numbers</button>
      <p>Total:{total}</p>
    </div>
  );
};
