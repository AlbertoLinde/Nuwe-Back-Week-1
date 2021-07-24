const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Project = require("./../model/Project.js")

const urlGit = "https://api.github.com/repos";

function getRepo(owner, repo) {

   let xhr = new XMLHttpRequest();

   xhr.open("GET", `${urlGit}/${owner}/${repo}`);
   xhr.setRequestHeader("Accept", "*/*");

   xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
         setProject(xhr.responseText);
      }else if(xhr.readyState === 4){
         console.error(`Code Error: ${xhr.status} | Message: ${JSON.parse(xhr.responseText).message}`)
      }
   };
   xhr.send();
};

function setProject(projectInfo) {
   let data = JSON.parse(projectInfo);
   return new Project(data.owner.id, data.name, data.language, data.html_url, data.owner.html_url);
}


module.exports = {
   getRepo: getRepo
};
