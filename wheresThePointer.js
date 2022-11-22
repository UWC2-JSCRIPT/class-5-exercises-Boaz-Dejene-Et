// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click
tags = document.getElementsByTagName('td');
for (var i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', displayCoordinates,false);
}
function displayCoordinates(e){
    e.target.innerHTML = "x: " + e.clientX + " Y: " + e.clientY
}