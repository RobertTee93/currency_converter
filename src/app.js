import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      amountToConvert: 0,
      currencyToConvertTo: null,
      currencyToConvertFrom: null,
      convertedValue: null,
      currencies: {}
    },
    mounted(){
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function(){
        fetch("https://api.exchangeratesapi.io/latest")
          .then(result => result.json())
          .then(currencies => this.currencies = currencies.rates)
      },
      calculateExchange: function(){
        this.convertedValue = (1 / this.currencyToConvertFrom * this.amountToConvert) * this.currencyToConvertTo;
        this.convertedValue = Math.round(this.convertedValue * 100) / 100
      }
    }
  })
})
