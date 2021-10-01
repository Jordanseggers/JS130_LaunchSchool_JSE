class Diamond {};

Diamond.makeDiamond = function(letter) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let topOfDiamond = "";
  let letterIdx = alphabet.findIndex((char) => char === letter);
  let spacesOutside = letterIdx;
  
  topOfDiamond += (" ".repeat(spacesOutside + 1) + alphabet[0] + " ".repeat(spacesOutside + 1) + "\n");
  spacesOutside -= 1
  
  function spacesInside (idx) {
    return " ".repeat(1 + 2*idx);
  }
  
  for(let i = 1; i <= letterIdx; i++){
    topOfDiamond += (" ".repeat(spacesOutside) + alphabet[i] + spacesInside(i) + alphabet[i] + " ".repeat(spacesOutside) + "\n");
    spacesOutside -= 1;
  }
  
  let bottomOfDiamond = topOfDiamond.slice(0).split("\n").slice(0, letterIdx).reverse().join("\n");
  
  return topOfDiamond + bottomOfDiamond;
}

//console.log(Diamond.makeDiamond('E'));

module.exports = Diamond;
