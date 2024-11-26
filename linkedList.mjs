export class LinkedList{
    constructor(){
        this.header = null;
        this.tail = null;
    }
    append(value){
        // adds a new node containing value to the end of the list
        const newNode = new Node(value);
        //if list is empty
        if(!this.header){
            this.header = newNode;
            this.tail = newNode;
            return;
        }
        //if list is not empty
        this.tail.nextNode = newNode;
        this.tail = newNode;
        
    }
    prepend(value){
        // adds a new node containing value to the start of the list
        const newNode = new Node(value);
        if(!this.header){
            this.header = newNode;
            this.tail = newNode;
            return;
        }
        //if list is not empty
        newNode.nextNode = this.header;
        this.header = newNode;
    }
    size(){
        // size returns the total number of nodes in the list
        let nodeCount = 0;
        let ptr = this.header;
        while(ptr!=null){
            nodeCount++;
            ptr = ptr.nextNode;
        }
        return nodeCount;
    }
    head(){
        // returns the first node in the list
        return this.header;// is this right? 
    }
    tail(){
        // returns the last node in the list
        return this.tail;
    } 
    at(index){
        //  returns the node at the given index
        if (index < 0) return null; // handle negative indices

        let ptr = this.header;
        let i = 0;
        while(ptr!=null){
            if(i===index){
                return ptr;
            }
            ptr = ptr.nextNode;
            i++;
        }

        return null; //if index is out of bounds
    }
    pop(){
        // removes the last element from the list

        // If list is empty
        if (!this.header) return null;
        
        // If only one element
        if (this.header === this.tail) {
            const removedNode = this.header;
            this.header = null;
            this.tail = null;
            return removedNode;
        }
        
        // Traverse to find the second-to-last node
        let current = this.header;
        while (current.nextNode !== this.tail) {
            current = current.nextNode;
        }
        
        // Remove the last node
        const removedNode = this.tail;
        current.nextNode = null;
        this.tail = current;
        
        return removedNode;


    } 
    contains(value){
        // returns true if the passed in value is in the list and otherwise returns false.
        if (value == null) return false;
        
        let ptr = this.header;
        while(ptr!=null){
            if(ptr.value === value) return true;
            ptr = ptr.nextNode;
        }
        return false;
    }
    find(value){
        //  returns the index of the node containing value, or null if not found.
        if(value!=null){
            let ptr = this.header;
            let i =0;
            while(ptr!=null){
                if(ptr.value === value) return i;
                ptr = ptr.nextNode;
                i++;
            }
        }
        return null;
    }
    toString(){
        //  represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
        // The format should be: ( value ) -> ( value ) -> ( value ) -> null
        let outputString = '';
        let ptr = this.header;
        while(ptr!=null){
            outputString= outputString+`(${ptr.value})->`
            ptr = ptr.nextNode;
        }
        return outputString+'null';
    }
    
}

class Node{
    constructor(value = null){
        this.value = value;
        this.nextNode = null;
    }
}

