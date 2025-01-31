const texts = [
    "Junior Back End Developer",
    "AI Learner",
    "Aspiring Game Developer",
];

// Tunggu hingga DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Loaded");

    const typingTextElement = document.querySelector('.typing-text');
    if (!typingTextElement) {
        console.error("Element '.typing-text' tidak ditemukan!");
        return;
    }

    console.log("Element '.typing-text' ditemukan:", typingTextElement);

    // Variabel untuk animasi
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 85; // Kecepatan mengetik (ms)
    const erasingSpeed = 50; // Kecepatan menghapus (ms)
    const delayBetweenTexts = 1500; // Jeda antar teks (ms)

    // Fungsi mengetik teks
    function typeText() {
        typingTextElement.classList.remove("blink"); // Matikan animasi blink

        if (charIndex < texts[textIndex].length) {
            typingTextElement.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(() => {
                typingTextElement.classList.add("blink"); // Hidupkan animasi blink
                setTimeout(eraseText, delayBetweenTexts);
            }, 100);
        }
    }

    // Fungsi menghapus teks
    function eraseText() {
        typingTextElement.classList.remove("blink"); // Matikan animasi blink

        if (charIndex > 0) {
            typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseText, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % texts.length; // Pindah ke teks berikutnya
            setTimeout(typeText, typingSpeed);
        }
    }

    // Mulai animasi
    setTimeout(typeText, 500);
});

document.getElementById("theme-toggle").addEventListener("click", function () {
  const htmlElement = document.documentElement;
  const isDarkMode = htmlElement.getAttribute("data-bs-theme") === "dark";

  // Toggle antara dark dan light mode
  if (isDarkMode) {
    htmlElement.removeAttribute("data-bs-theme");
  } else {
    htmlElement.setAttribute("data-bs-theme", "dark");
  }
});