function afterNSeconds(callback, secDelay) {
  let delay = 1000 * secDelay;
  return setTimeout(callback, delay);
}

afterNSeconds(function(){
  console.log("did it!");
}, 4);