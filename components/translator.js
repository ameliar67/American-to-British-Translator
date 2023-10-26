const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
 translate(text, locale) {

  const americanOnlyKeys = Object.keys(americanOnly);
  const americanToBritishSpellingKeys = Object.keys(americanToBritishSpelling);
  const americanToBritishTitlesKeys = Object.keys(americanToBritishTitles);
  const britishOnlyKeys = Object.keys(britishOnly);

  var i;

   var original_text = text

   //for american-to-british translation 
  if (locale == 'american-to-british')  {

    if (text.match(/[0-9]+.[0-9][0-9]/))  {
      var highlight = text.match(/[0-9]+.[0-9][0-9]/)
      highlight = highlight[0]
      highlight = highlight.replace(":", ".")
      highlight = `<span class="highlight">${highlight}</span>`
      
      var to_replace = text.match(/[0-9]+.[0-9][0-9]/)
      to_replace = to_replace[0]
      text = text.replace(to_replace, highlight)
    }
    
    //for americanOnlyKeys
  
    for (i = 0; i < americanOnlyKeys.length; i++)  {

      var re = new RegExp(americanOnlyKeys[i] + "(" + "?" + "!" + "[^ ]" + "." + ")", "i");
 
      if(text.match(re))  {

        var word_to_replace_with = americanOnlyKeys[i]
        var array = text.match(americanOnlyKeys[i])
        text = text.replace(array, `<span class="highlight">${americanOnly[word_to_replace_with]}</span>`)

      }
        
      }
    

    //for americanToBritishSpellingKeys 

      for (i = 0; i < americanToBritishSpellingKeys.length; i++)  {

      var re = new RegExp(americanToBritishSpellingKeys[i] + "(" + "?" + "!" + "[^ ]" + ")", "i");

        if(text.match(re))  {
        var word_to_replace_with = americanToBritishSpelling[americanToBritishSpellingKeys[i]]
    
        var array = text.match(re)

        text = text.replace(array, `<span class="highlight">${word_to_replace_with}</span>`)

      }
        
      }

    

     //for americanToBritishTitlesKeys

        
      for (i = 0; i < americanToBritishTitlesKeys.length; i++)  {

         var match_against = new RegExp([americanToBritishTitlesKeys[i]] + "(" + "?" + "!" + "[^ .]" + ")", "i");

      if(text.match(match_against))  {


        var hello = text.match(match_against)[0]
        
        var word_to_replace_with = hello.replace(".", "")
        
        var array = text.match(match_against)
        
        text = text.replace(array, `<span class="highlight">${word_to_replace_with}</span>`)

       
      }
      }
        if( original_text == text)  {
          return undefined
        }else  {
        return text
        }
      
        
      
  }  else  {
   //for british-to-american translation


    if (text.match(/[0-9]+.[0-9][0-9]/))  {

      var highlight = text.match(/[0-9]+.[0-9][0-9]/)

      highlight = highlight[0]
      highlight = highlight.replace(".", ":")
      highlight = `<span class="highlight">${highlight}</span>`

      var to_replace = text.match(/[0-9]+.[0-9][0-9]/)
      to_replace = to_replace[0]
      text = text.replace(to_replace, highlight)
    }

    for (i = 0; i < britishOnlyKeys.length; i++)  {

      var re = new RegExp(britishOnlyKeys[i] + "(" + "?" + "!" + "[^ ]" + "." + ")", "i");

      if(text.match(re))  {
        var word_to_replace_with = `<span class="highlight">${britishOnly[britishOnlyKeys[i]]}</span>`
        var array = text.match(re)
        
        text = text.replace(array, word_to_replace_with)
       
      }
      }
    
    //for britishToAmericanSpellingKeys 

    for (i = 0; i < americanToBritishSpellingKeys.length; i++)  {

    var re = new RegExp(americanToBritishSpelling[americanToBritishSpellingKeys[i]] + "(" + "?" + "!" + "[^ ]" + ")", "i");
      
    if(text.match(re))  {

        var word_to_replace_with = `<span class="highlight">${americanToBritishSpellingKeys[i]}</span>`
        var array = text.match(re)
        text = text.replace(array, word_to_replace_with)

      }
        
      }

    //for britishToAmericanTitlesKeys

  var length = americanToBritishTitlesKeys.length - 1

  for (i = length; i >= 0; i--)  {

   var match_against = new RegExp(americanToBritishTitles[americanToBritishTitlesKeys[i]] + "(" + "?" + "!" + "[^ ]" + ")", "i");
    
    if(text.match(match_against))  {

        var word_to_replace_with = `<span class="highlight">${text.match(match_against) + "."}</span>`
      
        var array = text.match(match_against)

        text = text.replace(array, word_to_replace_with)

      }
        
      }
      if (original_text == text)  {
          return undefined
        } else  {
        return text
        }
    }


   
  }
}

module.exports = Translator;