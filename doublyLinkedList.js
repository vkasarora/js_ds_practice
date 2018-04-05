function NewNode(data) {
	this.previous = null;
	this.data = data;
	this.next = null;
}

function DoublyLinkedList() {
	this.head = null;
	this._length = 0;
}

DoublyLinkedList.prototype.addNode = function(data) {

	var node = new NewNode(data),
		currentNode = this.head;


	if(!currentNode) {
		this.head = node;
		this._length++;
		return node;
	}

	while(currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;
	node.previous = currentNode;

	this._length++;

	return node;
}

DoublyLinkedList.prototype.deleteFirstNode = function() {
	this.head = this.head.next;
	this.head.previous = null
}

var dll = new DoublyLinkedList();
dll.addNode("1");
dll.addNode("2");
dll.addNode("3");
dll.addNode("4");
dll.addNode("5");

console.log(dll);

dll.deleteFirstNode()

console.log(dll);