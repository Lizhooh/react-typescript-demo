
export interface A<T> {
    type: string,
    note?: string,
    newState?: (state: T, INIT_STATE: T) => T,
};

export type D<T> = (action: A<T>) => any;

