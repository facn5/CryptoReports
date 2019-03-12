var currency_api_key = "?apikey=DD681900-C114-4475-8363-6D40C5C5B027";
var crypto_api_url = "https://rest.coinapi.io/v1/exchangerate/NIS";
var nisToBtc = "";
var nisToLtc = "";
var nisToXrp = "";
var nisToBch = "";
var nisToEos = "";

function SubStr()
{
  nisToBtc = nisToBtc.toString().substr(0,8);
  nisToLtc = nisToLtc.toString().substr(0,8);
  nisToBch = nisToBch.toString().substr(0,8);
  nisToEos = nisToEos.toString().substr(0,8);
  nisToXrp = nisToXrp.toString().substr(0,8);
  nisToEth = nisToEos.toString().substr(0,8);
}

function buttonClicked() {
fetch(crypto_api_url+currency_api_key)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    nisToBtc = 1 / data.rates[0].rate;
    nisToLtc = 1 / data.rates[1].rate;
    nisToXrp = 1 / data.rates[52].rate;
    nisToBch = 1 / data.rates[49].rate;
    nisToEth = 1 / data.rates[11].rate;
    nisToEos = 1 / data.rates[6].rate;

    SubStr();

    document.getElementById('moving-header1').innerHTML = "BTC: "+nisToBtc + "&nbsp;&nbsp;&nbsp;&nbsp;XRP: "+nisToXrp+"&nbsp;&nbsp;&nbsp;&nbsp;LTC: "+nisToLtc+"&nbsp;&nbsp;&nbsp;&nbsp;EOS: "+nisToEos+"&nbsp;&nbsp;&nbsp;&nbsp;BCH: "+nisToBch +"&nbsp;&nbsp;&nbsp;&nbsp;ETH: "+nisToEth;

  })
  .catch(function(m) {
    console.log(m)
  });

}
