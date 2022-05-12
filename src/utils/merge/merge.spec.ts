import {expect} from 'chai';
import merge from './index';

describe('util merge', ()=>{
  it('should test util merge', function() {
    expect(merge({a: {b: 1}}, {a: {c: 2, x: {y: 3}}}), ).to.deep.equal({a: {b: 1, c: 2, x: {y: 3}}});
  });
});
