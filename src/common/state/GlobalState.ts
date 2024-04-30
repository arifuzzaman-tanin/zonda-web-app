import { useState } from 'react';

type StateValue<T> = T | ((prev: T) => T);

class GlobalState<T> {
  private state: T;
  private setState: React.Dispatch<React.SetStateAction<T>>;

  constructor(initialState: T) {
    const [state, setState] = useState<T>(initialState);
    this.state = state;
    this.setState = setState;
  }

  get(): T {
    return this.state;
  }

  set(value: StateValue<T>): void {
    this.setState((prevState: T) => {
      const updatedValue = typeof value === 'function' ? (value as Function)(prevState) : value;
      return updatedValue;
    });
  }
}

export default GlobalState;
