import { ICurrencyPair } from '../../common/components/CurrencyPair/currencyPairTypes';
import { FETCH_PAIRS } from './homeConstants';

interface IUpdatePairsActionType {
  readonly payload: ReadonlyArray<ICurrencyPair>,
  readonly type: typeof FETCH_PAIRS,
}
type UpdatePairsType = (pairs: ReadonlyArray<ICurrencyPair>) => IUpdatePairsActionType;
export const updatePairs: UpdatePairsType = pairs => ({
  payload: pairs,
  type: FETCH_PAIRS,
});
