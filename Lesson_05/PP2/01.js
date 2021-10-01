let counter;
function startCounting() {
  let output = 0;
  counter = setTimeout(function() {
    output += 1;
    console.log(output);
  }, 1000);
  
  counter();
}

function stopCounting() {
  clearInterval(counter);
}