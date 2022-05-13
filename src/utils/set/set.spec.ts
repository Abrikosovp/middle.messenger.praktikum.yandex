import set from './index';
import {expect} from 'chai';

describe('util set', ()=>{
  it('should test util set', ()=> {
    expect(set({}, 'test', 102)).deep.equal({test: 102});
    expect(set({test: 12}, 'test1.test2', 99)).deep.equal({test: 12, test1: {test2: 99}});
  });
});
