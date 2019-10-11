QUnit.module('Main', {})

QUnit.test( "Test calcCG", function( assert ) {
    assert.equal(testcalc(120000, 4000), 30, "Aircraft moment 120,000 / aircraft weight 4,000 gives a CG of 30");
    assert.equal(testcalc(100000, 5000), 20, "Aircraft moment 100,000 / aircraft weight 5,000 gives a CG of 20");
    assert.equal(testcalc(140000, 7000), 20, "Aircraft moment 140,000 / aircraft weight 7,000 gives a CG of 20");
    assert.equal(testcalc(200000, 4000), 50, "Aircraft moment 200,000 / aircraft weight 4,000 gives a CG of 50");
    assert.equal(testcalc(160000, 4000), 40, "Aircraft moment 160,000 / aircraft weight 4,000 gives a CG of 40");
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