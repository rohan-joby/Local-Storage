const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
    e.preventDefault();
    const text= (this.querySelector("[name=item")).value;
    //console.log(text);
    const item={
        text:text,
        done:false
    }
    items.push(item);
    populateItems(items,itemsList);
    localStorage.setItem('items',JSON.stringify(items));
    this.reset();
}

function populateItems(items=[], itemList){
    itemList.innerHTML = items.map((item,index) => {
        return `
        <li>
        <input type="checkbox" data-index=${index} id="item${index}" ${item.done ? "checked":"" }/>
        <label for="item${index}">${item.text}</label>
        </li>`
    }).join('');
}

function eventToggle(e){
    if(!e.target.matches('input')) return;
    const element = e.target;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items',JSON.stringify(items));
    populateItems(items,itemsList);
}

addItems.addEventListener('submit',addItem);
itemsList.addEventListener('click',eventToggle);

populateItems(items,itemsList);