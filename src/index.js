module.exports = function toReadable(number) {
    let n = number.toString();
    if (number < 100) {
        return toOneHundred(number);
    } else if (n.length == 3) {
        let f = parseInt(n[0]);
        let s = parseInt(n[1]);
        let t = parseInt(n[2]);
        let st = parseInt(n[1].concat(n[2]));
        if (s + t == 0) {
            return upToTen(f) + " hundred";
        } else if (t == 0) {
            return upToTen(f) + " hundred " + twentyToNinety(s);
        } else {
            return upToTen(f) + " hundred " + toOneHundred(st);
        }
    } else {
        return "number is >= 1000";
    }
};

function toOneHundred(number) {
    let n = number.toString();
    if (n.length == 1) {
        return upToTen(number);
    } else if (number > 9 && number < 20) {
        return tenToNineteen(number - 10);
    } else if (n.length == 2) {
        if (n[1] == 0) {
            return twentyToNinety(parseInt(n[0]));
        } else {
            return (
                twentyToNinety(parseInt(n[0])) + " " + upToTen(parseInt(n[1]))
            );
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
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ][n - 1];
}
