/* Array implementation of linear queue.  */
var arrSize = 5
    arrMaxSize = arrSize-1,
    q = new Array(arrSize),
    front = -1, rear = -1;

function insertData(data) {

    if(rear > arrMaxSize) {
        console.error("Overflow. No space in array left");
        return;
    }

    if(front == -1 && rear == -1) {
        front = rear = 0;
    } else {
        rear++;
    }

    q[rear] = data;
    
    return q;
}

function deleteData() {
    if((front == -1) || (front > rear)) {
        console.error("Array Underflow!");
        front = rear = -1;
        return;
    }
    q.shift();
    return q;
}


insertData("Apples")
insertData("Butterfruit")
insertData("Cinnamon")
insertData("Dota")
insertData("Epiglotis")
deleteData();
insertData("Epiglotis")


console.log(q);