//COTAÇÃO MOEDAS
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//DECLARAÇÃO DAS VARIAVEIS 
const form = document.querySelector("form")
const amount = document.querySelector("#amount");
const currency = document.querySelector("#currency");
const footer = document.querySelector("main footer");
const description =document.getElementById("description")
const result = document.getElementById("result")

amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
});

form.onsubmit = (event) => {
  event.preventDefault()
switch (currency.value){
  case "USD":
    convertCurrency(amount.value, USD, "US$")
    break
  case "EUR":
    convertCurrency(amount.value, EUR, "€")
    break
  case "GBP":
    convertCurrency(amount.value, GBP, "£")
  break
}}

//FUNÇÃO PARA CONVERTER A MOEDA
function convertCurrency(amount, price, symbol){
  try{
    //Exibindo a contação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    let total = amount * price
    //Exibir o resultado total
    result.textContent = `${total.toFixed(2).replace(".", ",")} Reais`
    //Aplicar a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  }
  catch(error){
    footer.classList.remove("show-result")
    console.log(error)
    alert("Não foi possível converter. Tente novamente mais tarde")
  }
}

//Formata a moeda em Real Brasileiro.
function formatCurrencyBRL(value){
  //Converter para número para utilizar o toLocaleString para formatar no padrão BRL (R$ 00,00).
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}

