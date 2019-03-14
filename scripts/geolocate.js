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
    .then(function(){
      loadAndConvertCurrencies();
    })

    .catch(function(error) {
      console.log(error);
    })

    var currency_api_key = "?apikey=F642409A-2750-43F8-BB06-46272975B85E";
    var crypto_api_url = "https://rest.coinapi.io/v1/exchangerate/";
    var userCurrency = ""
    var userCurrencyToBtc = "";
    var userCurrencyToLtc = "";
    var userCurrencyToXrp = "";
    var userCurrencyToBch = "";
    var userCurrencyToEos = "";

    function SubStr()
    {
      userCurrencyToBtc = userCurrencyToBtc.toString().substr(0,8);
      userCurrencyToLtc = userCurrencyToLtc.toString().substr(0,8);
      userCurrencyToBch = userCurrencyToBch.toString().substr(0,8);
      userCurrencyToEos = userCurrencyToEos.toString().substr(0,8);
      userCurrencyToXrp = userCurrencyToXrp.toString().substr(0,8);
      userCurrencyToEth = userCurrencyToEos.toString().substr(0,8);
    }


function loadAndConvertCurrencies()
{
      if ( continent == "Asia" ) userCurrency = "NIS";
      else if (continent == "Europe") userCurrency = "EUR";
      else if (continent == "Australia") userCurrency = "AUD";
      else userCurrency = "USD";


    fetch(crypto_api_url + userCurrency + currency_api_key)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (userCurrency == "NIS") {
        userCurrencyToBtc = 1 / data.rates[0].rate;
        userCurrencyToLtc = 1 / data.rates[1].rate;
        userCurrencyToXrp = 1 / data.rates[52].rate;
        userCurrencyToBch = 1 / data.rates[49].rate;
        userCurrencyToEth = 1 / data.rates[11].rate;
        userCurrencyToEos = 1 / data.rates[6].rate;
      }
      else if (userCurrency ==  "EUR") {
        userCurrencyToBtc = 1 / data.rates[1].rate;
        userCurrencyToLtc = 1 / data.rates[3].rate;
        userCurrencyToXrp = 1 / data.rates[7].rate;
        userCurrencyToBch = 1 / data.rates[15].rate;
        userCurrencyToEth = 1 / data.rates[252].rate;
        userCurrencyToEos = 1 / data.rates[8].rate;
      }
      else if (userCurrency ==  "AUD") {
        userCurrencyToBtc = 1 / data.rates[0].rate;
        userCurrencyToLtc = 1 / data.rates[3].rate;
        userCurrencyToXrp = 1 / data.rates[1].rate;
        userCurrencyToBch = 1 / data.rates[5].rate;
        userCurrencyToEth = 1 / data.rates[4].rate;
        userCurrencyToEos = 1 / data.rates[9].rate;
      }
      else {
        userCurrencyToBtc = 1 / data.rates[0].rate;
        userCurrencyToLtc = 1 / data.rates[9].rate;
        userCurrencyToXrp = 1 / data.rates[18].rate;
        userCurrencyToBch = 1 / data.rates[10].rate;
        userCurrencyToEth = 1 / data.rates[6].rate;
        userCurrencyToEos = 1 / data.rates[2].rate;
      }

        SubStr();

        document.getElementById('moving-header1').innerHTML = "BTC: " + userCurrencyToBtc + "&nbsp;&nbsp;&nbsp;&nbsp;XRP: " + userCurrencyToXrp + "&nbsp;&nbsp;&nbsp;&nbsp;LTC: " + userCurrencyToLtc + "&nbsp;&nbsp;&nbsp;&nbsp;EOS: " + userCurrencyToEos + "&nbsp;&nbsp;&nbsp;&nbsp;BCH: " + userCurrencyToBch + "&nbsp;&nbsp;&nbsp;&nbsp;ETH: " + userCurrencyToEth;

      })
      .catch(function(m) {
        console.log(m)
      });
    }
