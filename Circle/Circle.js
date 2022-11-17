function calc() {

  let r = window.document.getElementById("flexRadioDefault1")
  let d = window.document.getElementById("flexRadioDefault2")
  let c = window.document.getElementById("choice")

  let number = window.document.getElementById("number")
  let n = Number(number.value)

  let area = window.document.getElementById("area")

  let radFor = Math.PI * Math.pow(n, 2)
  let diaFor = Math.PI * Math.pow(n, 2) / 4


  if (number.value.length == 0) {
    swal("Hmm... Looks like the radius field are empty!")

  } else if (number.value == 0) {
    swal(`Please, put a number greater than 0`,{
      button: "Ok, i'll!",
    })

  }

  if (r.checked) {
    area.innerHTML = `<b>${radFor.toFixed(2)}</b>`
    c.innerHTML = `radius`
  }

  if (d.checked) {
    area.innerHTML = `<b>${diaFor.toFixed(2)}</b>`
    c.innerHTML = `diameter`
  }





}