function createBase(num1) {
    return function add(num2) {
        return num1 + num2;
    }
}

var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27