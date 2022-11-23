// If an li element is clicked, toggle the class "done" on the <li>
function listener() {
  let tags = document.querySelectorAll('li')
  for (var i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', done,false);
  }
  function done(e) {
    e.target.parentNode.className = "done"
  }
}
listener()
// If a delete link is clicked, delete the li element / remove from the DOM
deleteFunction()
function deleteFunction() {
  const del = document.getElementsByClassName('delete')
  for (var i = 0; i < del.length; i++) {
    del[i].addEventListener('click', deleteTask,false);
  }
  function deleteTask(e) {
    e.target.parentNode.remove()
  }
}
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  var liTag = document.createElement("li");
  var spanTag = document.createElement("span");
  var anchorTag = document.createElement("a");
  var spanText = document.createTextNode(text);
  var deleteText = document.createTextNode("Delete");
  // give class for the button
  anchorTag.className = "delete"
  // push the tags and contents
  spanTag.appendChild(spanText);
  anchorTag.appendChild(deleteText)
  liTag.appendChild(spanTag)
  liTag.appendChild(anchorTag)

  var element = document.getElementsByClassName("today-list")[0];
  element.appendChild(liTag);

  // Finish function here

  // new task inserted by the user won't have listener because
  // the listener is mentioned before the function with adds new task or to do's
  // so i made them functions and called them again 
  listener()
  deleteFunction()
};

let addButton = document.getElementsByClassName("add-item")[0]
addButton.addEventListener('click', addListItem,false);

document.getElementsByClassName("add-item")[0].addEventListener("click", addListItem)
