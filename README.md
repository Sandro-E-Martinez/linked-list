# linked-list

A TypeScript implementation of a generic singly-linked list.

## Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Creating a LinkedList](#creating-a-linkedlist)
  - [Appending Elements](#appending-elements)
  - [Prepending Elements](#prepending-elements)
  - [Deleting Elements](#deleting-elements)
  - [Looking Up By Position](#looking-up-by-position)
  - [Finding the Position of a Value](#finding-the-position-of-a-value)
  - [Inserting Elements at a Specific Position](#inserting-elements-at-a-specific-position)
  - [Converting to Array](#converting-to-array)
- [Using the reverseLinkedList Helper](#using-the-reverselinkedlist-helper)
- [API](#api)
  - [Core Methods](#core-methods)
  - [Auxiliary Methods](#auxiliary-methods)
- [Helper Methods](#helper-methods)

## Installation

To install this package, run:

### Installation

To install this package, run:

```bash
npm install @sandro-e-martinez/linked-list
```

### Usage

First, import the `LinkedList` class:

```typescript
import { LinkedList } from '@sandro-e-martinez/linked-list';
```

##### Creating a LinkedList

Create a new linked list:

```typescript
const list = new LinkedList<number>();
```

##### Appending Elements

Append elements to the end of the list:

```typescript
list.append(1);
list.append(2);
list.append(3);
```

##### Prepending Elements

Prepend elements to the beginning of the list:

```typescript
list.prepend(0);
```

##### Deleting Elements

Delete the first node with a given value:

```typescript
list.delete(2);
```

##### Looking Up By Position

Retrieve a node based on its position (1-based index):

```typescript
let nodeAtThirdPosition = list.lookup(3);
```

##### Finding the Position of a Value

Find the position (1-based index) of the first occurrence of a value:

```typescript
let positionOfValue2 = list.indexOf(2); // should return 2 if the list has the value 2 at the second position
```

##### Inserting Elements at a Specific Position

Insert a value at a specific position (1-based index):

```typescript
list.insert(2, 1.5); // inserts the value 1.5 at the second position
```

#### Converting to Array

Convert the list to an array:

```typescript
const arr = list.toArray();
```

### Using the reverseLinkedList Helper

For more advanced reversing tasks, like reversing only a specific part of the list, you can use the reverseLinkedList helper function. First, import the helper:

```typescript
import { reverseLinkedList } from '@sandro-e-martinez/linked-list/helpers/reverse';

const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// Original list: [1, 2, 3, 4, 5]
list = new LinkedList(reverseLinkedList(list.head)); // Reverse entire list
// Output list [5, 4, 3, 2, 1]

// To reverse a sublist from the 2nd to 4th node (1-based index)
list = reverseLinkedList(list.head, 2, 4);
// Output list [1, 4, 3, 2, 5]
```

### API

#### Core Methods

These are the fundamental methods for manipulating the singly-linked list, including appending, prepending, and deleting nodes.

###### `append(value: T): void`

Appends a new node with the given value to the end of the list.

###### `prepend(value: T): void`

Prepends a new node with the given value to the beginning of the list.

###### `delete(value: T): void`

Deletes the first node with the given value from the list.

###### `lookup(position: number): Node<T> | null`

Retrieves a node from the linked list based on its position.

###### `indexOf(value: T): number`

Returns the position of the first node with the given value.

###### `insert(position: number, value: T): void`

Inserts a value at a specific position.

##### Auxiliary Methods

###### `toArray(): T[]`

Returns an array containing all the elements of the linked list.

### Helper Methods

These methods provide additional capabilities for manipulating your linked list, such as reversing it entirely or partially.

###### `reverse(from?: number, to?: number): void`

Reverses the entire list if no parameters are provided. Reverses a sublist from position `from` to position `to` if both are provided.
