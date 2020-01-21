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
    item.innerHTML = `Sum:${inputSum.value} - Category:${inputCategory.value}`;
    const delb = document.createElement('button');
    delb.textContent=`x`;
    delb.addEventListener('click',()=>
    {
        item.remove();
        var num = parseInt(item.innerHTML.replace(/\D+/g,""));       
        
         finalSum.textContent =`Total : ${amaunt-= num}`;
        
    });
    item.appendChild(delb);
    
    delb.click=()=>
    {
console.log('click');

    };
   
    sumList.insertBefore(item,sumList.firstElementChild);
    
    inputSum.value = '';     
    inputCategory.value = '';
});

 
