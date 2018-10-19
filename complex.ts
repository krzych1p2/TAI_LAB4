// complex.js
// ES6 zawiera deklaracje klas
// ES5 deklaruje swoje klasy jako funkcje, a metody klasy jako funkcje Class.Prototype
class Complex {
    private real : number;
    private imag : number;

    constructor(real: number, imag: number) {
        this.real = real;
        this.imag = imag;
    }

    getReal():number{
        return this.real;
    }
    getImaginary():number{
        return this.imag;
    }


    add(other:Complex):Complex{
        return new Complex(this.real+other.getReal(),this.imag+other.getImaginary());
    }
    sub(other:Complex):Complex{
        return new Complex(this.real-other.getReal(),this.imag-other.getImaginary());
    }
    toString():String{
        return this.getReal()+" + "+this.getImaginary()+"i";
    }
    module():number{
        return Math.sqrt(Math.pow(this.real,2) + Math.pow(this.imag,2));
    }
}

let com1 = new Complex(6,7);
let com2 = new Complex(3,2);

console.log(com1.add(com2).toString());
console.log(com1.sub(com2).toString());
console.log(com1.module());
console.log(com2.module());