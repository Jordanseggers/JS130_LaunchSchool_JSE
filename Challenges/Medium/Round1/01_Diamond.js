class Diamond {};

Diamond.makeDiamond = function(letter) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let lettersInTypRow = 2;
  let letterIdx = alphabet.findIndex(char => char === letter);
  let widthAndHeight = letterIdx * 2 + 1;
  let diamondTop = [];
  let spacesBetween = 1;
  
  diamondTop.push(" ".repeat(Math.floor(widthAndHeight / 2)) + "A" + " ".repeat(Math.floor(widthAndHeight / 2)));
  if(letterIdx < 1){
    return diamondTop.join("") + "\n";
  }
  
  for(let i = 1; i <= letterIdx; i++){
    let spacesOutside = (widthAndHeight - lettersInTypRow - spacesBetween)/2;
    diamondTop.push(" ".repeat(spacesOutside) + alphabet[i] + " ".repeat(spacesBetween) + alphabet[i] + " ".repeat(spacesOutside));
    spacesBetween += 2;
  }
  
  let diamondBottom = diamondTop.slice(0, letterIdx).reverse();
  
  return diamondTop.join("\n") + "\n" + diamondBottom.join("\n") + "\n";
}

console.log(Diamond.makeDiamond("A"));

module.exports = Diamond;