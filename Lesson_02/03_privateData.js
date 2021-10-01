function makeList() {
  let items = [];

  return {
    add(newItem) {
      items.push(newItem);
      console.log(newItem + " added!");
    },
    
    remove(newItem) {
      let index = items.findIndex(item => item === newItem);
      items.splice(index, 1);
      console.log(newItem + " removed!");
    },
    
    list() {
      if(items.length === 0) {
        console.log("The list is empty.");
      } else {
        items.forEach(item => console.log(item));
      }
    }
  };
}

let list = makeList();
list.add("peas");

list.list();

list.add("corn");

list.list();

list.remove("peas");

list.list();