var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');
var btn4=document.getElementById('btn4');

var project1=document.getElementById('project1');
var project2=document.getElementById('project2');
var project3=document.getElementById('project3');
var project4=document.getElementById('project4');
var project5=document.getElementById('project5');
var project6=document.getElementById('project6');

btn1.addEventListener("click",function(){
    project1.style.display='block';
    project2.style.display='block';
    project3.style.display='block';
    project4.style.display='block';
    project5.style.display='block';
    project6.style.display='block';
});
btn2.addEventListener("click",function(){
    project1.style.display='block';
    project2.style.display='block';
    project3.style.display='none';
    project4.style.display='none';
    project5.style.display='none';
    project6.style.display='none';
    console.log(project1);
});
btn3.addEventListener("click",function(){
    project1.style.display='none';
    project2.style.display='none';
    project3.style.display='none';
    project4.style.display='none';
    project5.style.display='block';
    project6.style.display='block';
});
btn4.addEventListener("click",function(){
    project1.style.display='none';
    project2.style.display='none';
    project3.style.display='block';
    project4.style.display='block';
    project5.style.display='none';
    project6.style.display='none';
});

window.onscroll = function() {scrollFunction()};
const navBar = document.getElementById("navigationBar");
function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    navBar.style.background = "#3e3ebc";

  } else {
    navBar.style.background = "#ffffff00";
  }
}

