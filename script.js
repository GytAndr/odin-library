document.getElementById("submit").addEventListener("click", addBookToLibrary);
document.getElementById("unhide").addEventListener("click", unhideForm);
//library array that will be looped and displayed on screen.
let myLibrary = [];

//Book constructor
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}
// function to reset input fields
function resetInput() {
	title.value = "";
	author.value = "";
	pages.value = "";
	read.value = "";
}
//displays library contents
function printArray() {
	let list = document.getElementById("list");
	let p = document.createElement("p");
	for (let index = 0; index < myLibrary.length; index++) {
		p.innerText = `${myLibrary[index].title} by ${myLibrary[index].author}, ${myLibrary[index].pages} pages, ${myLibrary[index].read}`;
		list.appendChild(p);
	}
}
//hide form
function hideForm() {
	document.getElementById("form").style.display = "none"; //this hides
}
//unhide form
function unhideForm() {
	document.getElementById("form").style.display = ""; //this unhides
}

//function pushes newly created Book obj into array.
function addBookToLibrary() {
	//get input values
	let title = document.getElementById("title").value;
	let author = document.getElementById("author").value;
	let pages = document.getElementById("pages").value;
	let read = document.getElementById("read").value;
	//put into new object using construnctor
	let thing = new Book(title, author, pages, read);
	//put into array
	myLibrary.push(thing);
	//reset input fields
	resetInput();
	hideForm();
	printArray();
}
