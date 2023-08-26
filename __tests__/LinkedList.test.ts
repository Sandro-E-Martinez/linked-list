import { expect } from 'chai';
import { LinkedList } from '../lib/LinkedList';

describe('LinkedList', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  it('should append values to the end of the list', () => {
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.toArray()).to.eql([1, 2, 3]);
  });
});
