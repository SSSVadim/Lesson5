class Stack{
	constructor(maxSize = 10) {		
		if ( !Number.isFinite(maxSize) ||  maxSize < 1 ){
			throw new Error ('Limit of Stack not valid')
		}
		this.size = 0;
		this.storage = {};
		this.maxSize = maxSize;
	}
	isEmpty() {
		if (this.size === 0){
			return true
		}
		return false
	}
	push(data) {
		if (this.size === this.maxSize){
			throw new Error ("Stack is full")
		}
		let size = this.size++;
		this.storage[size] = data;
	}
	pop(){
		if (this.isEmpty()){
			throw new Error('Steck is empty')
		}
		let returnElement = this.storage[this.size - 1];
		delete this.storage[this.size - 1];
		let size = this.size--;
		return returnElement
	} 
	peek(){
		if (this.isEmpty()){
			return null
		}
		return this.storage[this.size - 1]
	}
	toArray(){
		let arr = [];
		for (let key in this.storage){
			arr.push(this.storage[key])
		}
		return arr
	}
	static fromIterable(iterable){
		let length = [...iterable].length;
		
		let newStack = new Stack(length);

		for (let el of iterable){
			newStack.push(el);
		}		
		return newStack	
	}
}



module.exports = { Stack };



