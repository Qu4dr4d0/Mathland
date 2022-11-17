function calc() {

  let homem = window.document.getElementById("flexRadioDefault1")
  let mulher = window.document.getElementById("flexRadioDefault2")

  let altura = window.document.getElementById("height")
  let peso = window.document.getElementById("weight")
  let idade = window.document.getElementById("age")
  let fa = window.document.getElementById("activity")

  let alt1 = Number(altura.value)
  let pes1 = Number(peso.value)
  let ida1 = Number(idade.value)
  let fa1 = Number(fa.value)

  let resh = ((13.75*pes1) + (5*alt1) - (6.8*ida1) + 66.47) * fa1
  let resm = ((9.563*pes1) + (1.85*alt1) - (4.676*ida1) + 655.09) * fa1

  let resul = window.document.getElementById("resultsp")

  if (altura.value.lenght == 0 || peso.value.length == 0 || idade.value.length == 0 || fa.value.length == 0) {
    swal("Hmm... Looks like some fields are empty!")

  } else if ((altura.value == 0 || peso.value == 0 || idade.value == 0 || fa.value == 0)) {
    swal(`Please, put a number greater than 0`,{
      button: "Ok, i'll!",
    })
  }

  if (homem.checked) {
    resul.innerHTML = `${resh.toFixed(0)} Kcals`

  }  
  
  if (mulher.checked) {
    resul.innerHTML = `${resm.toFixed(0)} Kcals`
  }

}