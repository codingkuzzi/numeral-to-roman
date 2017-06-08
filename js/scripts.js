$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var numeral = parseInt($("#numeral").val());
    $("#roman").text(num2roman(numeral));
  });
});

//BACK END

function num2roman(numeral) {
  var arrayRomans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
  var arrayNumerals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var roman = "";
  if (numeral <= 0 || numeral > 3999) {
    alert("Enter numeral number from 1 to 3999");
  } else {
    for (i=0; i <= arrayNumerals.length; i++) {
      if (numeral >=arrayNumerals[i]) {
        roman += arrayRomans[i];
        numeral -= arrayNumerals[i];
        i -= 1;
      }
    }
  }
  return roman
}
