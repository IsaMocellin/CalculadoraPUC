var display = document.getElementById("display");

function showDisplay(value) {
  if (value == '.') {
    display.value = '0';
  }
  display.value += value;
}

function clearAll() {
  display.value = "";
}

function result(expression) {
  try {
    let y = eval(expression);
    if (isNaN(y) || !isFinite(y)) {
      return "Error";
    } else if (y === undefined) {
      return "";
    } else {
      return y;
    }
  } catch (error) {
    return "Error";
  }
}
  
}
