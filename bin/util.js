function checkEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function checkNumber(numberToCheck) {
    return /^\d+$/.test(numberToCheck);
}

function checkHoursAndMinutes(time) {
    
    let timeAndMinutes = time.split(":");

    if(!checkNumber(timeAndMinutes[0]) || !checkNumber(timeAndMinutes[1])){
        console.error("Only accept numbers");
        return false;
    }

    if(timeAndMinutes[0] > 23 || timeAndMinutes < 0){
        console.error("Hour need to be 00 or 23.");
        return false;
    }

    if(timeAndMinutes[1] < 0 || timeAndMinutes[1] > 59){
        console.error("Minutes need to be 00 or 59.")
        return false;
    }

    if(time < new Date().toTimeString()){
        console.error("The time entered has already happened.");
        return false;
    }
    return true;
}

module.exports = {
    checkEmail: checkEmail,
    checkHoursAndMinutes: checkHoursAndMinutes
}