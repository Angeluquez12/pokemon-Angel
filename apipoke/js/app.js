function buscar(){
    document.getElementById("contenido").innerHTML=''
    valor=document.getElementById("pokemon").value
    cadena=""
    //conexion a la api o ruta
         url = "https://pokeapi.co/api/v2/pokemon/"+valor
                   fetch(url)
                  .then( response => response.json())
                  .then( data =>  visualizar(data) )
                  .catch( error => console.log(error))
              const visualizar = (data => {
                console.log(data)   
                cadena=`<strong>Nombre:</strong> ${data.name} ` 
                cadena+=`<strong>id:</strong> ${data.id} `
                cadena+=`<strong>altura:</strong> ${data.weight} `
                cadena+=`<img src=${data.sprites.front_default} width="200" height="200"></img>`
                cadena+=`<img src=${data.sprites.back_default} width="200" height="200"></img>`
                document.getElementById("contenido").innerHTML=cadena
                
       }  ) 
    }
