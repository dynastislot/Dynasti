function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("logo45").style.display = "none";
    document.getElementById("main").style.display = "none"
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("logo45").style.display = "flex";
    document.getElementById("main").style.display = "block"
}