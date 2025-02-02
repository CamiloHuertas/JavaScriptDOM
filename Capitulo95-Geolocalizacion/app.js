const d = document
const n = navigator


d.addEventListener("DOMContentLoaded", () => {
  const div = d.querySelector("#geolocalizacion")
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  const success = (pos) => {
    let cords = pos.coords

    div.innerHTML = `
      <ul>
        <li>Latitud: ${cords.latitude}</li>
        <li>Latitud: ${cords.longitude}</li>
        <li><a target="_blank" rel="noopener" href="https://www.google.com/maps/@${cords.latitude},${cords.longitude},15z">Ver en maps</a></li>
      </ul>
    `
  }
  const failure = (err) => {
    console.log(err);
    
  }

  const successTwo = (pos) => {
    console.log(pos);
    
  }

  const failureTwo = (err) => {
    console.log(err);
    
  }

//Recibe 3 parametros, el callback si hay sucess, callback si hay error y opciones

  n.geolocation.getCurrentPosition(success, failure, options)

  // El watchPosition muestra cambios apenas se cambia la posicion
  n.geolocation.watchPosition(successTwo, failureTwo, options)

})