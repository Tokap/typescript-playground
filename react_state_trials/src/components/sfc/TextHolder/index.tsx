import * as React from "react";

import "./TextHolder.css";

// enum MutableStateOptions {
//   "name",
//   "currentPage",
//   "maxPage",
//   "userId"
// }

// type MutableStateOption = "currentPage" | "maxPage" | "userId" | "name";

export interface Props {
  fieldName: string;
  textValue: string;
  setTopLevelState: Function;
}

// Notice how the function knows the type sig of the deconstructed Props interface.
function TextHolder({ fieldName, textValue, setTopLevelState }: Props) {
  return (
    <div className="hello">
      <div className="greeting">Hello {textValue}</div>
      <input
        type="text"
        name={fieldName}
        onChange={e =>
          setTopLevelState({
            [fieldName]: e.target.value
          })
        }
      />
    </div>
  );
}

export default TextHolder;

// We can always use the prop name here to be consistent. Then, our
// update FNs should be consistent across the board as well.

// Okay, so do we want a text field where the name is passed in or the
// context is passed in and the rest of the functionality is already
// pre-determined. That seems dangerous if we had, say, multiple
// text boxes on the same page...

// I'm beginning to like the pattern of extremely generic
// components that receive the entire state object
// and from there determine how to proceed. This allows us
// to use wrappers for heavy customization or simply
// pass props for more simple implementation.
