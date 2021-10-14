let myLibrary = [];

buttonAdd=document.getElementById("Add")
buttonSave=document.getElementById("Save")

function Book(title,author,legnth,read) {
  this.title=title;
  this.author=author;
  this.legnth=legnth;
  this.read=read;
  addBookToLibrary(this.title,this.author,this.legnth,this.read)
  myLibrary.push(title)
}

function addBookToLibrary(title,author,legnth,read) {
  //Call cards div
  CARD=document.getElementById("cards")
  //Create card div
  CARDS=document.createElement("div");
  
  CARDS.setAttribute('id',"card")
  //Create h1
  TITLE=document.createElement("h1")
  TITLE.textContent="Title: "+title
  TITLE.setAttribute('id','title')
  //create h2
  AUTHOR=document.createElement("h2")
  AUTHOR.textContent="Author: "+author
  AUTHOR.setAttribute('id',"author")
  //create p
  LEGNTH=document.createElement("p")
  LEGNTH.textContent="Pages: "+legnth
  LEGNTH.setAttribute("id","legnth")
//Create label
  READ=document.createElement("label")
  READ.textContent="Have read: "
  READ.setAttribute("for","haveread")
  //Create input
  INPUT=document.createElement("input")
  INPUT.setAttribute("id","haveread")
  INPUT.setAttribute("type","checkBox")
    


  CARD.appendChild(CARDS)
  CARDS.appendChild(TITLE)
  CARDS.appendChild(AUTHOR)
  CARDS.appendChild(LEGNTH)
  CARDS.appendChild(READ)
  
  CARDS.appendChild(INPUT)
  if (read=="true"|read=="t"|read=="True"){
    INPUT.checked=true
}
else{
    INPUT.checked=false
}

}

buttonAdd.addEventListener("click", function () {
  bookTitle=prompt("What is the book title?")
  bookAuthor=prompt("Who wrote the book?")
  bookLegnth=prompt("How long is the book?")
  bookRead=prompt("Have you read this book (True or False)")
  Book(bookTitle,bookAuthor,bookLegnth,bookRead)
});