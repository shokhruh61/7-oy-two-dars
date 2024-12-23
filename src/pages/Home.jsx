import React, { useState } from "react";

function Home() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  const handleIncrement = (counter, setCounter) => {
    setCounter(counter + 1);
  };

  const handleDecrement = (counter, setCounter) => {
    setCounter(counter - 1);
  };

  const handleReset = (setCounter) => {
    setCounter(0);
  };

  const total = counter1 + counter2 + counter3;

  return (
    <div className="mt-5">
      <div className="flex mx-auto flex-wrap w-[400px] items-center justify-center gap-8 bg-black p-6 rounded-2xl">
        <div className="flex flex-col items-center border p-3 rounded-lg">
          <h2 className="text-2xl text-white font-semibold">Counter 1</h2>
          <p className="text-xl font-bold text-white">{counter1}</p>
          <div className="flex justify-between gap-4 mt-4">
            <button
              onClick={() => handleIncrement(counter1, setCounter1)}
              className="btn btn-sm text-white "
            >
              +
            </button>
            <button
              onClick={() => handleDecrement(counter1, setCounter1)}
              className="btn btn-sm text-white "
            >
              -
            </button>
            <button
              onClick={() => handleReset(setCounter1)}
              className="btn btn-sm text-white "
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center border p-3 rounded-lg">
          <h2 className="text-2xl font-semibold text-white">Counter 2</h2>
          <p className="text-xl font-bold text-white">{counter2}</p>
          <div className="flex justify-between gap-4 mt-4">
            <button
              onClick={() => handleIncrement(counter2, setCounter2)}
              className="btn btn-sm"
            >
              +
            </button>
            <button
              onClick={() => handleDecrement(counter2, setCounter2)}
              className="btn btn-sm"
            >
              -
            </button>
            <button
              onClick={() => handleReset(setCounter2)}
              className="btn btn-sm"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center border p-3 rounded-lg">
          <h2 className="text-2xl font-semibold text-white">Counter 3</h2>
          <p className="text-xl font-bold text-white">{counter3}</p>
          <div className="flex items-center justify-between gap-4 mt-4">
            <button
              onClick={() => handleIncrement(counter3, setCounter3)}
              className="btn btn-sm"
            >
              +
            </button>
            <button
              onClick={() => handleDecrement(counter3, setCounter3)}
              className="btn btn-sm"
            >
              -
            </button>
            <button
              onClick={() => handleReset(setCounter3)}
              className="btn btn-sm"
            >
              Reset
            </button>
          </div>
        </div>{" "}
        <br />
        <div className="text-3xl text-white font-semibold">c-ted: {total}</div>
      </div>
    </div>
  );
}

export default Home;
