
export interface IAction<T> {
    type: string,
    note?: string,
    newState?: (state: T, initState: T) => T,
};

export type IType<T> = (action: IAction<T>) => any;

