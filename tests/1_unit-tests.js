const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator
suite('Unit Tests', () => {


    // #1
    test('Mangoes are my favorite fruit.', function () {
      assert.equal(translator.translate('Mangoes are my favorite fruit.', 'american-to-british'), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    }) //works as expected
  
    // #2
    test('I ate yogurt for breakfast.', function () {
      assert.equal(translator.translate('I ate yogurt for breakfast.', 'american-to-british'), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    }) //works as expected
  
    // #3
    test('We had a party at my friend\'s condo.', function () {
      assert.equal(translator.translate('We had a party at my friend\'s condo.', 'american-to-british'), 'We had a party at my friend\'s <span class="highlight">flat</span>.');
    })
  
    // #4
    test('Can you toss this in the trashcan for me?', function () {
    assert.equal(translator.translate('Can you toss this in the trashcan for me?', 'american-to-british'), 'Can you toss this in the <span class="highlight">bin</span> for me?');
    }) //works as expected
  
    // #5
    test('The parking lot was full.', function () {
      assert.equal(translator.translate('The parking lot was full.', 'american-to-british'), 'The <span class="highlight">car park</span> was full.');
    })
  
    // #6
    test('Like a high tech Rube Goldberg machine.', function () {
      assert.equal(translator.translate('Like a high tech Rube Goldberg machine.', 'american-to-british'), undefined);
    })
  
    // #7
    test('To play hooky means to skip class or work.', function () {
      assert.equal(translator.translate('To play hooky means to skip class or work.', 'american-to-british'), 'To <span class="highlight">bunk off</span> means to skip class or work.');
    })
  
    // #8
    test('No Mr. Bond, I expect you to die.', function () {
      assert.equal(translator.translate('No Mr. Bond, I expect you to die.', 'american-to-british'), 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    })
  
    // #9
    test('Dr. Grosh will see you now.', function () {
      assert.equal(translator.translate('Dr. Grosh will see you now.', 'american-to-british'), '<span class="highlight">Dr</span> Grosh will see you now.');
    })
  
    // #10
    test('Lunch is at 12:15 today.', function () {
      assert.equal(translator.translate('Lunch is at 12:15 today.', 'american-to-british'), 'Lunch is at <span class="highlight">12.15</span> today.');
    })
  
    // #11
    test('We watched the footie match for a while.', function () {
      assert.equal(translator.translate('We watched the footie match for a while.', 'british-to-american'), 'We watched the <span class="highlight">soccer</span> match for a while.');
    })
  
  
    // #13
    test('Paracetamol takes up to an hour to work.', function () {
      assert.equal(translator.translate('Paracetamol takes up to an hour to work.', 'british-to-american'), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    })
  
    // #14
    test('First, caramelise the onions.', function () {
      assert.equal(translator.translate('First, caramelise the onions.', 'british-to-american'), 'First, <span class="highlight">caramelize</span> the onions.');
    })
  
    // #15
    test('#I spent the bank holiday at the funfair.', function () {
      assert.equal(translator.translate('I spent the bank holiday at the funfair.', 'british-to-american'), 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    })
  
    // #16
    test('I had a bicky then went to the chippy.', function () {
      assert.equal(translator.translate('I had a bicky then went to the chippy.', 'british-to-american'), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
    })
  
    // #17
    test('I\'ve just got bits and bobs in my bum bag.', function () {
      assert.equal(translator.translate('I\'ve just got bits and bobs in my bum bag.', 'british-to-american'), 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    })
  
    // #18
    test('The car boot sale at Boxted Airfield was called off.', function () {
      assert.equal(translator.translate('The car boot sale at Boxted Airfield was called off.', 'british-to-american'), 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    })
  
    // #19
    test('Have you met Mrs Kalyani?', function () {
      assert.equal(translator.translate('Have you met Mrs Kalyani?', 'british-to-american'), 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    })
  
    // #20
    test('Prof Joyner of King\'s College, London.', function () {
      assert.equal(translator.translate('Prof Joyner of King\'s College, London.', 'british-to-american'), '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
    })
  
    // #21
    test('Tea time is usually around 4 or 4.30.', function () {
      assert.equal(translator.translate('Tea time is usually around 4 or 4.30.', 'british-to-american'), 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
    })
  //to complete
    // #22
    test('Mangoes are my favorite fruit.', function () {
      assert.equal(translator.translate('Mangoes are my favorite fruit.', 'american-to-british'), 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    })
  
    // #23
    test('I ate yogurt for breakfast.', function () {
      assert.equal(translator.translate('I ate yogurt for breakfast.', 'american-to-british'), 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    })
  
    // #24
    test('We watched the footie match for a while.', function () {
      assert.equal(translator.translate('We watched the footie match for a while.', 'british-to-american'), 'We watched the <span class="highlight">soccer</span> match for a while.');
    })

      // #25
    test('Paracetamol takes up to an hour to work.', function () {
      assert.equal(translator.translate('Paracetamol takes up to an hour to work.', 'british-to-american'), '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    })
  
  
});
