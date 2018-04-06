// Import Enum Alias for Increment | Decrement
import { EnthusiasmAction } from "../actions/index";
// Import the inferface for our Stored State
import { StoreState } from "../types/index";
// Import saved constants for Switch Statement
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from "../constants/index";

export function enthusiasm(
  state: StoreState,
  action: EnthusiasmAction
): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };

    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
    // It's important that the enthusiasmLevel property come last,
    // since otherwise it would be overridden by the property in our old state.

    default:
      return { ...state };
  }
}

// TODO: Write tests for Reducers
