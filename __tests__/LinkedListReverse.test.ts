import { expect } from 'chai';

import { LinkedList } from '../lib/LinkedList';

describe('Reverse', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  const appendNodes = (values: number[]) => {
    values.forEach((value) => list.append(value));
  };

  it('should reverse an empty list', () => {
    list.reverse();
    expect(list.toArray()).to.eql([]);
  });

  it('should reverse a list with one node', () => {
    list.append(1);
    list.reverse();
    expect(list.toArray()).to.eql([1]);
  });

  it('should reverse the list', () => {
    appendNodes([1, 2, 3, 4, 5]);
    list.reverse();
    expect(list.toArray()).to.eql([5, 4, 3, 2, 1]);
  });

  it('should reverse the list from the given index', () => {
    appendNodes([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    list.reverse(2, 7);
    expect(list.toArray()).to.eql([1, 7, 6, 5, 4, 3, 2, 8, 9]);
  });

  it('should reverse full list from the given index if stars at 1 and end at the length of the list', () => {
    appendNodes([1, 2, 3, 4, 5]);
    list.reverse(1, 5);
    expect(list.toArray()).to.eql([5, 4, 3, 2, 1]);
  });
});
