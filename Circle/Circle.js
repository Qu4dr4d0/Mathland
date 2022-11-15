function calc() {

  let radius = window.document.getElementById("radius")
  let rad = Number(radius.value)

  let area = window.document.getElementById("area")
  let diam = window.document.getElementById("diameter")
  let circ = window.document.getElementById("circumference")

  let arear = Math.PI * Math.pow(rad, 2)
  let diamr = rad*2
  let circr = 2 * Math.PI * rad


  area.innerHTML = `<b>${arear.toFixed(3)}</b>`
  diam.innerHTML = `<b>${diamr.toFixed(2)}</b>`
  circ.innerHTML = `<b>${circr.toFixed(2)}</b>`

  if (radius.value.length == 0) {
    swal("Hmm... Looks like the radius field are empty!")

  } else if (radius.value == 0) {
    swal(`Cmom bro, "0"? Am i a joke to you?`,{
      button: "lol, u're not.. srr",
    })

  }



}