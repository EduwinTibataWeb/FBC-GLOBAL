var getMenuBoton = document.getElementById('boton_active_menu');
var getMenu = document.getElementById('menu');

getMenuBoton.addEventListener('click', function(){
    if(getMenu.getAttribute("class") == 'menu_items menu_active'){
        getMenu.classList.remove("menu_active");
        getMenuBoton.classList.remove("icon_active");
    }else{
        getMenu.classList.add("menu_active");
        getMenuBoton.classList.add("icon_active");
    }
    
});

var getTestimonial = document.getElementById('testimonial');
var getBotonesTest1 = document.getElementById('btn1');
var getBotonesTest2 = document.getElementById('btn2');

function slider(){
    getBotonesTest1.classList.add('active_icon_slider');
    if(getTestimonial.getAttribute("class") == "all_slider active_slider"){
        getTestimonial.classList.remove('active_slider');
        getBotonesTest1.classList.add('active_icon_slider');
        getBotonesTest2.classList.remove('active_icon_slider');
    }else{
        getTestimonial.classList.add('active_slider');
        getBotonesTest2.classList.add('active_icon_slider');
        getBotonesTest1.classList.remove('active_icon_slider');
    }
}
window.onscroll = function() {
    var scrollPosition=window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
    var getContador2 = document.getElementById('contador');
    var getContador = getOffset( document.getElementById('contador') ).top;
    var gettarjeta2 = document.getElementById('empresas');
    var gettarjeta = getOffset( gettarjeta2 ).top;
    var gettarCont2 = document.getElementById('cont');
    var gettarCont = getOffset( gettarCont2 ).top;
    var gettarHistoria2 = document.getElementById('historia');
    var gettarHistoria = getOffset( gettarHistoria2 ).top;
    if(getContador <= (scrollPosition+900)){
        getContador2.classList.add('active_contador');
        var getContadorUno = document.getElementById('contador1');
        var getContadorDos = document.getElementById('contador02');
        var getContadorTres = document.getElementById('contador3');
        if(getContadorUno.innerHTML <= 1){
            var i = 0;
            var cont1 = setInterval(contTres, 7);
            function contTres(){
               i ++;
               if( i == 250){clearInterval(cont1);}
               if(getContadorTres == null){
                   getContadorDos.innerHTML = (i + 650);
                   getContadorUno.innerHTML = (i * 1000);
               }else{
                   getContadorUno.innerHTML = (i * 1000);
                   getContadorTres.innerHTML = (i * 10);
               }
           }
        }
    }
    if(gettarjeta <= (scrollPosition+800)){gettarjeta2.classList.add('active_contador');}
    if(gettarCont <= (scrollPosition+800)){gettarCont2.classList.add('active_contador');}
    if(gettarHistoria <= (scrollPosition+900)){gettarHistoria2.classList.add('active_contador');}
};
function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
var x = getOffset( document.getElementById('div') ).left;
var y = getOffset( document.getElementById('contador') ).top;
console.log("x: "+ x);
console.log("y: "+ y);

