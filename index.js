var vardas = "Jurgis";
var x = 1;
var y = 1;
function suma(skaicius1, skaicius2) {
    return skaicius1 + skaicius2;
}
1 + "1";
1 + 1;
var z = x + y;
var vardai = ["Jonas", "Birutė", "Barbora", "Elena"];
vardai.push("Gediminas");
function pasisveikinti(pasisveikinimas, vardas) {
    console.log(pasisveikinimas + ", " + vardas);
}
function pasisveikintiSuZmonemis(vardai) {
    var iteratorius = function (vardas) {
        pasisveikinti("Labas", vardas);
    };
    vardai.forEach(iteratorius);
}
pasisveikintiSuZmonemis(vardai);
var Gyvenviete = (function () {
    function Gyvenviete(pavadinimas, gyventojuSkaicius, plotas) {
        console.log("Konstruktorius iškviestas");
        this.pavadinimas = pavadinimas;
        this.gyventojuSkaicius = gyventojuSkaicius;
        this.plotas = plotas;
    }
    Gyvenviete.prototype.spausdintiDuomenis = function () {
        console.log("Miesto pavadinimas: " + this.pavadinimas);
        console.log("Miesto gyventoju skai\u010Dius: " + this.gyventojuSkaicius);
        console.log("Miesto plotas: " + this.plotas + " km2");
        console.log("Miesto tankumas: " + this.gyventojuTankumas().toFixed(1) + " gyv./km2");
        console.log("------------");
    };
    Gyvenviete.prototype.gyventojuTankumas = function () {
        return this.gyventojuSkaicius / this.plotas;
    };
    return Gyvenviete;
}());
var gyvenviete1 = new Gyvenviete("Vilnius", 587581, 401);
var gyvenviete2 = new Gyvenviete("Klaipėda", 149157, 110);
gyvenviete1.spausdintiDuomenis();
gyvenviete2.spausdintiDuomenis();
console.log(gyvenviete1.pavadinimas);
