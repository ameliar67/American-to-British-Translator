const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  //Translation with text and locale fields: POST request to /api/translate
test('POST /api/translate with text and locale fields', function(done){
     chai.request(server)
      .post('/api/translate')
      .send({text: 'Paracetamol takes up to an hour to work.', locale: "british-to-american"})
      .end(function(err, res){
        assert.equal(res.status, 200);
        assert.isObject(res.body, 'response should be an object');
        assert.equal(res.body.text, "Paracetamol takes up to an hour to work.")
        assert.equal(res.body.translation, "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
      })  
      done()
  });

   //Translation with text and invalid locale field: POST request to /api/translate
test('post /api/translate with text and invalid locale field', function(done)  {
  chai.request(server)
  .post('/api/translate') 
  .send({text: 'Paracetamol takes up to an hour to work.', locale: "bananas"})
  .end(function(err, res)  {
    assert.equal(res.status, 200);
    assert.isObject(res.body, 'response should be an object');
    assert.equal(res.body.error, 'Invalid value for locale field')

    })
  done();
  })


//  Translation with missing text field: POST request to /api/translate
  test('post /api/translate with missing text field', function(done)  {
    chai.request(server)
    .post('/api/translate')
    .send({text: "", locale: "american-to-british"})
    .end(function(err, res)  {
      assert.equal(res.status, 200);
      assert.isObject(res.body, 'response should be an object');
      assert.equal(res.body.error, "No text to translate")
    })
    done();
  })

//  Translation with missing locale field: POST request to /api/translate
  test('post /api/translate with missing locale field', function(done)  {
    chai.request(server)
    .post('/api/translate')
    .send({text: "hi there", locale: ""})
    .end(function(err, res)  {
      assert.equal(res.status, 200);
      assert.isObject(res.body, 'response should be an object');
      assert.equal(res.body.error, "Required field(s) missing")
    })
    done();
  })

// Translation with empty text: POST request to /api/translate
  test('post /api/translate with empty text', function(done)  {
    chai.request(server)
    .post('/api/translate')
    .send({text: "", locale: "american-to-british"})
    .end(function(err, res)  {
      assert.equal(res.status, 200);
      assert.isObject(res.body, 'response should be an object');
      assert.equal(res.body.error, "No text to translate")

    })
    done();
  })

// Translation with text that needs no translation: POST request to /api/translate
  test('post /api/translate with text that doesn\'t need translation', function(done)  {
    chai.request(server)
    .post('/api/translate')
    .send({text: "hi there", locale: "american-to-british"})
    .end(function(err, res)  {
      assert.equal(res.status, 200)
      assert.isObject(res.body, 'response should be an object');
      assert.equal(res.body.text, "hi there")
    })
    done();
  })
  after(function() {
        chai.request(server).get('/api')
  });
});
