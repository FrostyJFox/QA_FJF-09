const e=document.querySelector("[data-create]"),t=document.querySelector("[data-destroy]");e.addEventListener("click",(()=>{!function(e){const t=document.getElementById("boxes");let n="";for(let t=0;t<e;t++){const e=document.createElement("div");e.style.width=e.style.height=30+10*t+"px",e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`,n+=e.outerHTML}t.innerHTML=n}(document.querySelector('input[type="number"]').value)})),t.addEventListener("click",(function(){document.getElementById("boxes").innerHTML=""}));
//# sourceMappingURL=task-04.83ef531b.js.map
