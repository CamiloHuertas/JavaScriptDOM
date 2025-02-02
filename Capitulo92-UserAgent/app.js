const d = document
const n = navigator
const userAgent = n.userAgent

d.addEventListener("DOMContentLoaded", () => {
  console.log(userAgent);
  
  const div = d.querySelector(".userDevice")
  isMobile = {
    android: () => userAgent.match(/android/i),
    ios: () => userAgent.match(/iphone|ipad|ipod/i),
    windows: () => userAgent.match(/windows phone/i),
    any: function(){
      return this.android() || this.ios() || this.windows()
    }
  }
  isDesktop = {
    linux: () => userAgent.match(/linux/i),
    mac: () => userAgent.match(/mac os/i),
    windows: () => userAgent.match(/windows nt/i),
    any: function(){
      return this.linux() || this.mac() || this.windows()
    }
  }
  isBrowser = {
    chrome: () => userAgent.match(/chrome/i),
    safari: () => userAgent.match(/safari/i),
    any: function(){
      return this.chrome() || this.safari()
    }
    //Asi con el resto
  }

  div.innerHTML = `
    <ul>
      <li>User Agent: <b>${userAgent}</b> </li>
      <li>Plataforma: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b> </li>
      <li>Navegador: <b>${isBrowser.any()}</b></li>  
    </ul>
  `

  // De esta forma es posible hacer contenido exclusivo

  if (isBrowser.safari()){  
    console.log(`Solo en safati`);
  }

})

