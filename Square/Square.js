function calc() {

  let side = window.document.getElementById("side")
  let sid = Number(side.value)

  let area = window.document.getElementById("area")


  let resul = sid * sid


  area.innerHTML = `<b>${resul.toFixed(3)}</b>`


  if (side.value.length == 0) {
    swal("Hmm... Looks like the side field are empty!")

  } else if (side.value == 0) {
    swal(`Please, put a number greater than 0`,{
      button: "Ok, i'll!",
    })

  }



}