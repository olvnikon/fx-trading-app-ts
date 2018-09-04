type MappedReducer<S, P> = (state: S, payload: P) => S;
interface IAction {
  readonly type: string,
  readonly payload: any,
}
export interface IReducerMapping<TState> {
  readonly [key: string]: MappedReducer<TState, any>
}
type iterable = ReadonlyArray<any> | { [key: string]: any };

export const createReducer = <TInitialState extends iterable>(
  initialState: TInitialState,
  fnMap: IReducerMapping<TInitialState>,
) => (
    state: TInitialState = initialState,
    { type, payload }: IAction,
  ): TInitialState => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };

export const createConditionalSliceReducer = <TInitialState extends iterable>(
  sliceName: string,
  fnMap: IReducerMapping<TInitialState>,
  initialState: TInitialState,
): IReducerMapping<TInitialState> => ({
    [sliceName]: (state: TInitialState = initialState, action: IAction) => (fnMap[action.type]
      ? createReducer(initialState, fnMap)(state, action)
      : state),
  });
