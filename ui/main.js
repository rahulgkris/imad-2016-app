console.log('Loaded!');

var element = document.getElementById('maintext');

element.innerHTML = 'Hopesprings';

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft =marginLeft + 20;
    img.style.marginLeft=marginLeft + 'px';
}
function moveTight(){
    marginLeft =marginLeft - 20;
    img.style.marginLeft=marginLeft + 'px';
}
img.onclick = function(){
    img.style.marginRight= '100px';
    var interval = setInterval(moveRight,100);
    var intervalx = setInterval(moveTight,100);
} 
