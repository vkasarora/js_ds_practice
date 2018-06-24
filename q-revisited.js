var output, testQ;

function Node(data) {
    this.data = data;
    this.next = null;
}

function Q() {
    this.front = this.rear = null;
    this.length = 0;
}

Q.prototype.insertNode = function(data) {

    var newNode = new Node(data),
        currentNode = this.front;


    if(currentNode == null) {
        this.front = newNode;
        this.rear = newNode;
        this.front.next = this.rear.next = null;
        this.length++;

        return newNode;
    }

    this.rear.next = newNode;
    this.rear = newNode;
    this.rear.next = null;

    return newNode;
}

Q.prototype.delete = function() {
    this.front = this.front.next;
    return this.front;
}


var testQ = new Q();
testQ.insertNode("Apples");
testQ.insertNode("Bananas");
testQ.insertNode("Cinnamon");
testQ.insertNode("Doritos");

output = JSON.stringify(testQ, 0, 1);
console.log(output);

testQ.delete();

output = JSON.stringify(testQ, 0, 1);
console.log(output);