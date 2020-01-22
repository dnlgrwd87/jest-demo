export default class CustomArray {
    constructor(...args) {
        this.elements = [...args];
    }

    forEach(callback) {
        for (let i = 0; i < this.elements.length; i++) {
            callback(this.elements[i], i);
        }
    }

    map(callback) {
        const newArr = [];

        for (let i = 0; i < this.elements.length; i++) {
            newArr.push(callback(this.elements[i], i));
        }
        return newArr;
    }

    filter(callback) {
        const newArr = [];

        for (let i = 0; i < this.elements.length; i++) {
            if (callback(this.elements[i], i)) {
                newArr.push(this.elements[i]);
            }
        }
        return newArr;
    }

    reduce(callback, initialValue) {
        if (this.elements.length === 0 && !initialValue) {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        let accumulator = initialValue;

        for (let i = 0; i < this.elements.length; i++) {
            if (!accumulator) {
                accumulator = this.elements[0];
            } else {
                accumulator = callback(accumulator, this.elements[i], i);
            }
        }
        return accumulator;
    }
}
