Answer-1
getElementById Returns an element with the fixed id.
getElementsByClassName Returns all elements with the specified class name.
querySelector Returns only the first element that matches the CSS selector,
querySelectorAll Returns all elements that match a fixed CSS selector.

Answer-2
document.createElement("tagName")
element.innerText = "Text"
<parent>
prepend()

Answer-3
Event Bubbling is a process where an event (as a click on a button) first occurs in a child element, then it moves up and down from parent > grandparent > document.

Answer-4
Event Delegation means placing an event listener once on the parent element, then using event bubbling to handle the event of the child element.
This does not require a separate event listener for the button

Answer-5
preventDefault() Disables the default behavior of any element.
stopPropagation() This cuts off the upper part (bubble path) of the event.


