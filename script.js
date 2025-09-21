// BCD	Bitcoin Diamond
// BCH	Bitcoin Cash / BCC
// DOGE	Dogecoin
// ETH	Ethereum
const dogecoin = document.querySelector(".dogecoin");
const bitcoin = document.querySelector(".bitcoin");
const ethereum = document.querySelector(".ethereum");

const URL = `https://api.coinlayer.com/live?access_key=7cdcaa13edbb03a96253b3ae48e3d006`;
async function getCryptoRates() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    bitcoin.textContent = `BTC: $${data.rates.BTC}`;
    ethereum.textContent = `ETH: $${data.rates.ETH}`;
    dogecoin.textContent = `DOGE: $${data.rates.DOGE}`;
  } catch (error) {
    console.log("Invalid Response", error);
  }
}
getCryptoRates();
