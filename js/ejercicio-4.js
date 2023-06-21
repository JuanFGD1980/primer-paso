let valor;
let valor1;
let valor2;
let valor3;

const reverseString = () => {

  let inputValue = document.getElementById("inputId").value; 
      document.getElementById("labelInfo").innerHTML = inputValue;

      let inputValue1 = document.getElementById("inputId").value; 

      let inputValue2 = document.getElementById("inputId").value; 
      let inputValue3 = document.getElementById("inputId").value; 


      valor = inputValue.split("").reverse().join("");

      valor1 =inputValue1.split("");

      valor2 =inputValue2.split("").reverse();

      valor3 =inputValue3.split("").reverse().join();

      console.log(valor1);
      console.log(valor2);
      console.log(valor3);

      document.getElementById("labelInfo2").innerHTML = valor;
      document.getElementById("inputId").value = "";
}