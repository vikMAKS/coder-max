var show = false;
function change() {
    if(show == false) {
        document.getElementById("menu").style.left = "0";
        document.getElementById("menu").style.transition = "0.3s ease";
        show = true;
    } else {
        document.getElementById("menu").style.left = "-250px";
        document.getElementById("menu").style.transition = "0.3s ease";
        show = false;
    }
}