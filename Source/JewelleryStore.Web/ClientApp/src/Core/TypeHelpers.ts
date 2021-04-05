// tslint:disable-next-line: no-any
export type ThenArg<T> = T extends Promise<infer U> ? U : T extends (...args: any[]) => Promise<infer X> ? X : T;
