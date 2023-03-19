//add new box btn
const addNewBoxBtn = document.querySelector('.add-new-box-btn');

//a container for to-do boxes
const todoBoxes = document.querySelector('.todo__boxes');

//add new list item inside a box btn
const addListItemBtnsCollection = document.getElementsByClassName('add-list-item-btn');

// color btns collection
const colorBtns = document.querySelectorAll('.color-btn');

// active boxes list
const activeElements = document.getElementsByClassName('active');
const activeElementsArr = Array.from(activeElements);

// a collection of unactive to-do boxes
const unactiveToDoBoxes = document.getElementsByClassName('unactive');
const unactiveToDoBoxesArr = Array.from(unactiveToDoBoxes); // an array


//create new active to-do box when click on add new box btn
addNewBoxBtn.addEventListener('click', function() {
    const newBox = createNewBox();
    const addListItemBtn = createAddListItemBtn();
    const ul = createUl();
    newBox.append(addListItemBtn, ul);
    todoBoxes.append(newBox);
})

function createNewBox() {
    const newBox = document.createElement('div');
    newBox.classList.add('todo__box', 'active');
    return newBox;
}

function createAddListItemBtn() {
    const addListItemBtn = document.createElement('button');
    addListItemBtn.classList.add('plus-btn', 'add-list-item-btn');
    return addListItemBtn;
}

function createUl() {
    const ul = document.createElement('ul');
    ul.classList.add('list');
    return ul;
}


//create li when click on add list item btn

// Array.from(addListItemBtnsCollection).forEach((i) => {
//     i.addEventListener('click', createLi());
// })

// function createLi() {
//     const li = document.createElement('li');

//     const checkbox = document.createElement('input');
//     checkbox.setAttribute("type", "checkbox");

//     const label = document.createElement('label');
//     label.style.fontSize = '14px';

//     li.append(checkbox, label);
//     (document.getElementByClassName('list')).append(li);
// }


// Change the color of the active box when click on the button
colorBtns.forEach((i) => {
    i.addEventListener('click', () => {
        Array.from(activeElements).forEach((el) => {
            el.classList.remove(i.classList[1], 'active');
            el.classList.add(i.classList[1], 'unactive');
        })

    });
})


// To make the box active when click on it
unactiveToDoBoxesArr.forEach((i) => {
    i.onclick = function() {
        console.log('test');
        i.classList.add('active');
        i.classList.remove('unactive');
    }
});

