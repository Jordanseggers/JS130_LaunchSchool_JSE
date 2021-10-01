function forEach(array, callback, thisArg) {
  for (let index = 0; index < array.length; index += 1) {
    callback.call(thisArg, array[index], index, array);
  }
}

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
  
  afterThis(value, index, arr) {
    console.log(`After ${value} comes ${arr[index + 1]}`);
  }
}

let foo = new Foo("Item: ");
[1, 2, 3].forEach(foo.afterThis, foo);
[4, 5, 6].forEach(foo.afterThis, foo);