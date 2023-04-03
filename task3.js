//Даний об'єкт obj. За допомогою циклу for-in виведіть на екран ключі та елементи об'єкта.
let obj = {green: 'зелений', red: 'червоний', blue: 'голубий'};
for(let key in obj){
    console.log(key+ '-це ' + obj[key]+'.');
}