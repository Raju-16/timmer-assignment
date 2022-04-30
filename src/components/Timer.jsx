import { useState, useEffect } from "react";

export const Timer = ({ start, end }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let id = setInterval(() => {
      setCount((pre) => {
        if (pre === end) {
          clearInterval(id);
          return 0;
        } else {
          console.log("increasing");
          return pre + 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Count:{count}</h1>
    </div>
  );
};
