  let ipify = "";
  let continent = "";

  fetch(`https://api.ipify.org/?format=json`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      ipify = data['ip'];
    })
    .catch(function(error) {
    })

  fetch(`https://api.ipdata.co/${ipify}?api-key=866650af2960a00a8a11b656befb76c50aaf1b2f548d6263d75da60e`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      continent = data['continent_name']
    })
    .catch(function(error) {
      console.log(error);
    })
