const toogleBtn = document.querySelector(".toogle-btn");
const toogleBtnIcon = document.querySelector(".toogle-btn i");
const dropdownMenu = document.querySelector(".dropdown-menu");

toogleBtn.onclick = function(){
    dropdownMenu.classList.toggle("open")
    const isOpen = dropdownMenu.classList.contains('open');

    toogleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        :'fa-solid fa-bars'
}


// Test 
Question 1: Clean the room function: given an input of[1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
make a function that organizes these into individual array that is ordered. 
For example: answer(ArrayFromAbove)should return:[[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. i.e.[1, "2", "3", 2]should return[[1,2], ["2", "3"]]


const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const orderArray = array.sort(function(a,b){return(a-b)})

orderArray.reduce((previous, current) => {
    return{...previous,[current]:[]};
    },{});


answer(ArrayFromAbove){

}