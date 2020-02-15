// adding item to the list
const input = document.querySelector(".input-item")
const button = document.querySelector(".input-btn");
const list = document.querySelector(".list");
// const el = document.getElementsByTagName('li');
const close = document.querySelector("#close");
const listNode = document.getElementById('list_node');
const list_item = document.querySelector('#item');

var List = function(id, item){
    this.id = id;
    this.item = item;
    // this.array = []
    
}
var ID;
var listArray = [];
var IdArray = [];
List.prototype.getItem = function(){
    
    if (input.value == ''){
        alert('Please input an item in the list')
    } else {
        text = input.value;
        listArray.push(text);
        console.log(listArray.length);
        
        // if (listArray.length > 0){
        //     ID = listArray.indexOf(text) + 1;
        //     console.log(ID)
        // } else {
        //     ID = 0;
        // }
    }
}
// var getInput = {
//     "id" : ID,
//     "text": input.value
// }



var newItem = new List();
var addItem = () => {
    newItem.getItem();
    // var entry = document.getElementsByTagName('li');
    // for (var i = 0; i < entry.length;  i++ ){
    //     entry[i].setAttribute('id', 'item' + entry.length);
    //     console.log(entry[i]);
    //     }
    // console.log(entry.length);
} 
  
    
var deleteItem = (id) => {
    if (listArray.length > 0){
        IdArray = listArray.map(function(el) {
            return listArray.indexOf(el);
            })
        } else {
            return -1;
        };
    idIndex = IdArray.indexOf(id)
    
    if (id !== -1){
        listArray.splice(idIndex, 1);
        console.log(listArray);
    }
}

var cntrlDeleteItem = function(event){
    var item = document.getElementById('close').parentElement;
    // var itemCount = item.childElementCount;
    console.log(item.innerText);
    var itemId = item.id;
    spiltId = itemId.split("-");
    var entry = document.getElementsByTagName('li');
    // var entryItem = entry.childNodes[0];
    var newArray = [];
    for (var i = 0; i < entry.length;  i++ ){
        entry[i].setAttribute('id', 'item' + '-' + i);
        newArray.push(entry[i].innerText)
    }; 
    console.log(newArray);
    // var newArray = Array.from(entry);
    // console.log(newArray);
    var newID = newArray.indexOf(item.innerText);
    console.log(newID);
    
    // console.log(newItem.array);
    
    deleteItem(newID);
    // if (item == newArray[newID]){
    var el = document.querySelector(`#item-${newID}`);
    el.parentElement.removeChild(el);
    console.log(el);
        // var el = document.getElementById('close').parentElement;
    
}
          
   
var renderUIList = () => {
    if (input.value !== '') {
        const markup = `<li><i class="fas fa-check"></i>${input.value}<i id="close" class="fa fa-close"></i></li>`
        list.insertAdjacentHTML('beforeend', markup);
        input.value = "" ;
    }
} 
var listControl = () => {
    addItem();
    renderUIList();
}

button.addEventListener("click", listControl);
list.addEventListener("click", cntrlDeleteItem);

const myfunction = (event) => {
    var el = event.target.parentNode.id;
    console.log(el);
}

// list.addEventListener("click", myfunction);

