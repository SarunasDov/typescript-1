class Trikampis {
    constructor(a, b, c) {
        console.log("Konstruktorius iskviestas");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    spausdintiDuomenis() {
        console.log(`Krastine A: ${this.a}`);
        console.log(`Krastine B: ${this.b}`);
        console.log(`Krastine C: ${this.c}`);
        console.log(`Perimetras: ${this.perimetras}`);
        if (this.arTrikampisEgzistuoja) {
            console.log("Trikampis egzistuoja!");
        }
        else {
            console.log("Trikampis neagzistuoja!");
        }
        console.log("------------");
        if (this.arTrikampisStatusis) {
            console.log("Trikampis status!");
        }
        else {
            console.log("Trikampis ne status!");
        }
        console.log("------------");
    }
    get perimetras() {
        return this.a + this.b + this.c;
    }
    get arTrikampisEgzistuoja() {
        return this.a + this.b > this.c &&
            this.b + this.c > this.a &&
            this.c + this.a > this.b;
    }
    get arTrikampisStatusis() {
        return this.a * this.a + this.b * this.b === this.c * this.c;
    }
}
const trikampis1 = new Trikampis(5, 6, 14);
const trikampis2 = new Trikampis(12, 16, 25);
trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();
