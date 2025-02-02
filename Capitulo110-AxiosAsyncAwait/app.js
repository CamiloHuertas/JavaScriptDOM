(() => {

  const $axiosAsync = document.getElementById("axios")
  const $fragment = document.createDocumentFragment()

  // De esta forma se hace async y await con axios

  async function getData(){
    try {
      // Es lo mismo pero con axios.get 
      let res = await axios.get("https://jsonplaceholder.typicode.com/users")
      let data = res.data
      data.forEach((el) => {
        const li = document.createElement("li")
        li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        $fragment.appendChild(li)
      })

      $axiosAsync.appendChild($fragment)
    } catch (err) {
      
      $axiosAsync.innerHTML = `${err.message}`
    } finally {
      console.log(`Se ejecuta independientemente de try catch`);
    }
  }

  getData()

})();