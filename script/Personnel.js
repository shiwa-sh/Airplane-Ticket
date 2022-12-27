/*filterSelection("all")*/
function filterSelection(key){
    var x, i;
    x = document.getElementsByClassName("filterO");
    y = document.getElementsByClassName(key);
    /*we most show array of key*/ 
    for(i=0; i<x.length;i++){
        x[i].style.display = "none";
    }
    for(i=0; i<y.length;i++){
        y[i].style.display = "table-row";
    }    
}
function delFilters(){
    var x, i;
    x = document.getElementsByClassName("filterO");
    for(i=0; i<x.length;i++){
        x[i].style.display = "table-row";
    }
}