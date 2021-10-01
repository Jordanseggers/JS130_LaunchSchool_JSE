function makeList() {
  let listArr = []
  return function(item) {
    if (!item) {
      if (listArr.length === 0) {
        console.log('The list is empty.');
      } else {
        listArr.forEach(item => {
          console.log(item);
        });
      }
    } else if (listArr.includes(item)) {
      let idx = listArr.findIndex(element => element === item);
      listArr.splice(idx, 1);
    } else if (!listArr.includes(item)) {
      listArr.push(item);
    }
  };
}

let list = makeList();
list();

list("make breakfast");

list("read book");

list();

list("make breakfast");

list();