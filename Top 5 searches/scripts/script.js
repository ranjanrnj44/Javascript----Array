let list = document.querySelector(".answer nav ul");
list.textContent = ` `;
let input_field = document.querySelector(`input`);
let ok_button = document.querySelector(`button`);
let my_removed_history = document.querySelector(".para ul");

//initially let us keep array list as empty
let my_history = [];

ok_button.addEventListener(`click` , function(){
    let value = input_field.value;
    if(value !== ` `){
        my_history.unshift(value);
//console.log(my_history);
      list.textContent = ` `;

       for(let i=0 ; i<my_history.length ; i++){
        let history = my_history[i];
        //create new li element and add it
        let new_li_element = document.createElement(`li`);
        new_li_element.textContent = history;
        list.appendChild(new_li_element);
        new_li_element.style.backgroundColor = `green`;
        new_li_element.style.color = `white`;
        new_li_element.style.padding = `3px`;
       }

       //pop 5th element when 6th element is entered
       if(my_history.length >=5){
           var removed = my_history.pop();
       }
    
       //let input field's value kept empty and focused, so no need to point-it-out / stick with the same value
       input_field.value = ` `;
       input_field.focus();

       //removed search
       let my_para = document.createElement(`li`);
       my_para.textContent = removed;
       my_removed_history.appendChild(my_para);
       my_para.style.listStyleType = `none`;
       my_para.style.backgroundColor = `red`;
       my_para.style.color = `white`;
       my_para.style.margin = `3px`;
    }
});