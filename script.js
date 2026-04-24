// 🔐 الباسورد
function checkPassword() {
  let pass = document.getElementById("password").value;

  if (pass === "992002") {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";

    document.getElementById("music").play();

    typeMessage();
    startTimer();
  } else {
    alert("😡 ركززززي يام نص لسان انتي بدل ما اجيلك انا بتلكككك");
  }
}

// ✍️ typing effect
let text = " ♥️ انتي احلي حاجه حصلتلي ف حياتي ربنا يخليكي ليا و ميحرمنيش منك ابدا بحبك ";
let i = 0;

function typeMessage() {
  if (i < text.length) {
    document.getElementById("message").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeMessage, 60);
  }
}

// ⏳ العداد
function startTimer() {
  let startDate = new Date("2026-01-05");

  setInterval(() => {
    let now = new Date();
    let diff = now - startDate;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("loveTimer").innerText =
      "The Most beautyful: " + days + " Days ❤️";
  }, 1000);
}

// 🎁 popup
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// 💕 قلوب متحركة في كل الصفحة
function createHearts() {
  const container = document.querySelector(".hearts");

  setInterval(() => {
    let heart = document.createElement("span");
    heart.innerHTML = "R❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  }, 300);
}

createHearts();