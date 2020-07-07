// var ul = document.getElementById("items");
// var items = ul.getElementsByTagName("li");
var button = document.getElementById("button");
var search = document.getElementById("adding");
var ul = document.getElementById("items");
var items = document.getElementsByTagName("li");
var trash = document.getElementById("delete");



// function garbage () {
// 	var trashcan = ul.getElementsByTagName("li");
//     trashcan.removeChild(trashcan);
// 	// trashcan.removeChild(trashcan.childNodes[i]);
// // }

	// var ul = document.getElementById("items");
	// ul.removeChild(ul.childNodes[i]);


// function garbage () {

// 	ul.removeChild(e.target.parentElement);
	
// }

//deleting the first item on the list
function garbage () {

	
	var ul = document.getElementById("items");
	ul.removeChild(ul.lastChild);
}


trash.addEventListener("click", garbage);


	


// for( var i = 0; i < items.length; i++ ){
// 	items[i].addEventListener("click", strikethrough, false);
	
// }	






//input length
const inputlength = () => {
	return search.value.length;
}

//strikethrough 


for(var i = 0; i < items.length; i++){

		items[i].addEventListener("click", strikethrough);
	}
		
function strikethrough () {

	this.classList.toggle("strike");
}
	
//create list element & add strikethrough 
const createListElement = () => {

	var look = search.value;
	var list = document.createElement("li");
	list.appendChild(document.createTextNode(look));
	list.setAttribute("class", "item");
	ul.appendChild(list);
	search.value = "" ; 
	for(var i = 0; i < items.length; i++){

		items[i].addEventListener("click", strikethrough);
	}
}




//create an element with button
const add = () => {
	
	if(inputlength() > 0 ) {
	createListElement();

	}
	
}

//create an element with enter key
const addEnter = () => {

	if(inputlength() > 0 && event.keyCode === 13) {
	createListElement(); 

	}
	
}



//remove the element with delete






button.addEventListener("click",add);

search.addEventListener("keypress", addEnter);




