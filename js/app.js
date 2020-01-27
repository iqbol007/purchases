import {Purchase} from "./lib.js"

const root = document.querySelector("[data-id=root]");

root.innerHTML = `
<form> 
   <label for="sum">SUM:</label> 
   <input id="sum" data-id="sum" placeholder="sum"></input> 
   <label for="category">CTEGORY:</label>
<select id="category" data-id="category" placeholder="category">
<option>Food</option>
<option>Travel</option>
<option>Beauty</option>
<option>Cars</option>
</select>
   <button id="add-button" data-id="add-button">Add purchase</button> 
 </form> 
 <span data-id="message" id="message">Amount entered incorrectly!</span> 
 <button data-id="no-sort">No sort</button>
 <button data-id="sort-by-price-up"> Sort expensive</button>
 <button data-id="sort-by-price-down">Sort chip</button>
 <ul id="sum-list" data-id="sum-list"></ul> 
 <div id="total" data-id="final-sum"></div> 
`;

const addButton = document.querySelector("[data-id=add-button]");
const inputSum = document.querySelector("[data-id=sum]");
const inputCategory = document.querySelector("[data-id=category]");

const finalSum = document.querySelector("[data-id=final-sum]");
const sumList = document.querySelector("[data-id=sum-list]");
const message = document.querySelector("[data-id=message]");

message.style.display = "none";
let amaunt = 0;

addButton.addEventListener("click", evt => {
  evt.preventDefault();
  const value = parseInt(inputSum.value,10);
  if (!isNaN(value)) {
    const category = inputCategory.value;
    const purchase =new Purchase(value,category);
    const item = document.createElement("li");

    message.style.display = "none";
    finalSum.textContent = `Total : ${(amaunt +=value)} `;

    item._purchase=purchase;
    item.innerHTML = `sum: ${value}  -  category: ${inputCategory.value} `;

    const delbutton = document.createElement("button");
    delbutton.id = "button-delete";
    const upButton = document.createElement("button");
    upButton.id = "button-up";
    const downButton = document.createElement("button");
    downButton.id = "button-down";
    upButton.textContent = "↑";
    downButton.textContent = "↓";
    delbutton.textContent = 'x';

    delbutton.addEventListener("click", () => {
      item.remove();
      var num = parseInt(item.innerHTML.replace(/\D+/g, ""));
      finalSum.textContent = `Total : ${(amaunt -= num)}`;
    });

    upButton.addEventListener("click", () => {    
     if (upButton.parentElement != sumList.firstElementChild) {
        
        sumList.insertBefore(
          item,
          item.previousElementSibling
        );
      } else if (item.previousElementSibling==null) {
        sumList.appendChild(item);
      }
    });

    downButton.addEventListener("click", () => {
      if (downButton.parentElement != sumList.lastElementChild) {
            sumList.insertBefore(item.nextElementSibling,item);
       } else if(item.nextElementSibling ==null) {
      sumList.insertBefore(item, sumList.firstElementChild);
       }
    });

    item.appendChild(delbutton);
    item.appendChild(upButton);
    item.appendChild(downButton);
    sumList.insertBefore(item, sumList.firstElementChild);
    inputSum.value = "";
    inputCategory.value = "";
  } else {
    message.style.display = "block";
    inputSum.value = "";
    inputCategory.value = "";
  }
});

const buttonNoSort = document.querySelector('[data-id=no-sort]');
const buttonUpPrice = document.querySelector('[data-id=sort-by-price-up]');
const buttonDownPrice = document.querySelector('[data-id=sort-by-price-down]');

buttonNoSort.onclick = ()=>
{

}

buttonUpPrice.onclick = ()=>
{
  const purchases = Array.from(sumList.children);
  purchases.sort((a,b)=>-(a._purchase.amount-b._purchase.amount))
  for (const purchase of purchases) {
    sumList.appendChild(purchase);
  }
}

buttonDownPrice.onclick = ()=>
{
  const purchases = Array.from(sumList.children);
  purchases.sort((a,b)=> a._purchase.amount-b._purchase.amount);
  for (const purchase of purchases) {
    sumList.appendChild(purchase);
  }
}