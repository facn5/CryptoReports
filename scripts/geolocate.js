var ipify = "";
var continent = "";

fetch(`https://api.ipify.org/?format=json`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    ipify = data['ip'];
    getCurrency(ipify);
  })
  .catch(function(error) {
    console.log(error);
  })

function getCurrency(userIP) {
  console.log(userIP)
  fetch(`http://api.ipstack.com/${userIP}?access_key=542bfb03ae4cc0573131144dcce349be`)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      continent = data['continent_name'];
      setCurrency(continent);
    })
    .catch(function(error) {
      console.log(error);
    })

}

function setCurrency(defaultCurr) {


}
