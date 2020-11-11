function yesClick (){
    alert("Sorry! I don't love you");
}

function noClick () {
    let move_top = Math.random() * window.innerHeight;
    let move_left = Math.random() * window.innerWidth;
    document.getElementById('btnno').style.top = move_top + 'px';
    document.getElementById('btnno').style.left = move_left + 'px';
}