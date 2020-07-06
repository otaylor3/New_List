// var ul = document.getElementById("items");
// var items = ul.getElementsByTagName("li");
var button = document.getElementById("button");
var search = document.getElementById("adding");
var ul = document.getElementById("items");
var li = document.getElementsByTagName("li");


//strikethrough 

	
	// var li = document.getElementsByTagName("li")[i].addEventListener("click",const striker = () => {
	// 	var = i ; 
	// for(var i = 0; i < li.length; i++  ) {
	// 	var trash = document.getelementsByClassName("delete")[i]
	// 	.classList.toggle("strike");
	// }

	// )
	





//create an element with button
const add = () => {
	
	// var li = document.getElementsByTagName("li");
	var look = search.value;
	var found = look.length;


	if(found>0) {
	var list = document.createElement("li");
	list.appendChild(document.createTextNode(look));
	list.setAttribute("class", "item");
	ul.appendChild(list)

	


	search.value = "" ; 
	}
	
}

//create an element with enter key
const addEnter = () => {
	
	// var li = document.getElementsByTagName("li");
	var look = search.value;
	var found = look.length;

	if(found>0 && event.keyCode === 13) {
	var list = document.createElement("li");
	list.appendChild(document.createTextNode(look));
	list.setAttribute("class", "item");
	ul.appendChild(list)



	search.value = "" ; 
	}
	
}



//remove the element with delete







button.addEventListener("click",add);

search.addEventListener("keypress", addEnter);




