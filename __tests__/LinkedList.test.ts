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

  it('should return the correct node when using lookup', () => {
    appendNodes([1, 2, 3]);
    expect(list.lookup(1)?.value).to.eql(1);
    expect(list.lookup(2)?.value).to.eql(2);
    expect(list.lookup(3)?.value).to.eql(3);
    expect(list.lookup(4)).to.eql(null);
  });

  it('should return the correct index when using indexOf', () => {
    appendNodes([1, 2, 3]);
    expect(list.indexOf(1)).to.eql(1);
    expect(list.indexOf(2)).to.eql(2);
    expect(list.indexOf(3)).to.eql(3);
    expect(list.indexOf(4)).to.eql(-1);
  });

  it('should maintain correct tail after appending', () => {
    appendNodes([1, 2, 3]);
    expect(list.tail!.value).to.eql(3);
    list.append(4);
    expect(list.tail!.value).to.eql(4);
  });

  it('should handle deleting non-existent value gracefully', () => {
    appendNodes([1, 2, 3]);
    list.delete(4);
    expect(list.length).to.eql(3);
    expect(list.toArray()).to.eql([1, 2, 3]);
  });

  it('should return correct tail after delete operations', () => {
    appendNodes([1, 2, 3]);
    list.delete(3);
    expect(list.tail!.value).to.eql(2);
  });
});
