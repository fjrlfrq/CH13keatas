/*
Buatlah class yang berfungsi sebagai mesin hitung, memiliki kemampuan seperti di bawah ini:
1. inital number
2. penambahan
3. pengurangan
4. pembagian
5. perkalian
6. akar pangkat 2
7. exponent
8. dapat menghitung keliling dan luas lingkaran
*/

export const PI = 22 / 7

export default class Calculator {
    constructor() {
        this.x = 1;
    }

    add(value) {
        this.x += value;
        return this;
    }

    substract(value) {
        this.x -= value;
        return this;
    }

    multiply(value) {
        this.x *= value;
        return this;
    }

    divide(value) {
        this.x /= value;
        return this;
    }

    square() {
        this.x = this.x * this.x;
        return this;
    }

    exponent(value) {
        this.x = Math.pow(this.x, value);
        return this;
    }

    squareRoot(value){
        this.x = Math.sqrt(this.x);
        return this;
    }

    // //tambahlan method lain yang perlu

    result() {
        console.log(`${this.x}`);
    }
}