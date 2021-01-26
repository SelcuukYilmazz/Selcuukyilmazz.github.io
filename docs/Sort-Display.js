
function sortTable(){
    var country,select,table, rows, switching, i, x, y, shouldSwitch;
    select = document.getElementById("formSelectSort").selectedIndex;
    country = document.getElementById("bench").getElementsByClassName("active")[0].dataset.country;
    table = document.getElementById("tableContent "+country);
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 0; i < (rows.length - 1); i++) {
          console.log("kaç")
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD");
        y = rows[i + 1].getElementsByTagName("TD");
        //check if the two rows should switch place:
        console.log(x)
        console.log(y)

        if(select == 0){    
            if (x[2].innerHTML.toLowerCase() > y[2].innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
        }
        else if(select == 1){
            if (x[2].innerHTML.toLowerCase() < y[2].innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
        }
        else if(select == 2){
            if (Number(x[1].dataset.money) > Number(y[1].dataset.money)) {
                console.log(Number(x[1].innerHTML))
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
        }
        else if(select == 3){
            if (Number(x[1].dataset.money) < Number(y[1].dataset.money)) {
                console.log("numara")
                console.log(Number(x[1].innerHTML))
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
        }
        else if(select == 4){
            if (Number(x[3].dataset.width) > Number(y[3].dataset.width)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
        }
        else if(select == 5){
            if (Number(x[3].dataset.width) < Number(y[3].dataset.width)) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
                }
        }

      }
      console.log("sıra")
      console.log(shouldSwitch)         
        if (shouldSwitch) {
            console.log("giriyor mu");
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function displayEtiquet(){
    console.log("çalıştı")
    var country,table, rows;
    let etiquet = new Array();
    for(i=0;i<document.getElementsByClassName("form-check-input").length;i++){
        if(document.getElementsByClassName("form-check-input")[i].checked){
            etiquet.push(document.getElementsByClassName("form-check-input")[i].value)
        }
    }
    
    country = document.getElementById("bench").getElementsByClassName("active")[0].dataset.country;
    table = document.getElementById("tableContent "+country);
    rows = table.rows;
    displayRows("none",rows);
    console.log(rows)
    console.log(rows[0].className)
    console.log(etiquet.join(" "))
    rows = document.getElementsByClassName(etiquet.join(" "));
    displayRows("",rows);
    console.log(etiquet.length)
    if(etiquet.length===0){
        displayRows("",table.rows)
    }

}

function displayRows(x,rows){
    var i;
    for(i=0;i<rows.length;i++){
        rows[i].style.display = x;
    }
}