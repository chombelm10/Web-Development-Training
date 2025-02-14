document.getElementById("mytemp").textContent="TEMPRATURE CONVERSION";
const celsius=document.getElementById("celsius");
const tempvalue=document.getElementById("tempvalue");
const fahrenheit=document.getElementById("fahrenheit");
const mysubmit=document.getElementById("mysubmit");
const result=document.getElementById("result");
let val;
function temp(){
    if(celsius.checked){
        val=Number(tempvalue.value);
        val=(val*9/5)+32;
        result.textContent="The corresponding Fahrenheit value is: " + val;
    }
    else if(fahrenheit.checked){
        val=Number(tempvalue.value);
        val=(5/9)*(val-32);
        result.textContent="The corresponding Celsius value is: " + val;
    }
    else{
        result.textContent="please set your unit";
    }
}