/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    const result = { val: 0, next: null }
    let sum, current = result, left, move = 0

    while (true) {
        sum = move + (l1?.val ?? 0) + (l2?.val ?? 0)
        left = sum % 10
        move = (sum - left) / 10

        current.val = left
        
        l1 = l1?.next
        l2 = l2?.next

        if (l1 || l2) {
            current.next = { val: 0, next: null }
            current = current.next
        }
        else {
            if (move > 0) { current.next = { val: move, next: null } }
            return result
        }
    }
}
