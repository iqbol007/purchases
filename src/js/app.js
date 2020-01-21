const root = document.querySelector('[data-id=root]');

root.innerHTML=
`
<form>
<input data-id="sum" placeholder="sum"></input>
<input data-id="category" placeholder="category"></input>
<button data-id="add-button">add</button>

<div data-id="final-sum"></div>
</form>
`;
const addButton = document.querySelector('[data-id=add-button]');
const inputSum = document.querySelector('[data-id=sum]');
const inputCategory = document.querySelector('[data-id=category]');
const finalSum = document.querySelector('[data-id=final-sum]');
let amaunt = 0;
addButton.addEventListener('click',(evt)=>
{
    evt.preventDefault();    
    finalSum.textContent=`Total : ${ amaunt +=parseInt(inputSum.value)}`;    
    inputSum.value = '';     
});