"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseLinkedList = void 0;
/**
 * Reverses a linked list or a specified sublist within the linked list.
 *
 * @param head - The head node of the linked list.
 * @param from - (Optional) Starting position of sublist to reverse.
 *                If not provided, the entire list will be reversed.
 * @param to   - (Optional) Ending position of sublist to reverse.
 *                If only 'from' is provided, the function will reverse from 'from' to the end of the list.
 *
 * @returns The new head node after reversal. It returns the original
 *          head if the sublist starts at a node other than the head or if the entire list is reversed.
 *
 * @throws {Error} If 'from' and 'to' values are not valid, if 'from' and 'to' are equal.
 */
function reverseLinkedList(head, from, to) {
    if (!head)
        return null;
    if (from !== undefined &&
        (from <= 0 || (to !== undefined && (to < from || from === to)))) {
        throw new Error("Invalid 'from' and 'to' values.");
    }
    let startNode = null;
    let current = head;
    let next = null;
    let index = 1;
    while (current) {
        if (index === from || (from === undefined && to === undefined)) {
            let subListPrev = null;
            let subListTail = current;
            while (current && (to === undefined || index <= to)) {
                next = current.next;
                current.next = subListPrev;
                subListPrev = current;
                current = next;
                index++;
            }
            if (startNode) {
                startNode.next = subListPrev;
                subListTail.next = current;
                return head; // head remains the same
            }
            else {
                subListTail.next = current;
                return subListPrev; // the sublist starts at the head or entire list reversed
            }
        }
        startNode = current;
        current = current.next;
        index++;
    }
    return head;
}
exports.reverseLinkedList = reverseLinkedList;
