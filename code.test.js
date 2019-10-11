QUnit.module('Main', {})

QUnit.test( "Test calcCG", function( assert ) {
    assert.equal(testcalc(5,2);
    assert.equal(testcalc(9,-4);
    assert.equal(testcalc(8,0);
    assert.equal(testcalc(8,2);
    assert.equal(testcalc(5,8);
});

window.addEventListener('load', () => {
    const appURL = '../index.html'
    const openingTag = '<main class="container mt-5 flex-fill">'
    const closingTag = '</main>'
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