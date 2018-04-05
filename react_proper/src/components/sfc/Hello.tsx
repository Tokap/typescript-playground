import * as React from "react";

import "./Hello.css";

// Local Interface To Define Props - Exported for Signature in App.tsx
export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

// Stateless Functional Component. Good when no internal state needed.
function Hello({ name, enthusiasmLevel = 1 }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default Hello;

// Enthusiasm Helper
function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
