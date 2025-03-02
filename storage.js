function saveWord(word, translation) {
    browser.storage.local.get({ words: [] }).then((data) => {
        const wordList = data.words;
        wordList.push({ word, translation });
        browser.storage.local.set({ words: wordList });
    });
}

function getSavedWords(callback) {
    browser.storage.local.get({ words: [] }, (data) => {
        callback(data.words);
    });
}
