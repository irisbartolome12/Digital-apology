function forgive() {
  const response = document.getElementById("response");
  response.classList.remove("hidden");
  response.innerHTML = "Thank you 🥹💖 I promise to do better and take care of your heart.";
}

function more() {
  window.location.href = 'readmore.html';
}

function openEnvelope(num) {
  if (num === 1) {
    window.location.href = 'envelope1.html';
  } else if (num === 2) {
    window.location.href = 'envelope2.html';
  } else if (num === 3) {
    window.location.href = 'envelope3.html';
  }
}