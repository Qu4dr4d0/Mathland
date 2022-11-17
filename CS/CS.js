function calc() {

  let radius = window.document.getElementById("radius")
  let rad = Number(radius.value)

  let angle = window.document.getElementById("angle")
  let ang = Number(angle.value)

  let res = window.document.getElementById("res")

  let resul = Math.PI * (rad**2 * ang) / 360

  res.innerHTML = `<b>${resul.toFixed(2)}</b>`

  if (radius.value.length == 0 || angle.value.length == 0) {
    swal("Hmm... Looks like some fields are empty!")

  } else if (radius.value == 0 || angle.value == 0) {
    swal(`Please, put a number greater than 0`,{
      button: "Ok, i'll!",
    })

  }



}