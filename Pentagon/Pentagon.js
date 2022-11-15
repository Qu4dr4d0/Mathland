

function calc() {

  let side = window.document.getElementById("side")
  let sid = Number(side.value)

  let area = window.document.getElementById("area")

  let resul = (5 * (sid**2)) / (4 * 0.7265)
  // let resul = 1 / 4 * Math.sqrt( 5 * (5 + 2 * Math.sqrt(5)) * Math.pow(sid, 2))


  area.innerHTML = `<b>${resul.toFixed(4)}</b>`


  if (side.value.length == 0) {
    swal("Hmm... Looks like the side field are empty!")

  } else if (side.value == 0) {
    swal(`Cmom bro, "0"? Am i a joke to you?`,{
      button: "U're not.. srr",
    })

  }



}