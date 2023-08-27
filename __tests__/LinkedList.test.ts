import { expect } from 'chai';

import { LinkedList } from '../lib/LinkedList';

describe('Core Methods', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  const appendNodes = (values: number[]) => {
    values.forEach((value) => list.append(value));
  };

  it('should return the length of the list', () => {
    appendNodes([1, 2, 3]);
    expect(list.length).to.eql(3);
  });

  it('should return the head of the list', () => {
    appendNodes([1, 2, 3]);
    expect(list.head!.value).to.eql(1);
  });

  it('should append values to the end of the list', () => {
    appendNodes([1, 2, 3]);
    expect(list.toArray()).to.eql([1, 2, 3]);
  });

  it('should prepend values to the beginning of the list', () => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
    expect(list.toArray()).to.eql([3, 2, 1]);
  });

  it('should delete the first node with the given value', () => {
    appendNodes([1, 2, 3]);
    list.delete(2);
    expect(list.length).to.eql(2);
    expect(list.toArray()).to.eql([1, 3]);
  });
});
