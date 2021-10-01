function validate(inputPassword, currentPassword) {
  return inputPassword === currentPassword;
}

let account = {
  reanonymize(inputPassword) {
    function generateCharacter() {
      let char = Math.floor(Math.random() * 10);
      return char;
    }
    if(!validate(inputPassword, this.password)) {
      return "Invalid Password";
    }
    
    let anon = '';
    for (let i = 0; i < 16; i++) {
      anon += generateCharacter();
    }
    this.displayName = anon;
    return "true";
  },
  
  init(email, password, firstName, lastName) {
    let user = {
      email,
      password,
      firstName,
      lastName,
      displayName: '',
    };
    Object.setPrototypeOf(user, account);
    user.reanonymize(password);
    return user;
  }
};

let Jenny = account.init("Jenny@gmail", "hello", "Jenny", "XJ9" );
console.log(Jenny);
console.log(Jenny.reanonymize("helo"));
console.log(Jenny.displayName);