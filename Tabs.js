var tabLinks = document.getElementsByClassName("tablinks");
var tabContent = document.getElementsByClassName("tab-content");
var x ;

// Sayfa Açıldığında Gereksiz Boşluğu Önleyen Kod
for(x=1;x<tabContent.length;x++){
   console.log(tabContent[x])
   tabContent[x].classList.remove("active");
   tabContent[x].classList.remove("show");
   tabContent[x].style.display = "none"
};
// Sekmeye Tıkladığın İşlem Yapan Kod
for(x=0 ; x<tabLinks.length ; x++) {
   console.log("fonksiyon bu");
   tabLinks[x].addEventListener("click", openTabs);
};
// Yapılan İşlem
function openTabs(x) {
   console.log("çalışıyor");
   console.log(tabContent.length)
    var btnTarget = x.currentTarget;
    var country = btnTarget.dataset.country;
 
   for(x=0;x<tabContent.length;x++){
       console.log(tabContent[x])
       tabContent[x].classList.remove("active");
       tabContent[x].classList.remove("show");
       tabContent[x].style.display = "none"
    };
   for(x=0;x<tabLinks.length;x++) {
         console.log(tabLinks[x])
        tabLinks[x].classList.remove("active");
     };


     document.querySelector("#" + country).classList.add("active");
     document.querySelector("#" + country).classList.add("show");
     document.querySelector("#" + country).style.display = ""
     
     btnTarget.classList.add("active");
  }
  