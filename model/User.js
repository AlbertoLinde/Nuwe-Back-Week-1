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
};

module.exports = User;