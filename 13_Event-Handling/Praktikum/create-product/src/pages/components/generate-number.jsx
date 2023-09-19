import { useState } from "react";

const GenerateNumber = () => {
  const [number, setNumber] = useState(0);

  const generateRandom = () => {
    const numbers = Math.floor(Math.random() * 100) + 1;
    setNumber(numbers);
  };

  return (
    <section className="container">
      <div className="text-center mx-auto my-5">
        <button className="btn btn-primary" onClick={generateRandom}>
          Lucky Number
        </button>
        <h5 className="text-center my-3 px-3" style={{ color: number !== 0 ? "#10c422" : "#e82c48" }}>
          Gacha : {number}
        </h5>
      </div>
    </section>
  );
};

export default GenerateNumber;
