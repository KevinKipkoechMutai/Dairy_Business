function reportGenerate{
data =[];

data[0] = data['shadeData1']=parseInt(document.getElementById('shadeData1').value);
data[1] = data['shadeData2']=parseInt(document.getElementById('shadeData2').value);
data[2] = data['shadeData3']=parseInt(document.getElementById('shadeData3').value);
data[3] = data['shadeData4']=parseInt(document.getElementById('shadeData4').value);
data[4] = data['shadeData5']=parseInt(document.getElementById('shadeData5').value);
data[5] = data['shadeData6']=parseInt(document.getElementById('shadeData6').value);

let totalSum = data.shadeData1+data.shadeData2+data.shadeData3+data.shadeData4+data.shadeData5+data.shadeData6;

document.getElementById('formData').innerHTML += '<Br>'


document.getElementById('formData').innerHTML += "<p>Your production from Shed A is " + data.shadeData1 +" liters today</p>"
document.getElementById('formData').innerHTML += "<p>Your production from Shed B is " + data.shadeData2 +" liters today</p>"
document.getElementById('formData').innerHTML += "<p>Your production from Shed C is " + data.shadeData3 +" liters today</p>"
document.getElementById('formData').innerHTML += "<p>Your production from Shed D is " + data.shadeData4 +" liters today</p>"
document.getElementById('formData').innerHTML += "<p>Your production from Shed E is " + data.shadeData5 +" liters today</p>"
document.getElementById('formData').innerHTML += "<p>Your production from Shed F is " + data.shadeData6 +" liters today</p>"


}
