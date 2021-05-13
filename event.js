function sayHello(){
    alert("hello");
}
function sayByee(){
    alert("Byee!!");
}
var button=document.getElementById('btn1');
 button.addEventListener('click',sayHello);
 var button2=document.getElementById('btn2');
 button2.addEventListener('click',sayHello);
 button2.addEventListener('click',sayByee);
