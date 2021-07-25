function checkEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

module.exports = {
    checkEmail: checkEmail
 };