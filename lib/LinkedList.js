"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Node_1 = require("./Node");
/**
 * Generic LinkedList implementation.
 * @template T Type of the data the LinkedList stores.
 */
class LinkedList {
    constructor(head) {
        this._head = null;
        this._tail = null; // Added tail property
        this._length = 0;
        this._head = head || null;
    }
    /**
     * Gets the head node of the linked list.
     */
    get head() {
        return this._head;
    }
    /**
     * Gets the tail node of the linked list.
     */
    get tail() {
        return this._tail;
    }
    /**
     * Gets the length of the linked list.
     */
    get length() {
        return this._length;
    }
    // CORE
    /**
     * Appends a new node with the provided value to the end of the linked list.
     * @param value The value to append.
     */
    append(value) {
        const newNode = new Node_1.Node(value);
        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
            this._length = 1;
            return;
        }
        this._tail.next = newNode;
        this._tail = newNode;
        this._length++;
    }
    /**
     * Prepends a new node with the provided value to the beginning of the linked list.
     * @param value The value to prepend.
     */
    prepend(value) {
        const newNode = new Node_1.Node(value);
        if (!this._head) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            newNode.next = this._head;
            this._head = newNode;
        }
        this._length++;
    }
    /**
     * Retrieves a node from the linked list based on its position.
     * @param position The position of the node to retrieve.
     * @returns The the node at the specified position.
     */
    lookup(position) {
        if (position < 1 || position > this._length) {
            return null;
        }
        let current = this._head;
        for (let i = 1; i < position; i++) {
            current = current.next;
        }
        return current;
    }
    /**
     * Retrieves the position of the first node with the specified value.
     * @param value The value to search for.
     * @returns The position of the first node with the given value, or -1 if not found.
     */
    indexOf(value) {
        let current = this._head;
        let index = 1; // Starts at 1 now
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    /**
     * Inserts a new node with the provided value at the specified position in the linked list.
     * @param position The position at which to insert the value.
     * @param value The value to insert.
     * @throws An error if the position is invalid.
     */
    insert(position, value) {
        if (position < 1 || position > this._length + 1) {
            throw new Error('Invalid position.');
        }
        if (position === 1) {
            this.prepend(value);
            return;
        }
        else if (position === this._length + 1) {
            this.append(value);
            return;
        }
        const newNode = new Node_1.Node(value);
        const previousNode = this.lookup(position - 1);
        if (previousNode) {
            newNode.next = previousNode.next;
            previousNode.next = newNode;
        }
        this._length++;
    }
    /**
     * Deletes the first node with the provided value.
     * @param value The value of the node to delete.
     */
    delete(value) {
        if (!this._head)
            return;
        if (this._head.value === value) {
            this._head = this._head.next;
            if (!this._head) {
                this._tail = null;
            }
            this._length--;
            return;
        }
        let current = this._head;
        let prev = null;
        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }
        if (current) {
            if (prev) {
                prev.next = current.next;
                if (!current.next && this._tail === current) {
                    this._tail = prev;
                }
            }
            this._length--;
        }
    }
    /**
     * Converts the linked list to an array.
     * @returns An array containing the values of the linked list.
     */
    toArray() {
        const nodes = [];
        let current = this._head;
        while (current) {
            nodes.push(current.value);
            current = current.next;
        }
        return nodes;
    }
}
exports.LinkedList = LinkedList;
