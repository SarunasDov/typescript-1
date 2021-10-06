var Trikampiai = (function () {
    function Trikampiai(a, b, c) {
        this.printSidesLenght(a, b, c);
    }
    Trikampiai.prototype.printSidesLenght = function (a, b, c) {
        console.log("Trikampiu krastines ilgis : a -" + a + ", b -" + b + ", c -" + c);
    };
    return Trikampiai;
}());
var trikampiai = new Trikampiai(10, 20, 30);
