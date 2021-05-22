// i/p ["A1",1,3,22,4,"B1","O"]
// expected o/p [1,3,4,22,A1,B1,O]
let numberArray = []
let alphabetArray = []

function sortedArray(array){
  for(let i=0;i<array.length;i++){
    if(typeof array[i] == "number"){
      numberArray.push(array[i])
      numberArray.sort((a,b)=>{
        return a-b
      })
      
    }
    else{
      alphabetArray.push(array[i])
      alphabetArray.sort()
      
    }
  }
}

console.log(sortedArray(["A1",1,3,22,4,"B1","O"]))
console.log(numberArray.concat(alphabetArray))