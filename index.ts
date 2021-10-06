/**
 * TypeScript kodas "kompiliuojamas" į JavaScript kodą panaudojant tsc modulį (https://www.typescriptlang.org/download).
 * Kompiliatoriaus konfiguracija nurodoma tsconfig.json faile.
 * Kompiliacijos procesas aktyvuojamas naudojant `tsc` komandą. Papildomai galima nurodyti `--watch` argumentą.
 * 
 * Tipus galime nurodyti: 
 * - kintamiesiems (pvz. : const x: number;), 
 * - funkcijų argumentams (pvz. : function x(y: string, z: boolean)),
 * - funkcijų grąžinamos reikšmės tipui nurodyti (pvz.: function f(): string[])
 */

// let vardas: string = "Jurgis";

// const x: number = 1;
// const y: number = 1;

// function suma(skaicius1: number, skaicius2: number): number {
//     return skaicius1 + skaicius2;
// }

// // suma(123, 43);

// 1 + "1"; // "11"
// 1 + 1; // 2

// const z = x + y;

// // console.log("Labas, pasauli!");
// // console.log(`Labas, ${vardas}`);

// const vardai: string[] = ["Jonas", "Birutė", "Barbora", "Elena"];

// vardai.push("Gediminas");

// type Pasisveikinimas = "Labas" | "Sveiki" | "Ahoy";

// function pasisveikinti(pasisveikinimas: Pasisveikinimas, vardas: string): void {
//     console.log(`${pasisveikinimas}, ${vardas}`);
// }

// function pasisveikintiSuZmonemis(vardai: string[]): void {
//     const iteratorius = (vardas: string) => {
//         pasisveikinti("Labas", vardas);
//     };

//     vardai.forEach(iteratorius);
// }

// pasisveikintiSuZmonemis(vardai);

// // Klasės (https://www.typescriptlang.org/docs/handbook/2/classes.html)
// class Gyvenviete {
//     public readonly pavadinimas: string;

//     // Kvadratiniai kilometrai
//     public readonly plotas: number;

//     public readonly gyventojuSkaicius: number;

//     constructor(pavadinimas: string, gyventojuSkaicius: number, plotas: number) {
//         console.log("Konstruktorius iškviestas");

//         this.pavadinimas = pavadinimas;
//         this.gyventojuSkaicius = gyventojuSkaicius;
//         this.plotas = plotas;
//     }

//     public spausdintiDuomenis(): void {
//         console.log(`Miesto pavadinimas: ${this.pavadinimas}`);
//         console.log(`Miesto gyventoju skaičius: ${this.gyventojuSkaicius}`);
//         console.log(`Miesto plotas: ${this.plotas} km2`);
//         console.log(`Miesto tankumas: ${this.gyventojuTankumas().toFixed(1)} gyv./km2`);
//         console.log("------------");
//     }

//     private gyventojuTankumas(): number {
//         return this.gyventojuSkaicius / this.plotas;
//     }
// }

// const gyvenviete1 = new Gyvenviete("Vilnius", 587581, 401);
// const gyvenviete2 = new Gyvenviete("Klaipėda", 149157, 110);

// gyvenviete1.spausdintiDuomenis();
// gyvenviete2.spausdintiDuomenis();

// console.log(gyvenviete1.pavadinimas);


/**
 * 1. Susikurkite TypeScript projektą
 *
 * 2. Parašykite programą, kuri padeda dirbti su trikampiais
 *
 * 3. Aprašykite klasę "Trikampis", kuri turėtu tris atributus
 * simbolizuojančius visas tris trikampio kraštines (a, b, c).
 *
 * 4. Trikampio kraštinių reikšmės turi būti priskiriamos sukuriant
 * objektą (konstruktoriuje).
 *
 * 5. Aprašykite metodą "spausdintiDuomenis()", kuris atspausdina
 * visus trikampio duomenis (kraštines) į konsolę.
 * 
 * 6. Papildykite klasę metodu, kuris apskaičiuoja ir grąžina
 * trikampio perimetrą. Spausdinant trikampio duomenis
 * atspausdinkite ir jo perimetrą.
 * 
 * 7. Parašykite metodą, kuris nusako, ar toks trikampis gali
 * egzistuoti (metodas turi grąžinti boolean reikšmę).
 * Spausdindami duomenis pasakykite, ar toks trikampis gali
 * egzistuoti.
 * 
 * 8. Papildykite klase metodu, kuris nurodo, ar trikampis yra statusis.
 */


class Trikampis {
    public a: number;
    public b: number;
    public c: number;

    constructor(a: number, b: number, c: number) {
        console.log("Konstruktorius iskviestas");

        this.a = a;
        this.b = b;
        this.c = c;
    }
    public spausdintiDuomenis(): void {

        console.log(`Krastine A: ${this.a}`);
        console.log(`Krastine B: ${this.b}`);
        console.log(`Krastine C: ${this.c}`);
        console.log(`Perimetras: ${this.perimetras}`)

        if (this.arTrikampisEgzistuoja) {
            console.log("Trikampis egzistuoja!");
        } else {
            console.log("Trikampis neagzistuoja!");
        }
        console.log("------------");

        if (this.arTrikampisStatusis) {
            console.log("Trikampis status!");
        } else {
            console.log("Trikampis ne status!");
        }
        console.log("------------");
    }

    public get perimetras(): number {
        return this.a + this.b + this.c;
    }

    public get arTrikampisEgzistuoja(): boolean {
        return this.a + this.b > this.c &&
            this.b + this.c > this.a &&
            this.c + this.a > this.b;
    }

    public get arTrikampisStatusis(): boolean {
        return this.a * this.a + this.b * this.b === this.c * this.c;
    }
}

const trikampis1 = new Trikampis(5, 6, 14);
const trikampis2 = new Trikampis(12, 16, 25);

trikampis1.spausdintiDuomenis();
trikampis2.spausdintiDuomenis();