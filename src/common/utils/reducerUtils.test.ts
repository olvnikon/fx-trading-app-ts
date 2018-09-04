import {
  createConditionalSliceReducer,
  createReducer,
  IReducerMapping,
} from './reducerUtils';

const typeUpdate = 'UPDATE';
const getInitialState = () => (['a', 'b', 'c']);
const payload = [1, 2, 3];
const mappingUpdate: IReducerMapping<ReadonlyArray<string>> = { [typeUpdate]: (s, p) => ([...p]) };
const getUpdateAction = () => ({ type: typeUpdate, payload });

describe('createReducer', () => {
  let reducer: any;

  beforeEach(() => {
    reducer = createReducer(getInitialState(), mappingUpdate);
  });

  test('should return a new state', () => {
    expect(reducer(getInitialState(), getUpdateAction())).toEqual([...payload]);
  });

  test('should return the initial state if to dispatch non-existent action', () => {
    const initialState = getInitialState();
    expect(reducer(initialState, { type: 'WRONG-TYPE', payload })).toEqual(initialState);
  });
});

describe('createConditionalSliceReducer', () => {
  const entityName = 'testEntity';
  const sliceReducer = createConditionalSliceReducer(entityName, mappingUpdate, [])[entityName];

  test('should update the slice of a state', () => {
    expect(sliceReducer(getInitialState(), getUpdateAction())).toEqual([...payload]);
  });
});
