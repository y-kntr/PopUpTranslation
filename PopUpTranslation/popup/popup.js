document.addEventListener("DOMContentLoaded", () => {
  const wordListElement = document.getElementById("wordList");

  browser.storage.local.get({ words: [] }).then((data) => {
      wordListElement.innerHTML = "";  // 初期化
      if (data.words.length === 0) {
          wordListElement.innerHTML = "<li>単語が登録されていません</li>";
      } else {
          data.words.forEach(({ word, translation }) => {
              const listItem = document.createElement("li");
              listItem.textContent = `${word} - ${translation}`;
              wordListElement.appendChild(listItem);
          });
      }
  });
});
