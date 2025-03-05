# 0.機能
## 0-1.翻訳機能
ブラウザ上で任意の単語や文章を選択orダブルクリックすると日本語訳が記載されたポップアップを表示する。
## 0-2.単語帳機能
（未実装）ブラウザのストレージに選択した単語をストアする
## 0-3.他サービスとの接続
（未実装）

# 1.導入準備(ブラウザ共通)
## 1-1.資材をローカルにダウンロードする
拡張機能を任意の場所に保存
## 1-2.Gemini APIキーをGoogle AI for Developersのページで取得する（無料）
モデル：gemini-2.0-flash\
[Google AI for Developers](https://ai.google.dev/)
## 1-3.資材にAPIキーを埋め込む
PopUpTranslation\content.js　line14

# 2.導入の仕方(Firefox)
## ローカルに一時的に導入する
・Firefoのリモートデバッグ画面（about:debugging#/runtime/this-firefox）を開く\
・「一時的なアドオンを読み込む」をクリックする\
・インストールした資材直下の PopUpTranslation\manifest.json を選択する

# 2.導入の仕方(Chrome)
## ローカルに一時的に導入する
・GoogleChromeを起動して右上の・が3つ並んでるボタンをクリックすると各種メニューが表示されるので、ここから\
　「拡張機能」→「拡張機能を管理」\
　を選択\
・右上のデベロッパーモードをオンにする\
・左上に出てくる「パッケージ化されていない拡張機能を読み込む」を選択する\
・PopUpTranslationフォルダを選択する
