module.exports = function toReadable(number) {
    if (number < 100) {
        return toOneHundred(number);
    } else if (number.toString().length == 3) {
        let f = number.toString()[0];
        let s = number.toString()[1];
        let t = number.toString()[2];
        let st = parseInt(s, t);
        if (parseInt(s) + parseInt(t) == 0) {
            return upToTen(f) + " hundred";
        } else if (parseInt(t) == 0) {
            return upToTen(f) + " hundred " + twentyToNinety(parseInt(s));
        } else {
            return upToTen(f) + " hundred " + toOneHundred(parseInt(s + t));
        }
    } else {
        return "number is >= 1000";
    }
};

function toOneHundred(number) {
    if (number.toString().length == 1) {
        return upToTen(number);
    } else if (number > 9 && number < 20) {
        return tenToNineteen(number - 10);
    } else if (number.toString().length == 2) {
        if (number.toString()[1] == 0) {
            return twentyToNinety(number.toString()[0]);
        } else {
            let n = number.toString()[0];
            let m = number.toString()[1];
            return twentyToNinety(n) + " " + upToTen(m);
        }
    }
}

function upToTen(n) {
    return [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ][n];
}

function tenToNineteen(n) {
    return [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ][n];
}
function twentyToNinety(n) {
    return [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ][n];
}
