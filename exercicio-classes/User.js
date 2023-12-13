class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login successful");
    } else {
      console.log("Login unsuccessful");
    }
  }
}

const samuel = new User("Samuel Messias", "smuelmfs76@gmail.com", "password");

samuel.login("smuelmfs76@gmail.com", "password");
samuel.login("smuelmfs76@gmail.com", "12345");
