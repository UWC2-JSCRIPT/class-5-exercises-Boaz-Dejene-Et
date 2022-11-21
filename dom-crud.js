// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
var a = document.createElement('a');
var linkText = document.createTextNode("Buy Now!");
a.appendChild(linkText);
a.title = "Buy Now!";
a.href = "http://example.com";
a.id = "cta";
document.body.appendChild(a);


// Access (read) the data-color attribute of the <img>,
// log to the console

console.log(document.getElementsByTagName("img")[0].dataset.color)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"

document.getElementsByTagName("li")[2].className = "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
