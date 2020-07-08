
var button = document.getElementById("button");
var search = document.getElementById("adding");
var ul = document.getElementById("items");
var items = document.getElementsByTagName("li");
var trash = document.getElementsByClassName("delete");




//deleting the first item on the list
Array.prototype.slice.call(trash).forEach(function(item){
	item.addEventListener("click", function (e) {
		e.target.parentNode.remove()
	});
})



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
	var btn = document.createElement("button");
	btn.className = "delete";
	btn.innerHTML = "delete";
	btn.addEventListener("click", function(e){
		e.target.parentNode.remove();
	});
	list.appendChild(document.createTextNode(look));
	list.addEventListener("click", strikethrough);
	list.innerHTML = look + " " ;
	list.appendChild(btn);
	list.setAttribute("class", "item");
	ul.appendChild(list);
	search.value = "" ; 
	
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




