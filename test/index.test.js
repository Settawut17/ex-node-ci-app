import { assert } from 'chai';
import { add } from '../src/index.js';

describe('add()', () => {
  it('returns sum', () => {
    assert.equal(add(2, 3), 5);
  });
  it('throws on non-number', () => {
    assert.throws(() => add('a', 2), TypeError, 'Inputs must be numbers');
  });
});