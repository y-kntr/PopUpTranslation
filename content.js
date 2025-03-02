document.addEventListener("mouseup", async (event) => {
  console.log("mouseup event detected"); // デバッグ情報を追加
  const selectedText = window.getSelection().toString().trim();
  if (!selectedText) {
    console.log("No text selected"); // デバッグ情報を追加
    return;
  }
    const translation = await translateWithGemini(selectedText);
    showPopup(event.clientX, event.clientY, selectedText, translation);
});


async function translateWithGemini(text) {
  const apiKey = "apiKey"; // 取得したAPIキーを設定
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=` + apiKey;
  const prompt = `次の英単語の日本語訳のみを返してください: ${text}`;

  const requestBody = {
    contents: [{parts: [{ text: prompt }] }],
    generationConfig: {
        temperature: 0.3, // 出力のランダム性を抑える
        maxOutputTokens: 20 // 短い翻訳にする
    }
  };

  try {
    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0]?.content?.parts[0]?.text.trim() || "翻訳エラー";
} catch (error) {
    console.error("翻訳エラー:", error);
    throw error;
}
}


function showPopup(x, y, word, translation) {
  const popup = document.createElement("div");
  popup.innerHTML = `
      <strong>${word}</strong><br>
      日本語: ${translation}<br>
      <button id="save-word">単語帳に登録</button>
  `;
  popup.style.position = "absolute";
  popup.style.top = `${y + window.scrollY + 10}px`; // スクロール位置を考慮
  popup.style.left = `${x + window.scrollX + 10}px`; // スクロール位置を考慮
  popup.style.backgroundColor = "#fff";
  popup.style.border = "1px solid #ddd";
  popup.style.padding = "10px";
  popup.style.boxShadow = "0px 0px 5px rgba(0,0,0,0.2)";
  document.body.appendChild(popup);

  document.getElementById("save-word").addEventListener("click", () => {
      saveWord(word, translation);
      popup.remove();
  });

  setTimeout(() => popup.remove(), 5000);
}
