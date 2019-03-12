var currency_api_key = "?apikey=DD681900-C114-4475-8363-6D40C5C5B027";
var crypto_api_url = "https://rest.coinapi.io/v1/exchangerate/USD";
var usdToBtc = "";
var usdToXrp = "";
var usdToGbp = "";
var usdToEur = "";
var usdToNis = "";

function SubStr()
{
  usdToBtc = usdToBtc.toString().substr(0,8);
  usdToXrp = usdToXrp.toString().substr(0,8);
  usdToNis = usdToNis.toString().substr(0,8);
  usdToEur = usdToEur.toString().substr(0,8);
  usdToGbp = usdToGbp.toString().substr(0,8);
}

function buttonClicked() {
fetch(crypto_api_url+currency_api_key)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    usdToBtc = data.rates[0].rate;
    usdToXrp = data.rates[18].rate;
    usdToNis = data.rates[905].rate;
    usdToGbp = data.rates[66].rate;
    usdToEur = data.rates[44].rate;

    SubStr();

    console.log(data.rates[905].asset_id_quote + data.rates[18].asset_id_quote + data.rates[66].asset_id_quote + data.rates[44].asset_id_quote)
    document.getElementById('moving-header').textContent = "BTC: "+usdToBtc+", XRP: "+usdToXrp+", NIS: "+usdToNis+", EUR: "+usdToEur+", GBP: "+usdToGbp;

  })
  .catch(function(m) {
    console.log(m)
  });

}
