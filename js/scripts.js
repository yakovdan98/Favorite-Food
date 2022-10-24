function formSubmit(event){
  event.preventDefault();
  console.log("submitting form");
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;
  const input3 = document.getElementById("input3").value;
  const inputs = [input1, input2, input3];
  const br = document.querySelector("br");
  
  const newInputs = [];
  newInputs.push(inputs[1], inputs[0], inputs[2]);
  console.log(newInputs);
  
  const input1Li = document.createElement("li");
  input1Li.append(newInputs[0]);
  const input2Li = document.createElement("li");
  input2Li.append(newInputs[1]);
  const input3Li = document.createElement("li");
  input3Li.append(newInputs[2]);

  const ul = document.createElement("ul");
  ul.append(input1Li, input2Li, input3Li);
  br.after(ul);
}
window.addEventListener("load", function () {
  console.log("page loaded");
  this.document.querySelector("form").addEventListener("submit", formSubmit);
});