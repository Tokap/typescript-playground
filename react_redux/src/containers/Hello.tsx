import Hello from "../components/sfc/Hello";
import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect, Dispatch } from "react-redux";

// Here we have a conatiner which will take the original component and wrap it:
// State: Obviously the state of the component
// Dispatch: The updates of the function

export function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
  return {
    enthusiasmLevel,
    name: languageName
  };
}

export function mapDispatchToProps(
  dispatch: Dispatch<actions.EnthusiasmAction>
) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm())
  };
}

// connect will first take mapStateToProps and mapDispatchToProps, and
// then return another function that we can use to wrap our component.
// Think that we're "connecting" the container pieces

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
