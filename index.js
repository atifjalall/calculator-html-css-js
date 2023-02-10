var display = (value) => {
  document.getElementById("calculator__output").value += value;
};

var clearScreen = () => {
  document.getElementById("calculator__output").value = "";
};

var mainfunc = () => {
  var value = document.getElementById("calculator__output").value;
  var result = eval(value);
  document.getElementById("calculator__output").value = result;
  console.log(result);
};
