class User {
    name;
    username;
    email;
    password;
    github = {
        username, 
        urlGit,
        repository_count
    }

    constructor(name, username, email, password, github){
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.url = url;
    }
};

module.exports = User;