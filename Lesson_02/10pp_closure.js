function bind(obj, func) {
  return function() {
    func.call(obj);
  };
}

"use strict";

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }