import { useEffect, useState } from 'react';

export const Counter = ({ min, max }) => {
  const [value, setValue] = useState();

  useEffect(async () => {
    if (min > 0) {
      setValue(min);
    }
    else if (max < 0) {
      setValue(max);
    }
    else {
      setValue(0);
    }
  }, [])

  const increment = async () => {
    if (!(value >= max)) {
      setValue(value+1);
    }
  }

  const decrement = async () => {
    if (!(value <= min)) {
      setValue((value-1));
    }
  }

  return (
    <div className="flex">
      <button
        type="button"           
        className="pt-2 pl-4 pb-2 pr-4 bg-blue-900 text-white shadow-md rounded font-bold"
        onClick={decrement}
      >
        -
      </button>
      <div className="pt-2 pl-4 pb-2 pr-4 font-bold">
        { value }
      </div>
      <button
        type="button"           
        className="pt-2 pl-4 pb-2 pr-4 bg-blue-900 text-white shadow-md rounded font-bold"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};