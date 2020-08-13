export default class Calculator {
    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2 * 2;
    }

    divide(num1, num2) {
        if (num2 == 0) {
            throw new Error('cannot divide by zero');
        }
        return num1 / num2;
    }

    calculate(num1, num2, operator) {
        switch (operator) {
            case '+':
                return this.add(num1, num2);
            case '-':
                return this.subtract(num1, num2);
            case '*':
                return this.multiply(num1, num2);
            case '/':
                return this.divide(num1, num2);
            default:
                return null;
        }
    }
}
