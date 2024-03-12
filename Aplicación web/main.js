document.addEventListener ('DOMContentLoaded',function (){

    const formulariolibro = document.getElementById('formulariolibro');
    const filatabla = document.getElementById('registrotabla');
    formulariolibro.addEventListener('submit',function(event){
        event.defaultPrevented();

        const titulo = document.getElementById('titulo');
        const autor = document.getElementById('autor');
        const editorial = document.getElementById('editorial');
        const categoria = document.getElementById('categoria');
        const fecha = document.getElementById('fecha');


        const libro = {
            titulo:titulo,
            autor: autor,
            editorial: editorial,
            categoria: categoria,
            fecha: fecha

        };
        librosregistrados.push(libro);
        agregarlibro();
    });

    function agregarlibro(){
        filatabla.innerHTML='';
        librosregistrados.forEach(function(libro,indice)){

            
        const fila =`
        <tr>
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td>${libro.editorial}</td>
        <td>${libro.categoria}</td>
        <td>${libro.fecha}</td>
      </tr>
        `;
        
        }
            
       
    }
});
    
