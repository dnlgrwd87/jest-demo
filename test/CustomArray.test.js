import CustomArray from '../utils/CustomArray';

describe('CustomArray', () => {
    const customArray = new CustomArray(1, 2, 3, 4, 5);

    describe('#forEach', () => {
        it('should call the callback five times', () => {
            const callback = jest.fn();
            customArray.forEach(callback);
            expect(callback).toBeCalledTimes(5);
        });
    });

    describe('#map', () => {
        it('should return an array with each element multiplied by 2', () => {
            const callback = jest.fn(num => num * 2);
            const result = customArray.map(callback);
            expect(callback).toBeCalledTimes(5);
            expect(result).toEqual([2, 4, 6, 8, 10]);
        });

        it('should return an array of objects', () => {
            const callback = jest.fn(num => ({ [num]: 'value' }));
            const result = customArray.map(callback);
            expect(callback).toBeCalledTimes(5);
            expect(result).toEqual([
                { '1': 'value' },
                { '2': 'value' },
                { '3': 'value' },
                { '4': 'value' },
                { '5': 'value' }
            ]);
        });
    });

    describe('#filter', () => {
        it('should return only the even numbers in the array', () => {
            const callback = jest.fn(num => num % 2 === 0);
            const result = customArray.filter(callback);
            expect(callback).toHaveBeenCalledTimes(5);
            expect(result).toEqual([2, 4]);
        });

        it('should return only the odd numbers in the array', () => {
            const callback = jest.fn(num => num % 2 === 1);
            const result = customArray.filter(callback);
            expect(callback).toHaveBeenCalledTimes(5);
            expect(result).toEqual([1, 3, 5]);
        });
    });

    describe('#reduce', () => {
        it('should return the sum of all numbers in the array', () => {
            const callback = jest.fn((acc, val) => acc + val);
            const result = customArray.reduce(callback);
            expect(callback).toHaveBeenCalledTimes(5);
            expect(result).toBe(15);
        });

        it('should return the product of all numbers in the array when inital value is 1', () => {
            const callback = jest.fn((acc, val) => acc * val);
            const result = customArray.reduce(callback, 1);
            expect(callback).toHaveBeenCalledTimes(5);
            expect(result).toBe(120);
        });
    });
});
