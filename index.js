var Trikampis = (function () {
    function Trikampis(a, b, c) {
        console.log("Konstruktorius iskviestas");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Trikampis.prototype.spausdintiDuomenis = function () {
        console.log("Krastine A: " + this.a);
        console.log("Krastine B: " + this.b);
        console.log("Krastine C: " + this.c);
        console.log("Perimetras: " + this.perimetras());
        console.log("------------");
    };
    Trikampis.prototype.perimetras = function () {
        return this.a + this.b + this.c;
    };
    return Trikampis;
}());
var trikampis1 = new Trikampis(5, 6, 14);
var trikampis2 = new Trikampis(12, 16, 25);
trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();
