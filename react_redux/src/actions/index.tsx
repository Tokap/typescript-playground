import * as constants from "../constants";

// This is some serious boiler plate. Do we consider using extending Libs or
// simply move to the context API because it is similarly verbose??

// FYI - Interface and Type are similar, but by no means identical. Thorough explanation at:
// stackoverflow.com/questions/37233735/typescript-interfaces-vs-types

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}
