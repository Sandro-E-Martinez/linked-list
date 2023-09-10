import { expect } from 'chai';
import { LinkedList } from '../lib/LinkedList';
import { reverseLinkedList } from '../lib/helpers/reverse';

describe('Reverse', () => {
  let list: LinkedList<number>;

  beforeEach(() => {
    list = new LinkedList<number>();
  });

  const appendNodes = (values: number[]) => {
    values.forEach((value) => list.append(value));
  };

  it('should reverse an empty list', () => {
    list = new LinkedList(reverseLinkedList(list.head));
    expect(list.toArray()).to.eql([]);
  });

  it('should reverse a list with one node', () => {
    list.append(1);
    list = new LinkedList(reverseLinkedList(list.head));
    expect(list.toArray()).to.eql([1]);
  });

  it('should reverse the entire list', () => {
    appendNodes([1, 2, 3, 4, 5]);
    list = new LinkedList(reverseLinkedList(list.head));
    expect(list.toArray()).to.eql([5, 4, 3, 2, 1]);
  });

  it('should reverse the list from the given index to the end', () => {
    appendNodes([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    list = new LinkedList(reverseLinkedList(list.head, 3));
    expect(list.toArray()).to.eql([1, 2, 9, 8, 7, 6, 5, 4, 3]);
  });

  it('should reverse a sublist from the given indices', () => {
    appendNodes([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    list = new LinkedList(reverseLinkedList(list.head, 3, 7));
    expect(list.toArray()).to.eql([1, 2, 7, 6, 5, 4, 3, 8, 9]);
  });

  it('should reverse full list from the given index if starts at 1 and ends at the length of the list', () => {
    appendNodes([1, 2, 3, 4, 5]);
    list = new LinkedList(reverseLinkedList(list.head, 1, 5));
    expect(list.toArray()).to.eql([5, 4, 3, 2, 1]);
  });
});
