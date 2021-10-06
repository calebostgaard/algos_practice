
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // if the linked list has a second to last value, print it
    // return nothing
    // input: head -> (1) -> (5) -> (11) -> (7) -> (9) ->
    // print: 7
    printSecondToLastValue() {
        let runner = this.head;

        if(!runner) return;
        if(!runner.next) return;

        while(runner.next != null){
            if (runner.next.next == null){
                console.log(runner.data);
                return;
            } runner = runner.next;
        }
    }

    // bonus: print nth to last
    // if the linke list has a nth to last value, print it
    // return nothing
    printNthToLast(n) {
        if(this.head === null) return;

        var runnerFast = this.head;
        var runnerSlow = this.head;
        var counter = 0;

        while(runnerFast){
            if(count >= n){
                runnerSlow = runnerSlow.next;
            }
            runnerFast = runnerFast.nexxt;
            count++;
        }

        if (count > n){
            console.log(runnerSlow.data);
        }
    }


    // reverse linked list in place
    // you may not swap values between nodes
    // input:  head -> (1) -> (2) -> (3) ->
    // output: head -> (3) -> (2) -> (1) ->
    reverse() {
        var prev = null;
        var curent = this.head;
        var next = null;
        while(current){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }


    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the val
    delete(data) {
        // create a runner
        let runner = this.head;
        // check if head is empty
        if (!runner) {
            return;
        }
        // check if head is target
        if (runner.data == data) {
            this.removeFromFront();
            return;
        }

        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return
                runner.next = runner.next.next;
                this.length--;
                return;
            }
            // otherwise traverse
            runner = runner.next;
        }
    }

    deleteV2(val) {
        // set runner and prev
        var runner = this.head;
        var prev = null;

        // if head is val, delete it
        if (runner !== null && runner.data == val) {
            this.head = runner.next;
            this.length--;
            return;
        }

        // move runner until it hits val
        while (runner && runner.data !== val) {
            // keep track of the prev runner in prev
            prev = runner;
            // move runner
            runner = runner.next;

        }

        // if runner never found our value or ran off the edge
        if (runner === null) {
            return;
        }

        // otherwise runner is now our node to be deleted
        prev.next = runner.next;
        this.length--;
    }

    // Return the total amount of nodes in the list
    size() {
        return this.length;
    }
    // console log (print) the data of every node in the current list
    read() {
        var current = this.head; // set curret as the head, if it exists or not

        while (current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        // if the while loop completes, return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
        this.length--;
        return removed;
    }


    // return true or false if this.head is null
    isEmpty() {
        if (this.head) {
            return true;
        } else {
            return false;
        }
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
        this.length++;
        return this;
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = newNode; // move the head to the new node
        this.length++;
        return this;
    }
}


var mySLL = new SLL();

mySLL.addToFront(new Node(13));
mySLL.addToFront(new Node(17));
mySLL.addToFront(new Node(18));
mySLL.addToFront(new Node(22));
mySLL.addDataToFront(27);

mySLL.read();
console.log(mySLL.contains(13));
console.log(mySLL.contains(14));
console.log(mySLL.size());

mySLL.delete(17);
console.log(mySLL.size());
mySLL.deleteV2(18);

console.log(mySLL.size());

