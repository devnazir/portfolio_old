(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[675],{108:(t,e,o)=>{"use strict";o.r(e),o.d(e,{scrolling:()=>c,clickingLinkNav:()=>i});var s=o(606);function c(){const t=document.querySelector("nav"),e=window.scrollY,o=document.querySelectorAll("section"),s=document.querySelectorAll(".border-solid");e>t.offsetHeight?t.style.cssText="position: fixed; justify-content: space-evenly; left: 0; background-color: white; animation: navFixed .5s; box-shadow: 1px 0px 5px rgba(0,0,0,.5);":t.style.cssText="position: absolute; justify-content: none;",o.forEach((t=>{if(e>t.offsetTop/1.5){const e=t.id;s.forEach((t=>{t.dataset.border==e&&(t.style.cssText="width: 200px")})),"projects"==t.id&&t.querySelectorAll(".card").forEach(((t,e)=>{setTimeout((()=>{t.style.cssText="opacity: 1; transform: translateY(0)"}),500*e)}))}}))}function i(t){const e=t.getAttribute("href"),o=document.querySelector(e);window.scrollTo({top:o.offsetTop-150,left:0,behavior:"smooth"}),s.links.forEach((t=>{t.classList.contains("active")&&t.classList.remove("active")})),t.classList.add("active")}}}]);