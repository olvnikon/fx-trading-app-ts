import { shallow } from 'enzyme';
import * as React from 'react';
import RateHOC from './Rate';

const RateWithTitle = RateHOC('Test');

describe('Rate', () => {
  const RATE = 12.345;
  const CURRENCY = 'USD & EURO';

  test('should match snapshot', () => {
    const props = {
      currency: CURRENCY,
      rate: RATE,
    };
    const component = shallow(<RateWithTitle {...props} />);
    expect(component).toMatchSnapshot();
  });
});
