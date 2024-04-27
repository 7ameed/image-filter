var saturate = document.getElementById('saturate');
var contrast = document.getElementById('contrast');
var brightness = document.getElementById('brightness');
var sepia = document.getElementById('sepia');
var grayscale = document.getElementById('grayscale');
var blur = document.getElementById('blur');
var huerotate = document.getElementById('huerotate');
var upload= document.getElementById('upload');
var download= document.getElementById('download');
var img= document.getElementById('img');
var reset = document.querySelector('span');
var imagebox = document.querySelector('.img-box');




function resetvalue(){
    img.style.filter = 'none';
    saturate.value = '100'
   contrast.value = '100'
   brightness.value = '100'
    sepia.value = '0'
    grayscale.value = '0'
    blur.value = '0'
    huerotate.value = '0'

}


window.onload= function(){
    download.style.display ='none';
    reset.style.display = 'none';
    imagebox.style.display = 'none';
}
upload.onchange = function(){
    resetvalue();
    download.style.display ='block';
    reset.style.display = 'block';
    imagebox.style.display = 'block';
    var file =  new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload = function(){
        img.src = file.result;
    }
    
}
let filters = document.querySelectorAll("ul li input");
filters.forEach(  filter =>{
    filter.addEventListener('input', function(){
        img.style.filter = `
        
        saturate(${saturate.value}%)
       contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
       hue-rotate(${huerotate.value}deg)
        `
    })

})
