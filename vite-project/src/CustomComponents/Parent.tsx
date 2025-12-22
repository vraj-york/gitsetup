import { useState } from "react";
import Child from "./Child";
import { Input } from "@/components/ui/input";

function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Vraj");

  console.log("Parent rendered");

  return (
    <div>
      <h2>Count: {count}</h2>
      <Input onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <Child name={name} />
    </div>
  );
}

export default Parent;
