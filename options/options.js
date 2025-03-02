document.addEventListener("DOMContentLoaded", () => {
    // 設定の読み込み
    browser.storage.local.get({ enableTranslation: true }, (data) => {
        document.getElementById("enableTranslation").checked = data.enableTranslation;
    });

    // 設定の保存
    document.getElementById("save").addEventListener("click", () => {
        const enableTranslation = document.getElementById("enableTranslation").checked;
        browser.storage.local.set({ enableTranslation }, () => {
            alert("設定が保存されました");
        });
    });
});
