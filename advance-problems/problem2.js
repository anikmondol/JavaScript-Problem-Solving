/*
you will be provided an array of numbers. you have to return array of prime numbers from that input array. 

*/


function findPrimeNumber(arr){
    if(!Array.isArray(arr)){
        return 'please provide me an array of number'
    }else{
        // 0, 1 can not be prime number


        let prime = [];

        for(let item of arr){
            if(item > 1){
                let isPrime = true;
                for(let i = 2; i < item; i++){
                    if(item % i === 0){
                        isPrime = false
                        break;
                    }
                }if(isPrime === true){
                    prime.push(item)
                }
            }
            
        }
        
        return prime;
    }
}



const numbers = [4, 7, 8, 9, 2, 10];
console.log(findPrimeNumber(numbers));