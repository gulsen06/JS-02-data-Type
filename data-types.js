//**********Data Types***********
//!Peimitive Data Types

//! ***********Number Data Types**************
//Number:tamsayilar ve ondalikli sayilari tutar.
const age = 40;
const pi = 3.14;
console.log(pi);
//alert("bu alani bos gecmeyin");
// document.write("pi degeri", pi);
//? MATH objesi  matematiksel işlemler için gerekli metodlar barındırır.
let piDegeri = Math.PI;
console.log(piDegeri);
//Desimal (ondalikli ) sayilarin ondalik kismini yuvarlama islemi
console.log(Math.round(piDegeri));
const dec = 7.67;
console.log(Math.round(dec));
//en yakin k+ücük olan sayiya yuvarlama
console.log(Math.floor(dec));
//en yakin büyük olan sayiya yuvarlar
console.log(Math.ceil(dec));
//.toFixed() ile ondalıkla kısımdan kaç basamağın alınacağı belirtilir
console.log(piDegeri.toFixed(2));

let x = 10 / 3;
console.log(x.toFixed(2));
console.log(Math.max(2, 5, 9, 90, -1, -100));
console.log(Math.min(2, 5, 9, 90, -1, -100));
//Random metodu rast gele bir sayiyi üretmek icin kullanilir
console.log(Math.random().toFixed(3));
console.log(Math.random() * 100);
let randomNummer = Math.random() * 100;
console.log(randomNummer);
console.log(Math.round(randomNummer));

//farklil bir number olusturuldu
console.log(Math.round(Math.random() * 10));

//Pow bir sayinin kuvvetini almak icin kullanilir.sayi ve kuvvet olarak iki deger girilir
console.log(Math.pow(5, 9));

//sqrt : Square root (Karakök) Bir sayının karakökünü verir
console.log(Math.sqrt(144));

console.clear();

//! *********String Data Type************

let text = "Javascript";
console.log(typeof text);
//Stringlerin her harfi ayri ayri bir dizi elemeni olarak ulasilabilir
//o elemana sifirdan baslayarak index numarasini vererek ulasabiliriz
console.log(text[7]);
text[0] = "C";
console.log(text);
text = "Java";
console.log(text);

text = 9;
console.log(text);
console.log(typeof text);

//? Escape karekterleri(kacis karekterlerinini )  \ isaretini kullanabilirim.

// \t   tab - 8 karekter ileri atar
// \r	Satır başı (Carriage Return)
// \n	Bir alt satıra iner
// \v	Dikey Tab
// \f	Sayfa ilerleme
// \"	Çift tırnak
// \’	Tek tırnak
// \	Backslash

let text1 = "Ben Javascript'in özelliklerini ögreniyorum";
console.log(text1);

let sentence =
  "Seni iki sey anlatir\n\tHic bir sey yokken gösterdigin sabir\n\tHersey varken  sergiledigin tavir";
console.log(sentence);

//? String birlestirme islemleri
//1  +Isareti ile birlestirmek

let text2 = "Bu güzel günede Javascript ögrenmek...";
let text3 = "Ne kadar güzel";
console.log(text2 + text3);
console.log(text2 + text3 + " bir duygu");

let name = "gülsen";
let surname = "Rabia";
let job = "Developer";

console.log(
  "Persnelimiz " +
    name +
    " " +
    surname +
    " ." +
    " Firmamizda " +
    job +
    " olarak calismaktadir."
);

//2  Concat ile birlestirmek
console.log("Concat metodu ile birlestirildi: " + text2.concat(text3));

let text4 = "hey Dünya!";
let text5 = " Bir dur inecek var";

let text6 = text4.concat(text5);
console.log(text6);

console.clear();

//! Temlate Literal -String Template ES6

// Backtick `` isareti kullanilir.
let newText = `personelimiz ${name} ${surname}.Firmamizda ${job} olarak calismaktadir.`;
console.log(newText);
console.log(
  `Bu yaziyi template 
  olmadan escape karekterler ile 
  yazmam gerekirdi`
);

//! Metin bicimlendirme
document.write("<br/> <b/> <i/>" + newText);

//! *********Blooen Degiskeni************

// True yada false degerlerini tutar.

let IsOpen = true;
let IsSignUp = false;
let IsSmall = 4 < 10;

console.log(IsSmall);
// Truthy vaules
// sayilar ,karekterler,isaretler

// Falsy Vaules
//0,-0,*0,Null,undefined ,false,NaN

//! *********Undefined Degiskeni************
//Js de bir degisken bir türü ilk atanan  degere göre belirliyor. Ilk deger atanmadiginda undifined olarak taniklar.

let val;
console.log(val);
console.log(typeof val);

// deger göndermeyen bir fonksion undefined dönebilir

function example() {
  let sum = 65 + 32;
}
console.log(example());

//! *********Null Data Degiskeni************
// Bos bir degisken üretmek icin kullanilir

let empty = null;
console.log(empty);

//! ----------------------------------------------------
//! Nonprimitive Data Types
//! ----------------------------------------------------

//! ********** Array ***********
// birden fazla deger tutabilen degiskenlere array (dizi) denir

let schoolNumber = 85;

let schoolNumbers = [282, 85, 355, 435, 505, 792];
console.log(schoolNumbers[4]);

//! *********** Object *********

let obj = { name: "Gülsen", surname: "Rabia", age: "39" };
console.log(obj.surname);

//! *********** Functiont *********
function example() {
  let sum = 65 + 32;
  return sum;
}
console.log(example());

//!  --------------------------------------
//! Type Conversition
//! ----------------------------------------

//? Automatically Type  Conversion

let val1 = 10;
let val2 = "30";

console.log(val1 + val2);
console.log(val1 - val2);
console.log(val1 * val2);
console.log((val1 / val2).toFixed(2));

//? Strin to number
// parsInt
//parseFloat

let newVal = parseInt(val2);
console.log(val1 + newVal);

let decimalToString = "7.643543";
console.log(typeof decimalToString);

let toFloat = parseFloat(decimalToString);
console.log(typeof toFloat);
console.log(parseInt(decimalToString));

//? Number to string

//String()
//str.toString()

let birthday = 17;

console.log(typeof birthday);

let newBirthday = String(birthday);
console.log(typeof newBirthday);

let newBirthdayWithToString = birthday.toString();
console.log(typeof newBirthdayWithToString);
