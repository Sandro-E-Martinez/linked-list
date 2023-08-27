import { Node } from './Node';

export class LinkedList<T> {
  private _head: Node<T> | null = null;
  private _length: number = 0;

  get head(): Node<T> | null {
    return this._head;
  }

  get length(): number {
    return this._length;
  }

  // CORE

  // Add a new node at the end of the list
  append(value: T): void {
    const newNode = new Node(value);
    if (!this._head) {
      this._head = newNode;
      this._length = 1;
      return;
    }

    let current = this._head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this._length++;
  }

  // Add a new node at the beginning of the list
  prepend(value: T): void {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
  }

  // Delete the first node with the given value
  delete(value: T): void {
    if (!this._head) return;

    if (this._head.value === value) {
      this._head = this._head.next;
      this._length--;
      return;
    }

    let current = this._head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        this._length--;
        return;
      }

      current = current.next;
    }
  }

  // ADVANCED

  // Reverse the list

  reverse(from?: number, to?: number): void {
    if (from === undefined && to === undefined) {
      this.reverseEntireList();
    } else {
      this.reverseSubList(from!, to!);
    }
  }

  private reverseEntireList(): void {
    if (!this._head) return;

    let prev: Node<T> | null = null;
    let current: Node<T> | null = this._head;
    let next: Node<T> | null = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this._head = prev;
  }

  private reverseSubList(from: number, to: number): void {
    if (!this._head) return;

    if (from > to) throw new Error('"To" must be greater than "from"');
    if (from < 1) throw new Error('"From" must be greater than 0');
    if (to < 1) throw new Error('"To" must be greater than 0');
    if (from > this._length)
      throw new Error('"From" must be less than the length of the list');
    if (to > this._length)
      throw new Error('"To" must be less than the length of the list');

    let startNode: Node<T> | null = null;
    let current: Node<T> | null = this._head;

    for (let i = 1; i < from; i++) {
      startNode = current;
      current = current!.next;
    }

    let newList: Node<T> | null = null;
    let newListTail: Node<T> | null = current;
    let next: Node<T> | null = null;

    for (let i = from; i <= to; i++) {
      next = current!.next;
      current!.next = newList;
      newList = current;
      current = next;
    }

    if (startNode) {
      startNode.next = newList;
    } else {
      this._head = newList;
    }

    newListTail!.next = current;
  }

  // AUXILIARY

  toArray(): T[] {
    const nodes: T[] = [];
    let current = this._head;
    while (current) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }
}
