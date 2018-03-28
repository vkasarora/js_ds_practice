function NewNode(data) {
	this.data = data;
	this.next = null;	
}

function CircularLinkedList() {
	this.head = null;
}

CircularLinkedList.prototype.addNode = function(data) {

	var node = new NewNode(data),
		currentNode = this.head;
		

	if(!currentNode) {
		this.head = node;
		node.next = node;

		return node;
	}

	while(currentNode.next != this.head) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;
	node.next = this.head;

	return node;

}

CircularLinkedList.prototype.deleteFirstNode = function() {

	// console.log(this.head.next)
	var cll = this.head;


	while(cll.next != this.head) {
		cll = cll.next;
	}

	cll.next = this.head.next;
	this.head = this.head.next;

}


var cll = new CircularLinkedList();

cll.addNode(1);
cll.addNode(2);
cll.addNode(3);
cll.addNode(4);
cll.addNode(5);
cll.addNode(6);
cll.addNode(7);
cll.addNode(8);
cll.addNode(9);
cll.addNode(10);
cll.deleteFirstNode();

console.log(cll);
