class Project {
    userId;
    projectName;
    stack; 
    github_url; 
    url;

    constructor(userId, projectName, stack, github_url, url){
        this.userId = userId;
        this.projectName = projectName;
        this.stack = stack;
        this.github_url = github_url;
        this.url = url;
    }
}

module.exports = Project;