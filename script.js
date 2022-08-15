var listUl = document.getElementById("list-ul");
console.log(listUl);
console.log(listUl.id);
listUl.style.color = "yellow";

console.log(listUl.children);

// var listUlChildren = listUl.children;
// listUlChildren = Array.from(listUlChildren);

var listUlChildren = Array.from(listUl.children);
console.log(listUlChildren);


listUlChildren.forEach(function (item) {
    console.log(item.innerText);
})