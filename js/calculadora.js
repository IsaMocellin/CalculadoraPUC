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

function result() {
  try {
    let y = eval(display.value);
    if (isNaN(y) || !isFinite(y)) {
      display.value = "Error";
    } else if (y === undefined) {
      display.value = "";
    } else {
      display.value = y;
    }
  } catch (error) {
    display.value = "Error";
  }
  
}
