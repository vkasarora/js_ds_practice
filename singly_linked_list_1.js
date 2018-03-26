function NewNode(name) {
	this.name = name;
	this.next = null;
}

function SingleLinkedList() {
	this.head = null;
}


SingleLinkedList.prototype.insertNodeAtEnd = function(name) {

	var node = new NewNode(name),
		currentNode = this.head;


	if(!currentNode) {
		this.head = node;
		return node;
	}

	while(currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;
	return node;
}

SingleLinkedList.prototype.insertNodeAtBeginning = function(name) {
	var node = new NewNode(name),
		currentNode = this.head;

	if(!currentNode) {
		this.head = node;
		return node;
	}

	node.next = this.head;
	this.head = node;

}

SingleLinkedList.prototype.insertAfterNodeName = function(product, name) {
	var node = new NewNode(name),
		currentNode = this.head,
		preNode = currentNode.next;

	while(preNode.name != product) { 
		preNode = currentNode;
		currentNode = currentNode.next;
	}

	preNode.next = node;
	node.next    = currentNode;

}

SingleLinkedList.prototype.insertBeforeNodeName = function(product, name) {
	var node = new NewNode(name),
		currentNode = this.head,
		preNode = currentNode.next;

	while(currentNode.name != product) { 
		preNode = currentNode;
		currentNode = currentNode.next;
	}
	
	preNode.next = node;
	node.next    = currentNode;

}

SingleLinkedList.prototype.deleteFirstNode = function() {
	if(!Object.keys(this.head).length) {
		console.log("No node to delete...");
		return;
	}

	this.head = this.head.next;
}

SingleLinkedList.prototype.deleteLastNode = function() {
	var currentNode = this.head,
		preNode;
	
	while(currentNode.next) {
		preNode = currentNode;
		currentNode = currentNode.next;
	}

	preNode.next = null;
	delete currentNode

}


var test = new SingleLinkedList();

test.insertNodeAtEnd("Product A");
test.insertNodeAtEnd("Product B");
test.insertNodeAtEnd("Product C");
test.insertNodeAtEnd("Product D");
test.insertNodeAtBeginning("Product E");
test.insertNodeAtBeginning("Product F");
test.insertNodeAtBeginning("Product G");
test.insertNodeAtBeginning("Product H");
test.insertNodeAtEnd("Product G");
test.insertAfterNodeName("Product E", "Product GGG");
test.insertBeforeNodeName("Product G", "Product GGG");

test.insertNodeAtEnd("Product A");
test.insertNodeAtBeginning("Product F");
test.deleteFirstNode();
test.deleteLastNode();



// console.log(JSON.stringify(test, null, 4))