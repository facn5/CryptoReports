var continent = "";

fetch(`https://api.ipdata.co/?api-key=866650af2960a00a8a11b656befb76c50aaf1b2f548d6263d75da60e`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    console.log(data['continent_name']);
    continent = data['continent_name'];
  })
  .catch(function(error) {
    console.log(error);
  })
