

  

  function main() {

    fetch("https://api.ipify.org?format=json")
        .then(resultat => resultat.json())
            .then(json => {
                const ip  = json.ip;
                document.querySelector("#Ip").textContent = ip

              
  })

  }
  main();