(function simple_interest()
{
	var p = prompt("Enter principal amount for calutating Interest", "100");
	var r = prompt("Enter rate for calutating Interest", "2");
	var t = prompt("Enter time (in years) for calutating Interest", "5");

	var si = p*r*t/100;

	//document.getElementById("para").innerText = "Simple Interest is " + si;

	document.write("Simple interest is " + si);

}());

