function calc() {

  let tog1 = document.getElementById('toggle1')
  let tog2 = document.getElementById('toggle2')

  let n1 = document.getElementById('n1')
  let n2 = document.getElementById('n2')
  let n3 = document.getElementById('n3')
  let n4 = document.getElementById('n4')
  let n5 = document.getElementById('n5')

  let r1 = Number(n1.value)
  let r2 = Number(n2.value)
  let r3 = Number(n3.value)
  let r4 = Number(n4.value)
  let r5 = Number(n5.value)



  let resu = document.getElementById('result')




  // BOTH NOT CHECKED
  let x1 = (r4*r5*r3) / (r1*r2)

  // TOG 2 CHECKED
  let x2 = (r1*r2*r3) / (r4*r5)
  
  // TOG 1 CHECKED
  let x3 = (r4*r2*r3) / (r1*r5)

  // BOT CHECKED
  let x4 = (r1*r2*r3) / (r4*r5)



  
  if (tog1.checked == false && tog2.checked == false) {

  resu.innerHTML = `<b>${x1.toFixed(2)}</b>`
  
 }

  if (tog1.checked == false && tog2.checked) {

    resu.innerHTML = `<b>${x2.toFixed(2)}</b>`

  }

  if (tog1.checked && tog2.checked == false ) {

    resu.innerHTML = `<b>${x3.toFixed(2)}</b>`

  }

  if (tog1.checked && tog2.checked) {

    resu.innerHTML = `<b>${x4.toFixed(2)}</b>`

  }



  // if (n1.value.lenght == 0 || n2.value.length == 0 || n3.value.length == 0) {
  //   swal("Hmm... Looks like some fields are empty!")

  // } else if (n1.value == 0 || n2.value == 0 || n3.value == 0) {
  //   swal(`Cmom bro, "0"? Am i a joke to you?`,{
  //     button: "U're not.. srr",
  //   })

  // }




}

