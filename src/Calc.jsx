import { useState } from "react";
import BtnsList from "./BtnsList";
function Calc() {
  const [result, setResult] = useState("");
  const Btns = [
    { id: 9, value: "1" },
    { id: 10, value: "2" },
    { id: 11, value: "3" },
    { id: 5, value: "4" },
    { id: 6, value: "5" },
    { id: 7, value: "6" },
    { id: 1, value: "7" },
    { id: 2, value: "8" },
    { id: 3, value: "9" },
    { id: 4, value: "/" },
    { id: 8, value: "*" },
    { id: 12, value: "-" },
    { id: 14, value: "." },
    { id: 13, value: "0" },
    { id: 15, value: "=" },
    { id: 16, value: "+" },
    { id: 17, value: "C" },
  ];
  return (
    <div className="calc">
      <div className="form">{result}</div>
      <BtnsList Btns={Btns} setResult={setResult} />
    </div>
  );
}
export default Calc;
