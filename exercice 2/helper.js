

let addMenu = function(){

    let ul = document.querySelector('.container ul');

    return function(menuname){
        let li = document.createElement('li');
        li.dataset.id = menuname;
        li.textContent = menuname;
        ul.appendChild(li);
    }


}();

let addSubMenu = function(menu, submenu){
    let li = document.querySelector("li[data-id="+menu+"]");
    if (li!=undefined){
        let subul;
        if (li.children.length==0){
            let i = document.createElement('i');
            i.className = "fa fa-angle-down";
            li.appendChild(i);
            subul = document.createElement('ul');
            li.appendChild(subul)
        }
        else{
            subul = li.querySelector('ul');
        }
        let subli = document.createElement('li');
        subli.textContent = submenu;
        subul.appendChild(subli);

    }
    else{
        console.error("Menu " + menu + " does not exist");
    }
}