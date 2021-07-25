class User {
    name;
    username;
    email;
    password;
    github;

    constructor(name, username, email, password, github){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.github = github;
    }
};

module.exports = User;