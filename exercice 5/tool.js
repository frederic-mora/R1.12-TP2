
  window.addEventListener('load', function(){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'script.js');
    let handler_load = function(){
        let studentCode = new Function(xhr.responseText);
        document.querySelector('section').addEventListener('click', function(ev){
            if (ev.target.tagName=='BUTTON'){
              V.next = ev.target.dataset.id;
              studentCode();
            }
        });
    }
    xhr.addEventListener('load', handler_load);
    xhr.send();
  })
