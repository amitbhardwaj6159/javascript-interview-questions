
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;

    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value){
        const newNode = new Node(value);
        if(this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = this.head;
        }
        this.length++;
    }

    pop(){
        let current = this.head;
        let previous = null;
        while(current.next){
            console.log(current.value);
            if(current.next == this.tail) {
                this.tail = current;
                current.next = null;

            } else {
                current = current.next;
            }
            
        }
        this.length--;
        

    }

   

}


const myLinkedList = new SinglyLinkedList();
myLinkedList.push("Hi ");
myLinkedList.push("Amit ");
myLinkedList.push("How are you? ");
myLinkedList.pop();
console.log(myLinkedList);