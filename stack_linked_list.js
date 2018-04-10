/*Stack implememtation using Linked List*/

function Node(data) {
	this.data = data;
	this.next = null;
}

function Stack() {
	this.head = null;
	this._length = 0;
}

Stack.prototype.push = function(data) {
	
	var node = new Node(data),
		currentNode = this.head;

	if(!currentNode) {
		this.head = node;
		this._length++;
		return node;
	}

	node.next = this.head;
	this.head = node;

	this._length++;

	return node;
}

Stack.prototype.pop = function() {
	this.head = this.head.next;
	this._length--;
}

Stack.prototype.peek = function() {
	if(!this.head) {
		console.error("Empty stack!");
		return;
	}

	console.log(this.head.data);
	return this.head.data;
}
 
var s = new Stack();
s.push("Ninja");
s.push("Injan");
s.push("Njani");
s.push("Janin");
s.push("Aninj");
s.pop();
s.peek();


console.log(JSON.stringify(s, null, 4))