const numbpeople = (x, y) => { return x * y  }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = 'Invalid input'
    event.target.focus()
  }
}

const Numbpeople = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#peoplePerCar').checkValidity() && document.querySelector('#cars').checkValidity()) {
    const regex = /[^a-zA-Z_]/g
    const i = parseInt(document.querySelector('#peoplePerCar').value)
    const j = parseInt(document.querySelector('#cars').value)
    const ans = ` Number of people is ${numbpeople(i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }
}


// delegate to dynamic elements (e.g. when testing)
// focusout is like blur, but it bubbles up

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'peoplePerCar') ||
    (event.target && event.target.id === 'cars')){
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { Numbpeople(event) }
})


