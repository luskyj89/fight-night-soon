
function init(){
    console.log("init")
    setInterval(function() {
        window.location.reload();
    }, 300000);
}

$(document).ready(function(){
    init()
});
