function calc() {

  let height = window.document.getElementById("height")
  let heir = Number(height.value)

  let radius = window.document.getElementById("radius")
  let rad = Number(radius.value)

  let res = window.document.getElementById("res")

  let resul = (1/3) * Math.PI * rad**2 * heir

  res.innerHTML = `<b>${resul.toFixed(3)}</b>`

  if (height.value.length == 0 || base.value.length == 0) {
    swal("Hmm... Looks like some fields are empty!")

  } else if (height.value == 0 || base.value == 0) {
    swal(`Please, put a number greater than 0`,{
      button: "Ok, i'll!",
    })

  }



}