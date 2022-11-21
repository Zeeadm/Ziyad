let todo = document.querySelector('ul');
let inputData = document.querySelector('.inp');
let cont = document.querySelector('.vivod');
let submit = document.querySelector('.add');
let sorting = document.querySelector('.sort');
let sortsrc = document.querySelector('.method1').getAttribute('src');
let elems = [];
let elemnums = [];
let elemstrings = [];
function addElement() {
    if (/^[0-9]+$/.test(inputData.value) == true) {
        elemnums.push(+inputData.value);
    }
    else {
        elemstrings.push(inputData.value);
    }
    cont.style.display = 'block';
    console.log(elemnums);
    console.log(elemstrings);
    todo.innerHTML += `<li><div class="elem">${inputData.value}<button class="del" style="border: none;background-color: white;margin-right: 10px;"><img class="remove" src="files/remove.svg"></button></div></li>`;
    let removes = document.querySelectorAll('.del');
    removes.forEach(removeElement);
    inputData.value = "";
    cont.style.border = '1px solid #C4C4C4';
}
function addElementWithEnter(event) {
    if (event.key=="Enter") {
        if (/^[0-9]+$/.test(inputData.value) == true) {
            elemnums.push(+inputData.value);
        }
        else {
            elemstrings.push(inputData.value);
        }
        console.log(elemnums);
        console.log(elemstrings);
        todo.innerHTML += `<li><div class="elem">${inputData.value}<button class="del" style="border: none;background-color: white;margin-right: 10px;"><img class="remove" src="files/remove.svg"></button></div></li>`;
        let removes = document.querySelectorAll('.del');
        removes.forEach(removeElement);
        inputData.value = "";
        cont.style.border = '1px solid #C4C4C4';
    }
}
function removeElement(el) {
    el.addEventListener('click', (event) => {
        let itemtoDelete = event.target.closest('li').innerText;
        event.target.closest('li').remove();
        if (/^[0-9]+$/.test(itemtoDelete) == true) {
            elemnums.splice(elemnums.indexOf(+itemtoDelete), 1);
        }
        else {
            elemstrings.splice(elemstrings.indexOf(itemtoDelete), 1);
        }
        console.log(elemnums);
        console.log(elemstrings);
        
    });
}
function sortElements() {
    if (sortsrc == "files/asc.svg") {
        sorting.innerHTML = `<img class="method2" src="files/desc.svg">`;
        sortsrc = "files/desc.svg";
        elemnums.sort((a,b) => {
            return a-b;
        });
        elemstrings.sort();
        elems = elemnums.concat(elemstrings);
        console.log(elems);
        console.log(elemnums);
        console.log(elemstrings);
        todo.innerHTML = '';
        elems.forEach((item) => {
            todo.innerHTML += `<li><div class="elem">${item}<button class="del" style="border: none;background-color: white;margin-right: 10px;"><img class="remove" src="files/remove.svg"></button></div></li>`;
        });
        let removes = document.querySelectorAll('.del');
        removes.forEach(removeElement);
    }
    else if (sortsrc == "files/desc.svg") {
        sorting.innerHTML = `<img class="method1" src="files/asc.svg">`;
        sortsrc = "files/asc.svg";
        elemnums.sort((a,b) => {
            return b-a;
        });
        elemstrings.sort().reverse();
        elems = elemnums.concat(elemstrings);
        console.log(elems);
        console.log(elemnums);
        console.log(elemstrings);
        todo.innerHTML = '';
        elems.forEach((item) => {
            todo.innerHTML += `<li><div class="elem">${item}<button class="del" style="border: none;background-color: white;margin-right: 10px;"><img class="remove" src="files/remove.svg"></button></div></li>`;
        });
        let removes = document.querySelectorAll('.del');
        removes.forEach(removeElement);

    }
}
submit.addEventListener('click', addElement);
document.addEventListener('keypress', addElementWithEnter);
sorting.addEventListener('click', sortElements);