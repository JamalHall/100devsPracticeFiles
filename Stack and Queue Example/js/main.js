// stack and que OOP style

function Queue() {
    var collection = [];
    this.print = function () {
      console.log(collection);
    }
    this.enqueue = function (element) {
      collection.push(element);
    }
    this.dequeue = function () {
      return collection.shift();
    }
    this.front = function () {
      return collection[0];
    }
  
    this.isEmpty = function () {
      return collection.length === 0;
    }
    this.size = function () {
      return collection.length;
    }
  }



  function Stack() {
    this.count = 0;
      this.storage = {};
    
      this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
      }
    
      this.pop = function () {
        if (this.count === 0) {
          return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
      }
    
      this.peek = function () {
        return this.storage[this.count - 1];
      }
    
      this.size = function () {
        return this.count;
      }
    }