menu_list_array = ["Veggie Lovers Pizza",
"Ultimate Meat Pizza",
"Chicken Tandoori Pizza",
"Paneer Tikka Pizza",
"Olive and Onion Pizza",
"Mozeralla Cheese Pizza",
"6 Cheese Pizza",
"All Toping Extravanganza Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++)htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>'
}
htmldata+htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata='section class="card">'
+'<img src="https://mahatmarice.com/wp-content/uploads/2020/04/Rice-Pizza-Crust.jpg/>'
+menu_list_array[i]+'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("displa_addmenu").innerHTML=htmldata;

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}