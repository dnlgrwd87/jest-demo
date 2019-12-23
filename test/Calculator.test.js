import Calculator from '../utils/Calculator';
const calculator = new Calculator();

describe('Calculator', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            expect(calculator.add(1, 2)).toBe(3);
        });
    });

    describe('#subtract', () => {
        it('should subtract two numbers', () => {
            expect(calculator.subtract(1, 2)).toBe(-1);
        });
    });

    describe('#multiply', () => {
        it('should multiply two numbers', () => {
            expect(calculator.multiply(2, 5)).toBe(10);
        });
    });

    describe('#divide', () => {
        it('should divide two numbers', () => {
            expect(calculator.divide(10, 5)).toBe(2);
        });

        it('should throw an error when dividing by zero', () => {
            expect(() => calculator.divide(10, 0)).toThrowError('cannot divide by zero');
        });
    });

    describe('#calculate', () => {
        it('should call add when + is passed in', () => {
            const mock = jest.spyOn(calculator, 'add');
            expect(calculator.calculate(1, 2, '+')).toBe(3);
            expect(mock).toHaveBeenCalledWith(1, 2);
        });

        it('should call subtract when - is passed in', () => {
            const mock = jest.spyOn(calculator, 'subtract');
            expect(calculator.calculate(1, 2, '-')).toBe(-1);
            expect(mock).toHaveBeenCalledWith(1, 2);
        });

        it('should call multiply when * is passed in', () => {
            const mock = jest.spyOn(calculator, 'multiply');
            expect(calculator.calculate(1, 2, '*')).toBe(2);
            expect(mock).toHaveBeenCalledWith(1, 2);
        });

        it('should call divide when / is passed in', () => {
            const mock = jest.spyOn(calculator, 'divide');
            expect(calculator.calculate(1, 2, '/')).toBeCloseTo(0.5);
            expect(mock).toHaveBeenCalledWith(1, 2);
        });

        it('should return null with invalid input', () => {
            expect(calculator.calculate(1, 2, 'invalid')).toBe(null);
        });
    });
});
