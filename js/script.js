document.addEventListener('DOMContentLoaded', function() {
    const inputAmount = document.getElementById('inputAmount');
    const currencySelector = document.getElementById('currencySelector');
    const outputKZT = document.getElementById('outputKZT');
    const outputUSD = document.getElementById('outputUSD');
    const outputEUR = document.getElementById('outputEUR');
  
   
    const exchangeRates = {
      KZT: { USD: 431, EUR: 509 },
      USD: { KZT: 429, EUR: 1.08 }, 
      EUR: { KZT: 507, USD: 0.93 }  
    };
  
  
    function convertCurrency() {
      const amount = parseFloat(inputAmount.value);
      const fromCurrency = currencySelector.value;
  
      if (!isNaN(amount)) {
        if (fromCurrency === 'KZT') {
          outputUSD.value = (amount / exchangeRates.KZT.USD).toFixed(2);
          outputEUR.value = (amount / exchangeRates.KZT.EUR).toFixed(2);
        } else if (fromCurrency === 'USD') {
          outputKZT.value = (amount * exchangeRates.USD.KZT).toFixed(2);
          outputEUR.value = (amount * exchangeRates.USD.EUR).toFixed(2);
        } else if (fromCurrency === 'EUR') {
          outputKZT.value = (amount * exchangeRates.EUR.KZT).toFixed(2);
          outputUSD.value = (amount * exchangeRates.EUR.USD).toFixed(2);
        }
      } else {
        
        outputKZT.value = outputUSD.value = outputEUR.value = '';
      }
    }
  

    inputAmount.addEventListener('input', convertCurrency);
    currencySelector.addEventListener('change', convertCurrency);
  });