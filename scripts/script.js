function resetCSS(){
    var selectedSelector = document.querySelectorAll('#targetted-box p');
    var i=0;
    for (i = 0; i < selectedSelector.length; ++i) {
        selectedSelector[i].style.color = "black";
        selectedSelector[i].style.fontWeight = "normal";}


}


function changeCSS(item){
    resetCSS();
    var selectedSelector = document.querySelectorAll('#targetted-box '+item);
    var i=0;
    for (i = 0; i < selectedSelector.length; ++i) {
        selectedSelector[i].style.color = "red";
        selectedSelector[i].style.fontWeight = "bold";}

    
}


