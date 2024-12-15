
let ulElement=document.querySelector("ul");

function addStudent(name){
    let liElement=document.createElement("li");
    liElement.innerText=name;
    ulElement.append(liElement);
}

addStudent("Aygun Memmedzade");
addStudent("Jessica William");
addStudent("Jhon Wick");
