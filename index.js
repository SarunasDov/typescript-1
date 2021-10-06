var Trikampis = (function () {
    function Trikampis(a, b, c) {
        console.log("Konstruktorius iskviestas");
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Trikampis.prototype.spausdintiDuomenis = function () {
        console.log("Trikampio krastines yra: " + this.a + ", " + this.b + ", " + this.c);
        console.log("------------");
    };
    return Trikampis;
}());
var trikampis1 = new Trikampis(5, 6, 14);
trikampis1.spausdintiDuomenis();
