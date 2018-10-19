function tabliczka_mnozenia() {
    let wynik = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            wynik = wynik + (i * j) + "\t"
        }
        console.log(wynik);
        wynik = "";
    }
}
tabliczka_mnozenia();