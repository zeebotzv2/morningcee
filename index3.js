"use strict";

(function () {
  function t() {
    const textContent = "Pagi Gracee :3 good Morning broo jgn lupa mandi biar tetap cantii (eh engga deh ga mandi juga tetap cantii) semngat hari ini yaaa, baik di gereja ,dimanapun , dan jgn pernah anggap dirimu jelek krna kamu itu ga jelek tpi cantikk,suaranya baguss,imut,canti bgt,baik hatii,duh apa lgi yaa wkwk, intinya selamat pagiii gracee:3, maaf kalau ga cantii cantii karna yangg cantii itu kamuuu wheheheh "
    const textElement = document.createElement("div");
    textElement.style.position = "absolute";
    textElement.style.top = "50%";
    textElement.style.left = "50%";
    textElement.style.transform = "translate(-50%, -50%)";
    textElement.style.color = "#fff";
    textElement.style.fontSize = "24px"; // Font lebih kecil
    textElement.style.fontFamily = "Arial, sans-serif";
    textElement.style.textAlign = "center";
    textElement.style.pointerEvents = "none";
    textElement.style.whiteSpace = "pre-wrap"; // Memastikan teks tidak meluber
    textElement.style.lineHeight = "1.6";
    document.body.appendChild(textElement);

    // Fungsi untuk animasi huruf per huruf
    function animateText(text, element) {
      let index = 0;

      function showNextLetter() {
        if (index < text.length) {
          element.innerHTML += text[index];
          index++;
          setTimeout(showNextLetter, 50); // Interval antar huruf (50ms)
        }
      }

      showNextLetter();
    }

    // Memulai animasi
    animateText(textContent, textElement);
  }

  t();
})();
