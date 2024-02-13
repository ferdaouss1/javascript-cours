let a=Number(document.queryselector(".age").value)
let b=Number(document.queryselector(".num").value)
//   console.log(a)
//   consol.log(b)
// document.queryselector(".resultat").value=c
 let resultat = a + b
    document.querySelector(".resultat").value=resultat


 if(resultat>20){
      document.querySelector(".resultat").style.backgroundColor = "red"
 }else{
    document.querySelector(".resultat").style.backgroundColor = "aqua"
 }
