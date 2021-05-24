const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

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
    console.log(item);
}

function populateItems(items=[], itemList){
    itemList.innerHTML = items.map((item,index) => {
        return `
        <li>
            <label for=">${item.text}</label>
        </li>`
    }).join('');
}

addItems.addEventListener('submit',addItem);