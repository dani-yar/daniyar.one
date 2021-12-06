// Mobile menu animation 
var chet = 0;
function mmenu_anim() {
    if (chet == 0) {
        chet = 1;
        setTimeout("document.getElementById('mmenu1').style.marginLeft = '0'; document.getElementById('mmenu1').style.opacity = '100'", 200);
        setTimeout("document.getElementById('mmenu2').style.marginLeft = '0'; document.getElementById('mmenu2').style.opacity = '100'", 250);
        setTimeout("document.getElementById('mmenu3').style.marginLeft = '0'; document.getElementById('mmenu3').style.opacity = '100'", 300);
    } else {
        chet = 0;
        setTimeout("document.getElementById('mmenu1').style.marginLeft = '100px'; document.getElementById('mmenu1').style.opacity = '0'", 100);
        setTimeout("document.getElementById('mmenu2').style.marginLeft = '100px'; document.getElementById('mmenu2').style.opacity = '0'", 200);
        setTimeout("document.getElementById('mmenu3').style.marginLeft = '100px'; document.getElementById('mmenu3').style.opacity = '0'", 300);
    }
}
