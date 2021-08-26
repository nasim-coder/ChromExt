//create a submit button
function myFunc() {
  let text = document.getElementById("id1").value;
  // console.log(text);
  var h1 = document.createElement("h1");
  h1.innerHTML = "Welcome "+text;
  h1.className = "myclass";
  document.body.insertBefore(h1, document.body.firstChild);
  document.getElementById("id1").removeAttributeNode;
  document.getElementById("id2").hidden;
}

var s = document.createElement("input");
s.setAttribute("type", "button");
// s.setAttribute("onclick", myFunc());
s.addEventListener("click", myFunc);
s.setAttribute("value", "Try It");
s.id = "id2";
document.body.insertBefore(s, document.body.firstChild);

//Create an input element for Full Name
var FN = document.createElement("input");
FN.setAttribute("type", "text");
FN.setAttribute("name", "FullName");
FN.setAttribute("placeholder", "Enter your Name");
FN.id = "id1";
document.body.insertBefore(FN, document.body.firstChild);
