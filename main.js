document.getElementById('test')
.addEventListener('click',()=>{
    alert('pop up');
})

let talbeau = [0,1,2,3,4,5]

talbeau.forEach((numero, index)=>{
    console.log(numero + tableau[index+1]);
})