function Stack() {
	this.arr = [];
	this.max = 7;
	this.top = null;
	this._length = 0;
}

Stack.prototype._push = function(data) {

	if(this.arr.length == this.max) {
		console.error("Stack Overflow, max elements: "+this.max);
		return;
	}

	if(this.arr.length == 0) {
		this.arr[0] = data;
		this.top = this.arr[this.arr.length-1];
		this._length++;

		return this.arr
	} 
	
	this.arr[this.arr.length] = data;
	this.top = this.arr[this.arr.length-1]
	this._length++;

	return this.arr
}

Stack.prototype._pop = function() {
	if(!this.top) {
		console.log("Stack is empty, nothing to pop.");
		return;
	}
	this.arr.length--;
	this._length--;
	
	this.top = this.arr[this.arr.length-1];
	
	
	return this.arr;
}

Stack.prototype._peek = function() {
	if(!this.top) {
		console.log("Stack is empty, nothing to peek.");
		return;
	}

	console.log(this.top)
	return this.top;
}

var s = new Stack();

s._push("11")
s._push("22")
s._push("333")
s._push("44")
s._push("55")
s._push("66")
s._push("777")

s._peek()

console.log(s)