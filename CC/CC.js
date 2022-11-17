function calc() {

  let major = window.document.getElementById("major")
  let maj = Number(major.value)

  let minor = window.document.getElementById("minor")
  let min = Number(minor.value)

  let res = window.document.getElementById("res")

  let resul = Math.PI * (maj**2 - min**2)

  res.innerHTML = `<b>${resul.toFixed(2)}</b>`

  if (major.value.length == 0 || minor.value.length == 0) {
    swal("Hmm... Looks like some fields are empty!")

  } else if (major.value == 0 || minor.value == 0) {
    swal(`Please, put a number greater than 0`,{
      button: "Ok, i'll!",
    })

  }



}