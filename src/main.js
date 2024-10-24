
let tableau = [0,1,2,3,4,5]

tableau.forEach((numero, index)=>{
    if(tableau[index+1]){
        console.log(numero + tableau[index+1]);
    }
})

