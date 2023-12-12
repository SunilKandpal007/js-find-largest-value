/* find largest value among three input values */
function findLarg(){

    let num1 = parseFloat(document.getElementById('fvalue').value);
    let num2 = parseFloat(document.getElementById("svalue").value);
    let num3 = parseFloat(document.getElementById("tvalue").value);
    
    if(isNaN(num1)){
        document.getElementById('result1').style.color='red';
        document.getElementById('result1').style.background='yellow';
        document.getElementById('result1').innerText= `Alert! First input value is empty.`;
    }
    else if(isNaN(num2)){
        document.getElementById('result1').style.color='red';
        document.getElementById('result1').style.background='yellow';
        document.getElementById('result1').innerText=`Alert! Second input value is empty.`;
    }
    else if(isNaN(num3)){
        document.getElementById('result1').style.color='red';
        document.getElementById('result1').style.background='yellow';
        document.getElementById('result1').innerText=`Alert! Third input value is empty.`;
    }

    else if(num1 > num2 && num1 > num3){        
        document.getElementById('result1').style.color='white';
        document.getElementById('result1').style.background='green';
        document.getElementById('result1').innerText = `Result: ${num1} is the largest value`;
    }
    else if(num2 > num1 && num2 > num3){
        document.getElementById('result1').style.color='white';
        document.getElementById('result1').style.background='green';

        document.getElementById('result1').innerText = `Result: ${num2} is the largest value`;
    }
    else{
        document.getElementById('result1').style.color='white';
        document.getElementById('result1').style.background='green';

        document.getElementById('result1').innerText = `Result: ${num3} is the largest value amongst: ${num1}-${num2}-${num3}`;
    }
}