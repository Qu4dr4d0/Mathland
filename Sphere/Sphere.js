function calc() {

  let radius = window.document.getElementById("radius")
  let rad = Number(radius.value)

  let area = window.document.getElementById("area")


  let resul = (4/3) * Math.PI * rad**3


  area.innerHTML = `<b>${resul.toFixed(3)}</b>`


  if (radius.value.length == 0) {
    swal("Hmm... Looks like the side field are empty!")

  } else if (radius.value == 0) {
    swal(`Please, put a number greater than 0`,{
      button: "Ok, i'll!",
    })

  }



}