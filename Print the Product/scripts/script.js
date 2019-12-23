let list = document.querySelector(".answer nav ul");
list.textContent = " ";
let total_list = document.querySelector(".para");

let total = 0;

let products = [
                `Glass:70`,
                `Soap:80`,
                `Paste:50`,
                `Almonds: 75`,
                `Nuts:90`
               ];
for(let i=0 ; i<products.length ; i++){
    let product = products[i];
    let split_it = product.split(`:`);
    //remember split(",") will take it as string only, use split(":") for separation so we get expected name and number also check by typeof(name), typeof(number)
    let name = split_it[0];
//console.log(name);  
    let number = Number(split_it[1]);
//console.log(number);
//console.log(typeof(number));
    total+=number;
//console.log(total);
    total_items = `${name} -- ${number}`;
//console.log(total_list);

    let new_li_element = document.createElement(`li`);
    new_li_element.textContent = total_items;
    list.appendChild(new_li_element);

}
    total_list.textContent = `Total : $ ` + total.toFixed(2);
//console.log(total_list);

    list.style.backgroundColor = "yellow";
    total_list.style.backgroundColor = "cyan";