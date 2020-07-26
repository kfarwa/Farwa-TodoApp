var list= document.getElementById("list");


function addTodo(){

 var todo_item = document.getElementById("todo-item");
        if (todo_item.value == ""){
            alert ("Please Enter Todo")
        }
        else{
 //// create Li with text node.
var li = document.createElement ('li')
li.setAttribute("class" ,"mainli")
var liText = document.createTextNode(todo_item.value)

    li.appendChild(liText)
  document.getElementById("todo-item").value = "";

}

//// create delete button.

var delBtn= document.createElement ("button")
var delText = document.createTextNode("Delete")


delBtn.setAttribute("class" , "btn1")
delBtn.setAttribute("onclick" , "deleteItem(this)")


delBtn.appendChild(delText)
li.appendChild(delBtn)
list.appendChild(li)


///////Create Edit Button.
var editBtn= document.createElement ("button")
var editText = document.createTextNode("Edit")


   editBtn.setAttribute("class" , "btn1")
editBtn.setAttribute("onclick" , "editItem(this)")

editBtn.appendChild(editText)


li.appendChild(editBtn)
list.appendChild(li)


todo_item.value = ""
}

function deleteItem(e){

    e.parentNode.remove()



}
function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
var editValue = prompt("Enter Edit Value" , val);
e.parentNode.firstChild.nodeValue=editValue;
}

function deleteAll(){
    list.innerHTML=""
}

