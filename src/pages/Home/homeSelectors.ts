import { IState } from '../../app/store/storeTypes';

export const selectCurrencyPairs = (state: IState) => state.currencyPairs;
