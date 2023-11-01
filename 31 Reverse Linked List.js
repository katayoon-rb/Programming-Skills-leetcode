/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    let prev = null
    let current = head

    while(current !== null ){
        prev = new ListNode(current.val, prev)
        current = current.next
    }

    return prev
}
