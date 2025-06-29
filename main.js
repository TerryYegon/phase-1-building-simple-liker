// Defining text characters for the empty and full hearts for you to use later.
//------------------------------------------------------------------------------
// Constants for heart characters and selecting modal/error box
//------------------------------------------------------------------------------
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
const modal = document.getElementById('modal');
modal.classList.add('hidden'); // Hide modal on initial load

//------------------------------------------------------------------------------
// Function to handle heart clicks
//------------------------------------------------------------------------------
document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch((error) => {
        modal.classList.remove('hidden');
        const errorMessage = document.getElementById('modal-message');
        errorMessage.textContent = error;
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000);
      });
  });
});

//------------------------------------------------------------------------------
// Provided function to mock a server call (do not modify)
//------------------------------------------------------------------------------
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
