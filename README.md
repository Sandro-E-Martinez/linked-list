# linked-list

A TypeScript implementation of a generic singly-linked list.

### Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Creating a LinkedList](#creating-a-linkedlist)
  - [Appending Elements](#appending-elements)
  - [Prepending Elements](#prepending-elements)
  - [Deleting Elements](#deleting-elements)
  - [Reversing the List](#reversing-the-list)
  - [Converting to Array](#converting-to-array)
- [API](#api)
  - [Core Methods](#core-methods)
  - [Advanced Methods](#advanced-methods)
  - [Auxiliary Methods](#auxiliary-methods)
- [License](#license)

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

#### Creating a LinkedList

Create a new linked list:

```typescript
const list = new LinkedList<number>();
```

#### Appending Elements

Append elements to the end of the list:

```typescript
list.append(1);
list.append(2);
list.append(3);
```

#### Prepending Elements

Prepend elements to the beginning of the list:

```typescript
list.prepend(0);
```

#### Deleting Elements

Delete the first node with a given value:

```typescript
list.delete(2);
```

#### Reversing the List

You can reverse the entire list using the reverse() method with no arguments.

```typescript
// Original list: [1, 2, 3, 4, 5]
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// Reverse the entire list
list.reverse();

// Resulting list: [5, 4, 3, 2, 1]
const reversedArray = list.toArray();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
```

You can reverse a specific portion of the list by specifying the from and to indices.

```typescript
// Original list: [1, 2, 3, 4, 5]
const list = new LinkedList<number>();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

// Reverse from position 2 to position 4 (1-based index)
list.reverse(2, 4);

// Resulting list: [1, 4, 3, 2, 5]
const reversedSublistArray = list.toArray();
console.log(reversedSublistArray); // Output: [1, 4, 3, 2, 5]
```

#### Converting to Array

Convert the list to an array:

```typescript
const arr = list.toArray();
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

#### Advanced Methods

These methods provide additional capabilities for manipulating your linked list, such as reversing it entirely or partially.

###### `reverse(from?: number, to?: number): void`

Reverses the entire list if no parameters are provided. Reverses a sublist from position `from` to position `to` if both are provided.

#### Auxiliary Methods

###### `toArray(): T[]`

Returns an array containing all the elements of the linked list.
