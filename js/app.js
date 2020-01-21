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
<span data-id="message" id="message">Amount entered incorrectly!</span>
<ul id="sum-list" data-id="sum-list">
</ul>
<div id="total" data-id="final-sum"></div>
`;
const addButton = document.querySelector('[data-id=add-button]');
const inputSum = document.querySelector('[data-id=sum]');
const inputCategory = document.querySelector('[data-id=category]');
const finalSum = document.querySelector('[data-id=final-sum]');
const sumList = document.querySelector('[data-id=sum-list]');
const message = document.querySelector('[data-id=message]');
message.style.display='none';
let amaunt = 0;
addButton.addEventListener('click',(evt)=>
{
    evt.preventDefault();    
     if (!isNaN(parseInt(inputSum.value))) {
        message.style.display='none';
        finalSum.textContent=`Total : ${ amaunt +=parseInt(inputSum.value)} `;   
        const item =document.createElement('li');
        item.innerHTML = `sum: ${inputSum.value}  -  category: ${inputCategory.value} `;
        const delbutton = document.createElement('button');
        delbutton.id='button-delete';
        const upButton = document.createElement('button');
        upButton.id='button-up';
        const downButton = document.createElement('button');
        downButton.id='button-down';
        upButton.textContent='↑';
        downButton.textContent='↓';
        delbutton.textContent=`x`;
        delbutton.addEventListener('click',()=>
        {
            item.remove();
            var num = parseInt(item.innerHTML.replace(/\D+/g,""));      
             finalSum.textContent =`Total : ${amaunt-= num}`;
            
        });
        upButton.addEventListener('click',()=>{
            let indexer=0;
           for (let i = 0; i < sumList.childNodes.length; i++) {
                 if (sumList.childNodes[i]===item) {              
                        indexer=i;                                           
                }
           }
           if (upButton.parentElement!=sumList.firstElementChild) {
           sumList.insertBefore(item,sumList.childNodes[indexer].previousElementSibling );           
                }
            }       
        );
        downButton.addEventListener('click',()=>
        {
            let indexer=0;
            for (let i = 0; i < sumList.childNodes.length; i++) {
                  if (sumList.childNodes[i]===item) {              
                         indexer=i;                                           
                 }
            }
               if (downButton.parentElement!=sumList.lastElementChild) {
                sumList.insertBefore(item,sumList.childNodes[indexer+1].nextElementSibling );               
               }            
        });
        item.appendChild(delbutton);
        item.appendChild(upButton);
        item.appendChild(downButton);
        sumList.insertBefore(item,sumList.firstElementChild);
        inputSum.value = '';     
        inputCategory.value = '';
         
     }else
     {
        message.style.display = 'block';
        inputSum.value = '';     
        inputCategory.value = '';
     }
     
   
});

 
