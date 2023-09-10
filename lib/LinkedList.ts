import { Node } from './Node';

/**
 * Generic LinkedList implementation.
 * @template T Type of the data the LinkedList stores.
 */
export class LinkedList<T> {
  private _head: Node<T> | null = null;
  private _tail: Node<T> | null = null; // Added tail property
  private _length: number = 0;

  /**
   * Gets the head node of the linked list.
   */
  get head(): Node<T> | null {
    return this._head;
  }

  /**
   * Gets the tail node of the linked list.
   */
  get tail(): Node<T> | null {
    return this._tail;
  }

  /**
   * Gets the length of the linked list.
   */
  get length(): number {
    return this._length;
  }

  // CORE

  /**
   * Appends a new node with the provided value to the end of the linked list.
   * @param value The value to append.
   */
  append(value: T): void {
    const newNode = new Node(value);
    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
      this._length = 1;
      return;
    }

    this._tail!.next = newNode;
    this._tail = newNode;
    this._length++;
  }

  /**
   * Prepends a new node with the provided value to the beginning of the linked list.
   * @param value The value to prepend.
   */
  prepend(value: T): void {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    if (!this._tail) {
      this._tail = newNode;
    }
    this._length++;
  }

  /**
   * Deletes the first node with the provided value.
   * @param value The value of the node to delete.
   */
  delete(value: T): void {
    if (!this._head) return;

    if (this._head.value === value) {
      this._head = this._head.next;
      if (!this._head) {
        this._tail = null;
      }
      this._length--;
      return;
    }

    let current = this._head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next;
        if (!current.next) {
          this._tail = current;
        }
        this._length--;
        return;
      }

      current = current.next;
    }
  }

  // ADVANCED

  /**
   * Reverses the list or a part of it.
   * @param from Starting index of sublist to reverse.
   * @param to Ending index of sublist to reverse.
   */
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

  /**
   * Converts the linked list to an array.
   * @returns An array containing the values of the linked list.
   */
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
