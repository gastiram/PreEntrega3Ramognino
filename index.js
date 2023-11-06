const btnCarrito = document.querySelector('.carrito');
const contenedorProductos = document.querySelector(".contenedor-productos");


btnCarrito.addEventListener('click', () => {
    contenedorProductos.classList.toggle("carrito-escondido");
});

const carritoInfo = document.querySelector("carrito-productos");
const nuevosProductos = document.querySelector(".nuevos-productos");

const listaProductos = document.querySelector(".prendas");

let todosLosProductos = []

const valorTotal = document.querySelector(".totalPagar");

const contarProductos = document.querySelector(".contador-productos");

listaProductos.addEventListener("click", e =>{
    if(e.target.classList.contains("btnSumarCarrito")){
        const producto = (e.target.parentElement)
        const infoProducto = {
            cantidad: 1,
            titulo: producto.querySelector("h4").textContent,
            precio: producto.querySelector("p").textContent,
        };

        const existe = todosLosProductos.some(producto => producto.titulo === infoProducto.titulo)
        
        if(existe){
            const productos = todosLosProductos.map(producto => {
                if(producto.titulo === infoProducto.titulo){
                    producto.cantidad++;
                    return producto 
                }else{
                    return producto
                }
            })
            todosLosProductos = [...productos]
        }else{
            todosLosProductos = [...todosLosProductos, infoProducto];
        }
        

        mostrarHTML();
    }
    
});

nuevosProductos.addEventListener("click", (e)=>{
    if(e.target.classList.contains("iconoBasura")){
        const producto = e.target.parentElement
        const titulo = producto.querySelector("p").textContent

        todosLosProductos = todosLosProductos.filter(producto => producto.titulo !== titulo);
        console.log(todosLosProductos);
        mostrarHTML();
    }
});

const mostrarHTML = () => {

    if(!todosLosProductos.length){
        contenedorProductos.innerHTML=`<p class="carritoVacio">El carrito esta vacio</p>`
    }

    nuevosProductos.innerHTML = "";

    let total =  0;
    let totalDeProductos = 0;

    todosLosProductos.forEach(producto =>{
        const contenedorDeProductos = document.createElement("div");
        contenedorDeProductos.classList.add("carrito-productos");

        contenedorDeProductos.innerHTML = `
        <div class="info-productos">
            <span class="cantidad-productos">${producto.cantidad}</span>
            <p class="titulo-productos">${producto.titulo}</p>
            <span class="precio-productos">${producto.precio}</span>
        </div>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="iconoBasura">
            <path 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>`
                
        nuevosProductos.append(contenedorDeProductos);

        total = total + parseInt(producto.cantidad * producto.precio.slice(1));

        totalDeProductos = totalDeProductos + producto.cantidad;
    });

    valorTotal.innerText = `$${total}`;
    contarProductos.innerText = totalDeProductos;
};