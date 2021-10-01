function url(text){
    if(text.match(/^https?:\/\/\S+$/)){
    return true;
  }else{
    return false;
  }
}

console.log(url('http://launchschool.com'));
console.log(url('https://example.com'));
console.log(url('https://example.com hello'));
console.log(url('   https://example.com'));