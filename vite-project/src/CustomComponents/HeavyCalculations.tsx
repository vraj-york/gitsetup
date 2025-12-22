import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

export const HeavyCalculations = () => {
  const [count, setCount] = useState(0);
  // let resultOfEffect;

  // useEffect(() => {
  //   const expensiveCalculation = () => {
  //     console.log("useEffect Heavy calculation running...");
  //     let total = 0;
  //     for (let i = 0; i < 100000000; i++) {
  //       total += i;
  //     }
  //     console.log("useEffect Heavy calculation completed.");
  //     return total;
  //   };

  //   resultOfEffect = expensiveCalculation();
  // }, []);

  const result = useMemo(() => {
    console.log("Heavy calculation running...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    console.log("Heavy calculation completed.");
    return total;
  }, [count]);

  return (
    <div>
      <h2>Result: {result}</h2>
      {/* <h2>Result of Effect: {resultOfEffect}</h2> */}
      <div>Render Count: {count}</div>
      <Button onClick={() => setCount(count + 1)}>Increase Count</Button>
    </div>
  );
};
