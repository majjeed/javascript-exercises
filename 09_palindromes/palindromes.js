const palindromes = function (str) {
    let cleanedStr = str.match(/\w/gi).join("").toLowerCase();
    return cleanedStr === cleanedStr
                        .split("")
                        .reverse()
                        .join("");
};

// Do not edit below this line
module.exports = palindromes;
