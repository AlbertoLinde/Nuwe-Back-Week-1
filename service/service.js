const https = require('https');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const urlGit = "https://api.github.com/repos"

function getRepo(owner, repo){

    let xhr = new XMLHttpRequest();

    xhr.open("GET", `${urlGit}/${owner}/${repo}`);

    
    xhr.setRequestHeader("Accept", "*/*");
    // STATUS : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
             // TODO - SAVE OWNER: UserID, name, stack, github_url, url
           console.log(JSON.parse(xhr.responseText));
        }};
     
     xhr.send();
};


module.exports = {
   getRepo: getRepo
  };
