/*Даний масив числами, наприклад: [10, 20, 30, 50, 235, 3000]. Виведіть на екран лише ті числа з масиву, 
які починаються на цифру 1, 2 чи 5.*/
let arr=[10, 20, 30, 50, 235, 3000];
for(let i=0;i<arr.length;i++){
    let firstDigit=arr[i].toString()[0];
    if(firstDigit==='1'||firstDigit==='2'||firstDigit==='5'){
        console.log(arr[i])
    }
}