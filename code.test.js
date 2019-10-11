QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST add', assert => {
  assert.equal(numbpeople(1, 1), 1, 'Positive integers')
  assert.equal(numbpeople(-1, -1), 2, 'Positive integers')
  assert.equal(numbpeople(10, 10), 100, 'valuess')
})

QUnit.config.autostart = false  // sync = false; start after loading html

window.addEventListener('load', () => {
  const appURL = '../index.html'
  const openingTag = '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">'
  const closingTag = '</body>'
  fetch(appURL, { method: 'GET' })
    .then(response => {
      return response.text() // returns promise
    })
    .then(txt => {
      const start = txt.indexOf(openingTag)
      const end = txt.indexOf(closingTag) + closingTag.length
      const html = txt.substring(start, end)
      const qunitFixtureBody = document.getElementById('qunit-fixture')
      qunitFixtureBody.innerHTML = html
      console.info(qunitFixtureBody)
      QUnit.start()
    })
    .catch(error => {
      console.error('error:', error);
      QUnit.start()
    })
})

QUnit.test("TEST first number validation", assert => {
  const input = document.querySelector('#firstNumber')
  const warning = document.querySelector('#firstWarning')
  input.value = -3;
  assert.equal(input.value, -3, "Bad value assigned")
  assert.strictEqual(input.checkValidity(), false, "Correctly fails validation")
  input.focus()
  input.blur()
  assert.strictEqual(warning.innerHTML, 'Invalid input', `Correctly adds warning ${warning}`)
})