export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
}

export interface FieldProps {
  topLevelState: State;
}

export interface State {
  currentPage?: number;
  maxPage?: number;
  userId?: number;
  name: string;
  address: string;
  phone: string;
  setTopLevelState: Function;
}
