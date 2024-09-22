//Задачи:
//1. Поиск элементов и изменение содержимого:

let header = document.querySelector("h1");
header.innerText = "Переименованный заголовок";

let numUl = document.querySelectorAll("ul li");
let sas = 0
for(let i =0; i< numUl.length ;i++){
    sas++
    numUl[i].innerText =  sas + " " + numUl[i].innerText;
}

//2. Редактирование атрибутов:

let image1 = document.querySelector("img");
image1.setAttribute("src","https://i.pinimg.com/originals/65/29/b3/6529b3c5ae053993399de76177e6face.png");
let hreffA = document.querySelector("a")
hreffA.innerHTML = "С какой мыслью я делал эти задания...";
hreffA.setAttribute("href","https://a.d-cd.net/TvSe1WkhfKXAgcZclxinPhPlZms-960.jpg") ;

//3. Манипуляции с элементами:

let ullist = document.getElementById("mainDiv__ul")
let botm = document.getElementById("bob").addEventListener("click",()=>{
    let sese = document.createElement("li");
    sese.textContent = "new--rudiment";
     ullist.appendChild(sese);
    });

let delBotm = document.getElementById("-bob").addEventListener("click",()=>{
    let liList = document.querySelectorAll("li");
    let asda = liList[liList.length - 1];
    ullist.removeChild(asda);
});

//4. Манипуляции со стилями CSS:

let p = document.querySelector("p");
p.style.color = "green";
let nan= "red"
let pStyle = document.getElementById("pRedact");
pStyle.onclick= ()=>{
      if(p.style.color != nan){
        p.style.color = nan}
      else p.style.color = "green";
}
let stelsBtn= document.getElementById("stels").addEventListener("click",()=>{
    if(p.style.display != "none"){
        p.style.display = "none"}
    else p.style.display = "block";
});
//5. Работа с геометрией элементов:
//Используя метод getBoundingClientRect() , определите координаты и размеры
//любого элемента на странице.
let pInBorder = document.getElementById("mainDiv__new")


let pInBorder1 =pInBorder.getBoundingClientRect();
let pInBorder2 =pInBorder1.height;
let pInBorder3 = pInBorder1.width.toFixed(0);
console.log(pInBorder1);
let span = document.getElementById("idSpan");
function updateValuE(){
    span.textContent = ` высота: ${pInBorder2} ширина: ${pInBorder3}`
};

let btnRect = document.getElementById("alert!").addEventListener("click",()=>{
    updateValuE();

 })
 //Добавьте кнопку, которая будет выводить на экран ширину и высоту
//выбранного элемента, обновляя их при каждом нажатии.

let bewDiw= document.querySelector(".FlexDiv")
 let spamishe= document.querySelector(".spamishe")
 let newBtn = document.getElementById("ale").addEventListener("click",()=>{
    //если ктото читает код уберите цикл отсюда иначе смерт:)
    let i =0;
    while(i<1){console.log(z)}
    z+=10;
    x+=10;
    let r = x + "px";
    let s= z + "px";
    bewDiw.style.height= r;
    bewDiw.style.width= s;
    spamishe.textContent = `${r}; ${s}`
    console.log(r,s)
 })
 let x = bewDiw.offsetHeight;
 let z = bewDiw.offsetWidth;
 let a = null

