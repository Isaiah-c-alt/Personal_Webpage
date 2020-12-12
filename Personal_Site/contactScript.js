let name=prompt("Please enter your name: ");
if (name=="")
{
  userName="User";
}
else
{
  name[0].toUpperCase()+name.slice(1);
  var capitalize = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
  var userName=name.split(' ').map(capitalize).join(' ');
}
alert("Welcome to my site, "+userName);
alert("I am not comfortable with putting private information online the information here is all fake or not mine.");

var feedback;
var string;
function inputFunction()
{
 var feedback = document.getElementById('textArea').value;
  if (feedback.length>="3")
   {
      var string = '"'+feedback+'"';
      document.getElementById('userInput').innerHTML=string;
      document.getElementById('script').style.display="block";
      document.getElementById('lowFB').style.display="none";
   }
  else
    {
      document.getElementById('lowFB').style.display="block";
      document.getElementById('script').style.display="none";
    }
}

let count=0;
function displayFunction()
{
  if(count%2==0) {
    var x=document.getElementsByClassName('contact1');
    x[0].style.display="none";
    x[1].style.display="none";
    x[2].style.display="none";
    x[3].style.display="none";
    var y=document.getElementsByClassName('contact2');
    y[0].style.display="block";
    y[1].style.display="block";
    y[2].style.display="block";
    y[3].style.display="block";
    count++;
  }
  else {
    var y=document.getElementsByClassName('contact2');
    y[0].style.display="none";
    y[1].style.display="none";
    y[2].style.display="none";
    y[3].style.display="none";
    var x=document.getElementsByClassName('contact1');
    x[0].style.display="block";
    x[1].style.display="block";
    x[2].style.display="block";
    x[3].style.display="block";
    count++;
  }
}
