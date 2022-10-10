//Validation Expressions  
let phoneRegex = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/;
let wholeNum = /^[0-9][0-9]{0,}$/;

function Checkout()
{
    let names = document.getElementById("userName").value;
    let phone = document.getElementById("userPhone").value;
    let email = document.getElementById("userEmail").value;
    let employementInc = document.getElementById('userEmpInc').value;
    let otherInc =  document.getElementById('userOtheInc').value;
    let paidIncTax = document.getElementById('userIncTaxPaid').value;

    let errorMessage = "";

    let totalIncome = 0;
    let totalincomeTax = 0;
    let incomeTaxPayable = 0;

    //performing validation
    if (names === "" ) 
    {
        errorMessage += "Please enter the name <br>";    
    }
    if (phone === "" ) 
    {
        errorMessage += "Please enter phone number <br>";    
    }
    if ( !phoneRegex.test(phone))
    {
        errorMessage += "Please enter phone number in the right format <br>";
    }
    if (email === "" ) 
    {
        errorMessage += "Please enter email <br>";    
    }
    if (!wholeNum.test(employementInc))
    {
        errorMessage += 'Please enter a positive whole number for Employement Income <br>';
    } 
    if (!wholeNum.test(otherInc))
    {
        errorMessage += 'Please enter a positive whole number for Other Income <br>';
    } 
    if (!wholeNum.test(paidIncTax))
    {
        errorMessage += 'Please enter a positive whole number for Income Taxes Paid <br>';
    } 

    document.getElementById('error').innerHTML=errorMessage;
    
    totalIncome = parseInt(employementInc) + parseInt(otherInc); //1,00000

    if(totalIncome < 60000)
    {
        totalincomeTax = (20/100) * totalIncome;
    }

    if(totalIncome >=60000 && totalIncome <=90,000)
    {
        totalincomeTax = (25/100) * totalIncome;
    }

    if(totalIncome > 90000)
    {
        totalincomeTax = (34/100) * totalIncome;
    }

    incomeTaxPayable = parseInt(totalincomeTax) - parseInt(paidIncTax);

    var outputResult = "";

    outputResult += ` Name : ${names} <br>`;
    outputResult += ` Phone : ${phone} <br>`;
    outputResult += ` Email : ${email   } <br>`;
    outputResult += ` Total Income : $${totalIncome} <br>`;
    outputResult += ` Total Income Tax : $${totalincomeTax} <br>`;
    outputResult += ` Income Tax Paid : $${paidIncTax} <br>`;
    outputResult += ` Income Tax Payable : $${incomeTaxPayable} <br>`;

    if(errorMessage === ""){
        document.getElementById('checking').innerHTML= outputResult;
    }  
    else{
        document.getElementById('checking').innerHTML= "";
    }
}