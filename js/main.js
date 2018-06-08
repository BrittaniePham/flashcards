$(document).ready( function() {
  
  //VARIABLES --------------------------------------------------------
  var flashcards = [
    { question: 'CONST', answer: 'variable that can not change' },
    { question: 'function() replacement', answer: '() =>' },
    { question: '**', answer: 'exponentiation operator' }
  ]
  
  $('#displayCard').text(flashcards[0].question) //displays the 1st card

  //FUNCTIONS --------------------------------------------------------
  function userEnter() {
    var question = $('#front')[0].value
    var answer = $('#back')[0].value

    var card = { question: question, answer: answer }
    cardAdd(card)
  }
  
  function cardAdd(card){
    flashcards.push(card)
    console.log('card added')
  }
  
  function flipCard(front, back) {

  }
    
    
    //LISTENERS --------------------------------------------------------
    $('#addCardButton').on('click', function() {
      userEnter()
    })

    $('#flipCard').on('click', function () {
      if ($('#displayCard').text() == question) {
        $('#displayCard').text(answer)
      } else {
        $('#displayCard').text(question)
      }
    })
})
            