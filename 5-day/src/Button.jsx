import React, { useState } from "react";

const Button = () => {
  const [show, setShow] = useState(0);

  const inc = () => setShow(show + 1);

  const dec = () => {
    if (show < 1)
      return;
    return setShow(show - 1);
  }

  return (
    <>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <p>{show}</p>
    </>
  );
};

export default Button;
