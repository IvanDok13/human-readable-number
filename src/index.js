module.exports = function toReadable(number) {
    let numString = number + '';
    let humanNum = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen", "nineteen"];
    let humanNumTen = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    if (number < 20) return humanNum[number];
    if (number > 19 && number < 100) {
        if (numString[1] == 0) return `${humanNumTen[numString[0]]}`;
        return `${humanNumTen[numString[0]]} ${humanNum[numString[1]]}`;
    }
    if (number > 99) {
        if (((numString[1] + numString[2]) > 1) && ((numString[1] + numString[2]) < 20)) return `${humanNum[numString[0]]} hundred ${humanNum[+(numString[1] + numString[2])]}`;
        if (numString[1] == 0 && numString[2] == 0) return `${humanNum[numString[0]]} hundred`;
        if (numString[1] == 0) return `${humanNum[numString[0]]} hundred ${humanNum[numString[2]]}`;
        if (numString[2] == 0) return `${humanNum[numString[0]]} hundred ${humanNumTen[numString[1]]}`;
        else return `${humanNum[numString[0]]} hundred ${humanNumTen[numString[1]]} ${humanNum[numString[2]]}`;
    }
}
