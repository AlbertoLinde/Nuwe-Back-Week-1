function checkEmail(email){
    let mailRegex = "/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/"
    if(email.value.match(mailRegex)){
        return true;
    }
    return false;
}