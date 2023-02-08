
var loader = document.getElementById('loader');
var body = document.getElementById('body');

window.addEventListener("load", function() { setTimeout(function(){
    loader.style.display = "none";
    body.style.overflow = "auto";
},2000);
});
