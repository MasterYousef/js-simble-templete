//cheack if there is local storge option for color
let colorLocal = localStorage.getItem("colot_option");
if(colorLocal !== null){
    document.documentElement.style.setProperty('--main--color',colorLocal);
    document.querySelectorAll(".colors li").forEach(element => {
        element.classList.remove("active");
        if(element.dataset.color === colorLocal){
            element.classList.add('active')
        }
    }) 


}
// toogle setting
document.querySelector(".toogle-setting i").onclick = function (){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting").classList.toggle("open")
};
//select color
const colorLi = document.querySelectorAll(".colors li");
colorLi.forEach(li => {
    li.addEventListener("click",(e) => {
        document.documentElement.style.setProperty('--main--color',e.target.dataset.color);
        localStorage.setItem("colot_option",e.target.dataset.color);
        activeClass(e);
    })
})
//switch random background option
const backgroundRandom = document.querySelectorAll(".random-background span");
backgroundRandom.forEach(span => {
    span.addEventListener("click",(e) => {
        activeClass(e);
        if(e.target.dataset.background === "yes"){
            backgroundop = true;
            backgroundOption()
            localStorage.setItem("background_op",true);
        }else{
            backgroundop = false;
            clearInterval(backgroundtimer);
            localStorage.setItem("background_op",false);
        }
    })
})
// select landing page element 
let page = document.querySelector('.landing');
// create array of imgs 
let imgArray = ["01.jpg","02.jpg","03.jpg","04.jpg","05.png","06.jpg"];
//timer option
let backgroundop = true;
let backgroundtimer;
function backgroundOption(){
 if(backgroundop === true){
    backgroundtimer = setInterval(() => {
        let random = Math.floor(Math.random() * imgArray.length);
        page.style.backgroundImage = `url("../img/${imgArray[random]}")`
    },10000);
 }
}
// local storge of random background
let localbackground = localStorage.getItem("background_op");
if( localbackground !== null){
    if(localbackground === 'true'){
        backgroundop = true ;
    }else{
        backgroundop = false ;
    }
    document.querySelectorAll(".random-background span").forEach(e => {
        e.classList.remove('active');
        if(localbackground === 'true'){
            document.querySelector('.yes').classList.add('active')
        }else{
            document.querySelector('.no').classList.add('active');
        }
    })
}
backgroundOption();
// skills anime 
let skillsAnime = document.querySelector('.skills');

window.onscroll = function(){
    let skillsOffset = skillsAnime.offsetTop;
    let skillsOffsetHeight = skillsAnime.offsetHeight;
    let windowHeight = this.innerHeight;
    let windowScrrolTop = this.pageYOffset;
    if (windowScrrolTop > (skillsOffset + skillsOffsetHeight - windowHeight )) {
        let allSkills = document.querySelectorAll('.skill-box .progress span');
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.pro
        })
    }

}
//img pop
let ourGallry = document.querySelectorAll(".gallry img");
ourGallry.forEach(img => {
    img.addEventListener('click',(e) =>{
        let overlay = document.createElement('div');
        overlay.className = 'img-overlay';
        document.body.appendChild(overlay);
        let popBox = document.createElement("div");
        popBox.className = "pop-box";
        if(img.alt !== null){
            let popHeader = document.createElement("h3");
            let HeaderText = document.createTextNode(img.alt);
            popHeader.appendChild(HeaderText);
            popBox.appendChild(popHeader)
        } 
        let popImg = document.createElement("img");
        popImg.src = img.src ;
        popBox.appendChild(popImg);
        let closepop = document.createElement('span');
        closepop.className = "close-pop";
        let closeNode = document.createTextNode('X');
        closepop.appendChild(closeNode);
        popBox.appendChild(closepop)
        document.body.appendChild(popBox);

    })
})
document.addEventListener('click',e => {
    if(e.target.className === "close-pop"){
        e.target.parentNode.remove();
    document.querySelector(".img-overlay").remove()
    }
})
// nav link 
const navlinks = document.querySelectorAll('.navlink .navl');
navlinks.forEach(bullet => {
    bullet.addEventListener("click",(e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior : 'smooth'
        })
    })
})
// active funcetion
function activeClass(ev){
    ev.target.parentElement.querySelectorAll(".active").forEach(elemnt => {
        elemnt.classList.remove("active")
    }) 
    ev.target.classList.add("active");
}
// show bullets option 
let bulletsSpan = document.querySelectorAll('.bullets-option span');
let navBullets = document.querySelector('.navlink');
bulletsSpan.forEach(elemnt => {
    elemnt.addEventListener('click',(e) => {
        activeClass(e);
        if(elemnt.dataset.display === 'show'){
            navBullets.style.display = 'block'
            localStorage.setItem("bul-op","block");

        }else{
            navBullets.style.display = 'none'
            localStorage.setItem("bul-op","none");
        }
    })
})
let localBullets = localStorage.getItem("bul-op");
if(localBullets !== null){
    bulletsSpan.forEach(e => {
        e.classList.remove('active')
    })
    if(localBullets === 'block'){
        document.querySelector('.bullets-option .yes').classList.add("active");
        navBullets.style.display = localBullets ;
    }else if(localBullets === 'none'){
        document.querySelector('.bullets-option .no').classList.add("active");
        navBullets.style.display = localBullets ;
    }
}
//reset option
let resetOption = document.querySelector(".reset");
resetOption.onclick = function () {
    localStorage.clear();
    window.location.reload()

}
// mediea menue 
let arrow = document.querySelector(".links-con .arr");
let linkCon = document.querySelector('.links-con .link');
let responseveMenue = document.querySelector('.men')
responseveMenue.onclick = function () {
    linkCon.classList.toggle("open");
    arrow.classList.toggle("open");
}
// scrool op 
let linkP = document.querySelectorAll(".link li p")
linkP.forEach((e)=>{
    e.onclick =()=>{
        const section = document.getElementById(e.getAttribute("to"))
        section.scrollIntoView()
    }
})