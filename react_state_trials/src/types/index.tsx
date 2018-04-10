export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface FieldProps {
  topLevelState: State;
}

export interface DateTime {
  to: Date | null;
  from: Date | null;
}

export interface State {
  // State Values
  currentPage?: number;
  maxPage?: number;
  userId?: number;
  name: string;
  address: string;
  phone: string;
  dateTime: DateTime;
  // State Functions
  setTopLevelState: Function;
}
