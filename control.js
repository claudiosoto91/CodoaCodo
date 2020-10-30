function validateForm() {
  var x = document.forms["myForm"]["fusuario"].value;
  var y = document.forms["myForm"]["fclave"].value;
  if (x == "" || y == "") {
    alert("Rellene ambos  campos");
    return false;
  } else if (x.indexOf('@')== -1) {
  alert("No ingreso el @(arroba) en el Usuario")
  return false;
  }
}