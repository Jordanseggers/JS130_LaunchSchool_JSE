function formatDate(messyDate) {
  return messyDate.replace(/\-/g, ".");
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2016/06/17')); // -> '2016/06/17' (no change)