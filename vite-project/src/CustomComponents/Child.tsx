import React from "react";

interface ChildProps {
  name: string;
}

const Child = React.memo(function Child({ name }: ChildProps) {
  console.log("Child rendered");
  return <h3>Hello {name}</h3>;
});

export default Child;
