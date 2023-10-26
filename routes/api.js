'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {

      console.log(req.body.text, req.body.locale)
      var text = req.body.text
      var locale = req.body.locale
      console.log(locale)

      if (text == '') {
        res.send({ error: 'No text to translate' })
      }  else if (!text || !locale)  {
        res.send({ error: 'Required field(s) missing' })
      } else if (locale != 'american-to-british' && locale != 'british-to-american')  {
        res.send({ error: 'Invalid value for locale field' })
      }  else  {
      
      var translation = translator.translate(text, locale)
        console.log(translation, 'translation')

      if (translation == undefined)  {
        translation = "Everything looks good to me!"
      }
      console.log(translation)
      res.send({ text: text, translation: translation })

        }
    });
};
