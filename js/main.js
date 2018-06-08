$(document).ready( function() {
  
  //VARIABLES --------------------------------------------------------
  let flashcards = [
    { question: 'CONST', answer: 'variable that can not change', showBack: false},
    { question: 'function() replacement', answer: '() =>', showBack: false },
    { question: '**', answer: 'exponentiation operator', showBack: false }
  ]

  let displayCard = $('#displayCard')
  
  displayCard.text(flashcards[0].question) //displays the 1st card
  displayCard.data('index', 0)

  //FUNCTIONS --------------------------------------------------------
  function userEnter() {
    let question = $('#front')[0].value
    let answer = $('#back')[0].value

    let card = { question: question, answer: answer, showBack: false}
    cardAdd(card)
  }
  
  function cardAdd(card){
    flashcards.push(card)
    console.log('card added')
  }
  
  function flipCard(index) {
    
    if (flashcards[index].showBack == true) {
      displayCard.text(flashcards[index].answer)
    } else {
      displayCard.text(flashcards[index].question)
    }
    flashcards[index].showBack = !flashcards[index].showBack
  }

  function nextCard() {
    let index
    if (flashcards.length === displayCard.data().index + 1) {
      index = 0
    } else {
      index = displayCard.data().index + 1
    }

    displayCard.text(flashcards[index].question)
    displayCard.data('index', index)
  }
    
    //LISTENERS --------------------------------------------------------
    $('#addCardButton').on('click', () => {
      userEnter()
    })

    $('#nextCard').on('click', () => {
      nextCard()
    })

    $('#flipCard').on('click', () => {
      index = displayCard.data().index
      flipCard(index)
    })
})
            