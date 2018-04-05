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
	node.previous = currentNode

	console.log(node)

	return node;
}

var dll = new DoublyLinkedList();
dll.addNode("Rajesh");
dll.addNode("Rao");
dll.addNode("Raj");

console.log(JSON.stringify(dll, null, 4))