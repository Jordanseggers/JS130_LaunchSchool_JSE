class Item {
  constructor(itemName, category, quantity) {
    this.itemName = itemName;
    this.category = category;
    this.quantity = quantity;
    this.skuCode = this.makeSku();
  }
  
  makeSku() {
    let itemFirst3 = [...this.itemName].filter(char => char !== " ").slice(0, 3).join("");
    let categoryFirst2 = [...this.category].slice(0, 2).join("");
    return itemFirst3 + categoryFirst2
  }
  
  nameIsValid(name) {
    return ([...name].filter(char => char !== " ").length > 4);
  }
  
  categoryIsValid(category) {
    let noSpaces = [...category].filter(char => char !== " ");
    return ((noSpaces.length === category.length) && (category.length > 4));
  }
  
  quantitiyIsValid(quantity) {
    return (quantity);
  }
}

let ItemManager = {
  allItems: [],
  
  create(itemName, category, quantity) {
    let itemInQuestion = new Item(itemName, category, quantity);
    if(itemInQuestion.nameIsValid(itemName) && itemInQuestion.categoryIsValid(category) && itemInQuestion.quantitiyIsValid(quantity)){
      this.allItems.push(itemInQuestion);
    }else{
      return {notValid: true};
    }
  },
  
  update(skuCode, updateObj){
    let item = this.findItemWithSku(skuCode);
    let key = Object.keys(updateObj);
    item[key[0]] = updateObj[key[0]];
  },
  
  delete(skuCode){
    let objToDelete = this.findItemWithSku(skuCode);
    this.allItems = this.allItems.filter(item => item !== objToDelete);
  },
  
  items(){
    return this.allItems;
  },
  
  inStock(){
    return this.allItems.filter(item => item.quantity > 0);
  },
  
  itemsInCategory(category){
    return this.allItems.filter(item => item.category === category);
  },
  
  findItemWithSku(skuCode) {
    return this.allItems.filter(item => item.skuCode === skuCode)[0];
  }
};

let ReportManager = {
  init(itemManager){
    this.items = itemManager;
  },
  
  createReporter(skuCode){
    let itemToShareInfo = this.items.findItemWithSku(skuCode);
    let infoObj = {
      itemInfo(){
        itemToShareInfo.forEach(key => {
          console.log([key, itemToShareInfo[key]]);
        });
      }
    };
    return infoObj;
  },
  
  reportInStock(){
    this.items.inStock().forEach(item => {
      console.log(item.itemName);
    });
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
ItemManager.items;

ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
ReportManager.reportInStock();

ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
ItemManager.inStock();
// football,kitchen pot
ReportManager.reportInStock();

// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.itemsInCategory('sports');

ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
ItemManager.items;

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10