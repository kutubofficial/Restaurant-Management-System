import { useEffect, useState } from "react";

const Counter = ({ target, suffix = "", duration = 1000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start * 10) / 10); 
        
      }
    }, 10);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <div className="text-2xl md:text-3xl font-bold text-blue-600">
      {count}
      {suffix}
    </div>
  );
};

export default Counter;
