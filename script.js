function changeLanguage(lang){


const zh =
document.querySelectorAll("[data-zh]");


const en =
document.querySelectorAll("[data-en]");



if(lang==="en"){


zh.forEach(item=>{

item.style.display="none";

});


en.forEach(item=>{

item.style.display="inline";

});



}

else{


zh.forEach(item=>{

item.style.display="inline";

});


en.forEach(item=>{

item.style.display="none";

});


}



// 搜索框语言切换

const input =
document.getElementById("searchInput");


if(input){


if(lang==="en"){


input.placeholder =
input.dataset.placeholderEn;


}else{


input.placeholder =
input.dataset.placeholderZh;


}


}



}