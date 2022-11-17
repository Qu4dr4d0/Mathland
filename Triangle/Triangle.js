function calc() {

  let height = window.document.getElementById("height")
  let heir = Number(height.value)

  let base = window.document.getElementById("base")
  let baser = Number(base.value)

  let res = window.document.getElementById("res")

  let resul = (heir * baser) / 2

  res.innerHTML = `<b>${resul.toFixed(3)}</b>`

  if (height.value.length == 0 || base.value.length == 0) {
    swal("Hmm... Looks like some fields are empty!")

  } else if (height.value == 0 || base.value == 0) {
    swal(`Please, put a number greater than 0`,{
      button: "Ok, i'll!",
    })

  }



}