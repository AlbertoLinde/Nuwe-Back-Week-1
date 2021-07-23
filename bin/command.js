module.exports = {
    commandHelper: commandHelper
};

function commandHelper() {
    console.log("\nList of all available commands:");
    console.log('\nOptions:\r');
    console.log('\t-l, --login\t\t' + 'Login with username and password.' + '\t\t' + 'nuwe -l [user] [password]\r');
    console.log('\t-r, --register\t\t' + 'Register new user.' + '\t\t\t\t' + 'nuwe -r [name] [username] [email] [password]\r');
    console.log('\t-s, --submit_repository\t' + 'Submit a new repository.' + '\t\t\t' + 'nuwe -s [github_url]\r');
    console.log('\t-g, --github_config\t' + 'Set GitHub username and repository url.' + '\t\t' + '[user] [password]\r');

}

