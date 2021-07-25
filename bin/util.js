function checkEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


function emailIsValid (email) {
    
  }


module.exports = {
    checkEmail: checkEmail,
    emailIsValid: emailIsValid
 };