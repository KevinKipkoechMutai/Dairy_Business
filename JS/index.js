function reportGenerate() {

    event.preventDefault();
data =[];

data[0] = data['shadeData1']=parseInt(document.getElementById('shadeData1').value);
data[1] = data['shadeData2']=parseInt(document.getElementById('shadeData2').value);
data[2] = data['shadeData3']=parseInt(document.getElementById('shadeData3').value);
data[3] = data['shadeData4']=parseInt(document.getElementById('shadeData4').value);
data[4] = data['shadeData5']=parseInt(document.getElementById('shadeData5').value);
data[5] = data['shadeData6']=parseInt(document.getElementById('shadeData6').value);

let totalSum = data.shadeData1+data.shadeData2+data.shadeData3+data.shadeData4+data.shadeData5+data.shadeData6;

document.getElementById('formData').innerHTML += '<Br>';


document.getElementById('formData').innerHTML += "<p>Your production from Shed A is " + data.shadeData1 +" liters today</p>";
document.getElementById('formData').innerHTML += "<p>Your production from Shed B is " + data.shadeData2 +" liters today</p>";
document.getElementById('formData').innerHTML += "<p>Your production from Shed C is " + data.shadeData3 +" liters today</p>";
document.getElementById('formData').innerHTML += "<p>Your production from Shed D is " + data.shadeData4 +" liters today</p>";
document.getElementById('formData').innerHTML += "<p>Your production from Shed E is " + data.shadeData5 +" liters today</p>";
document.getElementById('formData').innerHTML += "<p>Your production from Shed F is " + data.shadeData6 +" liters today</p>";


dailyIncome = totalSum * 45;

document.getElementById("formData").innerHTML += "<Br>"

document.getElementById("formData").innerHTML += "<hr>"

document.getElementById("formData").innerHTML += "<p>Total daily income is Ksh. " + dailyIncome + " </p>";

document.getElementById("formData").innerHTML += "<hr>"

weeklyIncome = dailyIncome * 7;

document.getElementById("formData").innerHTML += "<p>Total weekly income is Ksh. " + weeklyIncome + " </p>";

document.getElementById("formData").innerHTML += "<hr>"

document.getElementById("formData").innerHTML += "<Br>"


    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = dailyIncome * 30;
    incomeDecember = dailyIncome * 31;

     
    document.getElementById("formData").innerHTML += "<p> Your income for January is Ksh. " + incomeJanuary + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for February is Ksh. " + incomeFebruary + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for March is Ksh. " + incomeMarch + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for April is Ksh. " + incomeApril + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for May is Ksh. " + incomeMay + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for June is Ksh. " + incomeJune + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for July is Ksh. " + incomeJuly + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for August is Ksh. " + incomeAugust + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for September is Ksh. " + incomeSeptember + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for October is Ksh. " + incomeOctober + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for November is Ksh. " + incomeNovember + " </p>"
    document.getElementById("formData").innerHTML += "<p> Your income for December is Ksh. " + incomeDecember + " </p>"


    document.getElementById("formData").innerHTML += "<Br>"

    document.getElementById("formData").innerHTML += "<hr>"

    incomeInLeapYear = dailyIncome * 366;

    document.getElementById("formData").innerHTML += "<p> Your total income in a leap year is Ksh. " + incomeInLeapYear + " </p>";

    document.getElementById("formData").innerHTML += "<hr>"

    document.getElementById("formData").innerHTML += "<Br>"

}

