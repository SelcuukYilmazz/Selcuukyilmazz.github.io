
function mySearch(){
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("Search");
    filter = input.value.toLowerCase();
    ul = document.getElementById("city");
    li = ul.getElementsByTagName("li");

    for (i=0;i<li.length;i++){
        a= li[i].getElementsByTagName("div")[0];
        txtValue = a.id || a.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }

}
// Modeli Al
var modal = document.getElementById('id01');

// Model Dışı Bir Yere Tıklarsa Kullanıcı Kapat
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
