import React, { useState } from "react";
import Result from "./result";
function Button({ votes, stickers }) {
  const [show, setShow] = useState(true);

  return (
    <div className="showResult">
      <button className="button" onClick={() => setShow(!show)}>
        {show ? "Hide Result" : "Show Result"}
      </button>

      {show && <Result votes={votes} stickers={stickers} />}
    </div>
  );
}

export default Button;
