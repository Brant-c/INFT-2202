// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var list = document.querySelector('ul');

// ADD NEW ITEM TO END OF LIST
// Create element
var newListItemEnd = document.createElement('li');
// Create text 
var newListItemEndText = document.createTextNode('new item at end');
// Add text node to element
newListItemEnd.appendChild(newListItemEndText);
// Add element end of list
list.appendChild(newListItemEnd);

// ADD NEW ITEM START OF LIST
// Create element
var newListItemStart = document.createElement('li');
// Create text node
var newListItemStartText = document.createTextNode('new item at start');
// Add text node to element
newListItemStart.appendChild(newListItemStartText);
// Add element to start of list
list.insertBefore(newListItemStart, list.firstChild);



// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Get all <li> elements
var items = document.querySelectorAll('li');
// Loop through elements
for (var i = 0; i < items.length; i++) {
    // Change class to cool
    items[i].className = 'cool';
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// Get the h2 element
var header = document.querySelector('h2');
// Count the number of <li> elements
var itemCount = items.length;
// Content
var newHeaderContent = 'Buy groceries (' + itemCount + ' items)';
// Update h2 using innerHTML
header.innerHTML = newHeaderContent;