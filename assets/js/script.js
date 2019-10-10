$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


console.log("hola");data=data || {}; // si no existe data, creamos un objeto vacío para evitar posteriores errores
id="modal-"+id; // añadimos "modal-" a la id para evitar conflictos con otros elementos
if (document.getElementById(id)==null) { // solo hace falta crearla si no existe
 var d=document.createElement("div");
 d.className="jmgmodal"; // clase para estilizarla vía CSS
 d.id=id;
 // creamos el panel interior
 var p=document.createElement("div");
 p.className="panel";
 // creamos los componentes de la cabecera: título y botón de cerrar
 var t=document.createElement("div");
 t.className="title";
 var cl=document.createElement("div");
 cl.className="close";
 cl.innerHTML='×';
 // cerramos y vaciamos la modal al pulsar el botón X
 cl.addEventListener('click',function(ev) {
  ev.preventDefault();
  var dTop=this.parentNode.parentNode;
  dTop.classList.remove("visible");
  dTop.querySelector(".panel .content").innerHTML='';
 });
 // creamos la caja donde se mostrará el contenido
 var ct=document.createElement("div");
 ct.className="content";
 // también añadimos un pie, para añadir los posibles botones
 var f=document.createElement("div");
 f.className="footer";
 /* finalmente, añadimos "t", "cl", "ct" y "f"
 (título, botón cerrar, div contenido y div footer)
 a "p" (panel interior), éste lo añadimos a "d"
 (div principal, para oscurecer el fondo), y "d"
 lo añadimos al body de la página */
 p.appendChild(t);p.appendChild(cl);p.appendChild(ct);p.appendChild(f);
 d.appendChild(p);
 document.body.appendChild(d);
