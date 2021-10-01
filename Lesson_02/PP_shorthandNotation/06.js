function product(arguments) {
  return arguments.reduce((total, number) => total * number);
}

let result = product.apply(2, 3, 4, 5);