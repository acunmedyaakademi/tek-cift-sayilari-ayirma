alert("10 Adet Sayi Giriniz!");

let tamSayilar = [];
let tekSayilar = [];
let ciftSayilar = [];

for (let i = 1; i <= 10; i++) {
    let sayi = Number(prompt(`${i}. Sayiyi Giriniz!`));
    
    tamSayilar.push(sayi);

    if(sayi % 2 === 0){
        ciftSayilar.push(sayi);
    }else{
        tekSayilar.push(sayi);
    }
}

console.log("Tam Sayılar:", tamSayilar);
console.log("Tek Sayılar:" ,tekSayilar);
console.log("Çift Sayılar:" ,ciftSayilar);


