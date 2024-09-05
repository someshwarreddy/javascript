// string reversal

let strngOne = 'kranthi';

function reverseString(str) {
    var reverse='';

        for (let i=str.length-1; i>=0; i--){
         reverse += str[i]
            
        }
   return reverse
}

console.log(reverseString(strngOne))

// palindrome check

let strngTwo = 'racecar';

function isPalindrome(str) {
    let isPalindrome='';
    let result;

        for (let i=str.length-1; i>=0; i--){
            isPalindrome += str[i]

            if(str === isPalindrome){
                result = isPalindrome
            }
        }
   return result
}

console.log(isPalindrome(strngTwo))

