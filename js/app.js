const root = document.querySelector('[data-id=root]');

root.innerHTML=
`
<form>
<label for="sum">SUM:</label>
<input id="sum" data-id="sum" placeholder="sum"></input>
<label for="category">CTEGORY:</label>
<input id="category" data-id="category" placeholder="category"></input>
<button id="add-button" data-id="add-button">Add purchase</button>
</form>
<ul id="sum-list" data-id="sum-list">
</ul>
<div id="total" data-id="final-sum"></div>
`;
const addButton = document.querySelector('[data-id=add-button]');
const inputSum = document.querySelector('[data-id=sum]');
const inputCategory = document.querySelector('[data-id=category]');
const finalSum = document.querySelector('[data-id=final-sum]');
const sumList = document.querySelector('[data-id=sum-list]');
let amaunt = 0;
addButton.addEventListener('click',(evt)=>
{
    evt.preventDefault();    
    finalSum.textContent=`Total : ${ amaunt +=parseInt(inputSum.value)}`;   
    
    const item =document.createElement('li');
    item.textContent=`Sum:${inputSum.value} - Category:${inputCategory.value}`;
    sumList.insertBefore(item,sumList.firstElementChild);
    inputSum.value = '';     
    inputCategory.value = '';
});