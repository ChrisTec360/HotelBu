var imagenes =['img/hotel.jpeg','img/scroll1.jpg','img/scroll2.jpg'],
cont =0;
function carrucel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras= contenedor.querySelector( '.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img= contenedor.querySelector('.imgCarrucel'),
            tgt = e.target;
        
        if (tgt== atras) {
            if(cont>0){
                img.scr= imagenes[cont -1];
                cont --;

            }else{
                img.scr=imagenes.length -1;
                cont =imagenes.length -1;
            }        
        }else if(tgt==adelante){
            if(cont>imagenes.length -1){
                img.scr= imagenes[cont + 1];
                cont ++;

            }else{
                img.scr=imagenes[0];
                cont =0;
            } 
        }

    });
}
document.addEventListener("DOMContentLoaded",()=>{
    let contenedor=document.querySelector('.contenedor');
    carrucel(contenedor);
})