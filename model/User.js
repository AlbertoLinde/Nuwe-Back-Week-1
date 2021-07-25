class User {
    name;
    username;
    email;
    password;
    

    constructor(name, username, email, password, github){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
    }
};

module.exports = User;