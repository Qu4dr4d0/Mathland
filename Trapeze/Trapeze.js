function calc() {

  let n1 = document.getElementById('n1')
  let n2 = document.getElementById('n2')
  let n3 = document.getElementById('n3')

  let r1 = Number(n1.value)
  let r2 = Number(n2.value)
  let r3 = Number(n3.value)

  let resu = document.getElementById('result')

  let res = (r1 + r2) * r3 / 2

  resu.innerHTML = `<b>${res.toFixed(2)}</b>`


  if (n1.value.lenght == 0 || n2.value.length == 0 || n3.value.length == 0) {
    swal("Hmm... Looks like some fields are empty!")

  } else if (n1.value == 0 || n2.value == 0 || n3.value == 0) {
    swal(`Please, put a number greater than 0`,{
      button: "Ok, i'll!",
    })

  }

  


}

