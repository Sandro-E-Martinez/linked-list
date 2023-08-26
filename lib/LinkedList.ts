import { Node } from './Node';

export class LinkedList<T> {
  head: Node<T> | null = null;

  append(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  prepend(value: T): void {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  toArray(): T[] {
    const nodes: T[] = [];
    let current = this.head;
    while (current) {
      nodes.push(current.value);
      current = current.next;
    }
    return nodes;
  }

  print(): void {
    let current = this.head;
    let output = 'Head -> ';
    while (current) {
      output += `${current.value} -> `;
      current = current.next;
    }
    output += 'null';
    console.log(output);
  }
}
