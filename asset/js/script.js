const menuToggle=document.querySelector(".menu-toggle input"),nav=document.querySelector("navbar ul");menuToggle.addEventListener("click",function(){nav.classList.toggle("slide")});const loadContent=()=>{let e=document.querySelectorAll("section");for(let t=0;t<e.length;t++)0!==t&&(e[t].style.display="none");for(let l=1;l<e.length;l++)if(1===l){let r=document.querySelector(".elipse1"),s=document.querySelector(".narasi-home");r.offsetTop,r.offsetHeight,s.offsetTop,s.offsetHeight,e[l].style.display="block",document.querySelector(".image-home").style.height=`${document.querySelector(".elipse2").offsetHeight}px`,document.querySelector(".background-service").style.top=`-${document.querySelector("#go-serve").offsetHeight}px`}else e[l].style.display="block";let o=document.querySelector("#materi");document.querySelector(".background-materi").style.top=o.offsetTop+"px";let a=document.querySelector("div.carousel-item.card-materi.active");document.querySelector(".elipse10").style.top=a.offsetHeight-.2*a.offsetHeight+"px",document.querySelector(".background-materi").style.height=a.offsetHeight-.2*a.offsetHeight+document.querySelector(".elipse10").offsetHeight+"px";let c=document.querySelector(".card-list-tips");document.querySelector(".elipse11").style.left=.65*c.offsetWidth+"px",document.querySelector(".elipse11").style.top="-"+.65*c.offsetHeight+"px",document.querySelector(".elipse12").style.left="-"+.25*c.offsetWidth+"px",document.querySelector(".elipse12").style.top="-"+.35*c.offsetHeight+"px",document.querySelector(".elipse13").style.left=.45*c.offsetWidth+"px",document.querySelector(".elipse13").style.top="-"+.05*c.offsetHeight+"px",document.querySelector(".elipse14").style.left="-"+.1*c.offsetWidth+"px",document.querySelector(".elipse14").style.top=.25*c.offsetHeight+"px"};window.addEventListener("load",()=>{loadContent()}),window.addEventListener("resize",()=>{loadContent()});const btnMore=document.getElementsByClassName("more-vm"),card=document.getElementsByClassName("card");for(let i=0;i<btnMore.length;i++){let e=btnMore[i],t=card[i];e.addEventListener("click",function(){if("More"===e.innerText){e.innerText="Back",t.querySelector(".card-head").hidden=!0;let l=t.querySelector(".card-body");l.querySelector(".text-frag").hidden=!0,l.querySelector(".text-full").hidden=!1}else{e.innerText="More",t.querySelector(".card-head").hidden=!1;let r=t.querySelector(".card-body");r.querySelector(".text-frag").hidden=!1,r.querySelector(".text-full").hidden=!0}})}const buttonMateri=document.getElementsByClassName("button-materi");for(let i=0;i<buttonMateri.length;i++)buttonMateri[i].addEventListener("click",function(){let e=document.getElementsByClassName("card-materi");for(let t=0;t<e.length;t++)t===i?(e[t].hidden=!1,e[t].className+=" active"):(e[t].hidden=!0,e[t].classList.remove("active"))});document.querySelector(".button-next-materi").addEventListener("click",function(){let e=0,t=document.getElementsByClassName("card-materi");for(let l=0;l<t.length;l++)if(t[l].className.includes("active")){e=l;break}e+1>=t.length?(t[e].hidden=!0,t[0].hidden=!1,t[e].classList.remove("active"),t[0].className+=" active"):(t[e].hidden=!0,t[e+1].hidden=!1,t[e].classList.remove("active"),t[e+1].className+=" active")}),document.querySelector(".button-prev-materi").addEventListener("click",function(){let e=0,t=document.getElementsByClassName("card-materi");for(let l=0;l<t.length;l++)if(t[l].className.includes("active")){e=l;break}e-1<0?(t[e].hidden=!0,t[t.length-1].hidden=!1,t[e].classList.remove("active"),t[t.length-1].className+=" active"):(t[e].hidden=!0,t[e-1].hidden=!1,t[e].classList.remove("active"),t[e-1].className+=" active")});


document.querySelector('.button-next-profil').addEventListener('click', function(){
    let index = 0;
    const slideProfil = document.getElementsByClassName('profile-list');
    for(let j = 0; j<slideProfil.length; j++){
        if (slideProfil[j].className.includes("active")){
            index = j;
            break;
        }
    }
    if (index + 1 >= slideProfil.length){
        slideProfil[index].hidden = true;
        slideProfil[0].hidden = false;
        slideProfil[index].classList.remove('active');
        slideProfil[0].className += " active";
    }else{
        slideProfil[index].hidden = true;
        slideProfil[index+1].hidden = false;
        slideProfil[index].classList.remove('active');
        slideProfil[index+1].className += " active";
    }
});

document.querySelector('.button-prev-profil').addEventListener('click', function(){
    let index = 0;
    const slideProfil = document.getElementsByClassName('profile-list');
    for(let j = 0; j<slideProfil.length; j++){
        if (slideProfil[j].className.includes("active")){
            index = j;
            break;
        }
    }
    if (index - 1 < 0){
        slideProfil[index].hidden = true;
        slideProfil[slideProfil.length-1].hidden = false;
        slideProfil[index].classList.remove('active');
        slideProfil[slideProfil.length-1].className += " active";
    }else{
        slideProfil[index].hidden = true;
        slideProfil[index-1].hidden = false;
        slideProfil[index].classList.remove('active');
        slideProfil[index-1].className += " active";
    }
});


const profileLink = document.getElementsByClassName('profile-team');

for (let i = 0; i<profileLink.length; i++){
    profileLink[i].addEventListener('click', function(){
        const profilList = document.getElementsByClassName('profile-list');
        for(let profil of profilList){
            profil.hidden = true;
            profil.classList.remove('active');
        }

        profilList[i].hidden = false;
        profilList[i].className += " active";
    });
}