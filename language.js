const language = {


zh:{


enter:"进入档案",

title:"视觉创作者",

subtitle:"摄影 / 影像 / 声音 / 文字",

search:"搜索档案",



photoTitle:"城市记忆",

photoText:
"城市像一本不断翻页的书。",



filmTitle:"动态影像",

filmIntro:
"关于城市、记忆以及人与空间关系的影像记录。",



soundTitle:"聆听记忆",

soundIntro1:
"声音决定影像的节奏。",

soundText:
"音乐影响我的摄影节奏，也影响我剪辑时的情绪。",



writingTitle:
"文字记忆",

writingIntro:
"影像记录看到的世界，文字保存无法被拍摄的部分。",



role:
"摄影师",


bio:
"我是一名摄影创作者。关注城市、空间以及人与环境之间短暂的关系。通过影像记录日常生活中容易被忽略的瞬间。"


},





en:{


enter:"ENTER ARCHIVE",

title:"VISUAL CREATOR",

subtitle:"PHOTO / FILM / SOUND / WRITING",

search:"SEARCH ARCHIVE",



photoTitle:"CITY MEMORY",

photoText:
"City is a book that keeps turning pages.",



filmTitle:"MOVING IMAGE",

filmIntro:
"A visual story about city, memory and human movement.",



soundTitle:"LISTENING MEMORY",

soundIntro1:
"Sound determines the rhythm of images.",


soundText:
"Music influences my photography rhythm and editing emotions.",



writingTitle:
"WRITING MEMORY",


writingIntro:
"Images record the visible world, while writing preserves what cannot be photographed.",



role:
"PHOTOGRAPHER",


bio:
"I am a visual creator focusing on cities, spaces and the subtle relationships between people and environments. Through photography, I record overlooked moments of everyday life."


}



};





function changeLanguage(lang){



document.querySelectorAll("[data-lang]")
.forEach(function(element){



let key =
element.getAttribute("data-lang");



if(language[lang][key]){


element.innerHTML =
language[lang][key];


}



});




document.querySelectorAll("[data-placeholder]")
.forEach(function(element){



let key =
element.getAttribute("data-placeholder");



if(language[lang][key]){


element.placeholder =
language[lang][key];


}



});



}