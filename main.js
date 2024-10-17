document.getElementById('test')
.addEventListener('click',()=>{
    alert('pop up');
})

let tableau = [0,1,2,3,4,5]

tableau.forEach((numero, index)=>{
    console.log(numero + tableau[index+1]);
})