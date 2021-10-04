class BeerSong {}

BeerSong.verse = function (num) {
  if (num === 0) {
    return "No more bottles of beer on the wall, no more " +
           "bottles of beer.\nGo to the store and buy some " +
           "more, 99 bottles of beer on the wall.\n";
  } else if (num === 1) {
    return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "Take it down and pass it around, no more bottles " +
            "of beer on the wall.\n";
  } else if (num === 2) {
    return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
            "Take one down and pass it around, 1 bottle of beer " +
            "on the wall.\n";
  } else {
    return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
                   `Take one down and pass it around, ${num - 1} bottles of beer ` +
                   "on the wall.\n";
  }
};

BeerSong.verses = function (start, end) {
  let versesToReturn = "";
  for (let v = start; v >= end; v--) {
    versesToReturn += BeerSong.verse(v);
    if (v > end) {
      versesToReturn += "\n";
    }
  }
  return versesToReturn;
};

BeerSong.lyrics = function () {
  return BeerSong.verses(99, 0);
};


module.exports = BeerSong;