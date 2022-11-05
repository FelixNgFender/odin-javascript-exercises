const reverseString = function(string) {
    if (string === '') {
        return '';
    }
    else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
    /* TOP solution
    return string.split('').reverse().join('');
     */
};

// Do not edit below this line
module.exports = reverseString;
