var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
count = 0;

box.addEventListener('click', function(){
    count++;
    console.log(count);
    clickCount.innerText = count + " ";
});
var search=document.getElementById('search');
search.addEventListener('keypress',function(){
    console.log('Keypress');
});