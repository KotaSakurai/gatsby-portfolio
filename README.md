# Sakurawi Portfolio

Kota Sakuraiのポートフォリオサイトです。Gatsbyを使用して構築されています。

## 🌐 公開URL

**https://www.sakurawi.dev/**

## 🚀 ローカル開発

### 前提条件

- Node.js (v14以上推奨)
- npm または yarn
- vips ライブラリ（画像処理に必要）

### vipsのインストール

```bash
# macOS (Homebrew)
brew install vips
```

### セットアップ

1. **依存関係のインストール**

   ```bash
   npm install
   ```

2. **開発サーバーの起動**

   ```bash
   export NODE_OPTIONS=--openssl-legacy-provider
   npm run develop
   ```

   サイトは `http://localhost:8000` で起動します。

   GraphQLエクスプローラーは `http://localhost:8000/___graphql` でアクセスできます。

3. **本番ビルド**

   ```bash
   export NODE_OPTIONS=--openssl-legacy-provider
   npm run build
   ```

   ビルドされたファイルは `public/` ディレクトリに出力されます。

4. **ビルドしたサイトのプレビュー**

   ```bash
   export NODE_OPTIONS=--openssl-legacy-provider
   npm run serve
   ```

   サイトは `http://localhost:9000` で起動します。

### 便利なコマンド

```bash
# コードフォーマット
npm run format

# キャッシュのクリア
npm run clean
```

## 📁 プロジェクト構成

```
.
├── content/          # ブログ記事のマークダウンファイル
│   └── blog/
│       ├── life/     # Life ページ
│       ├── skills/   # Skills ページ
│       ├── resume/   # Resume ページ
│       └── ...
├── src/              # ソースコード
│   ├── components/   # Reactコンポーネント
│   ├── pages/        # ページコンポーネント
│   ├── templates/    # ページテンプレート
│   └── utils/        # ユーティリティ
├── static/           # 静的ファイル
├── gatsby-config.js  # Gatsby設定ファイル
├── gatsby-node.js    # Gatsby Node API
└── package.json      # 依存関係
```

## 🚢 デプロイ

このサイトは **AWS Amplify** を使用して自動デプロイされています。

### デプロイ方法

1. **変更をコミット**

   ```bash
   git add .
   git commit -m "Update content"
   ```

2. **GitHubにプッシュ**

   ```bash
   git push origin master
   ```

3. **自動デプロイ**

   GitHubにプッシュすると、AWS Amplifyが自動的に以下を実行します：
   - ビルド
   - デプロイ
   - CloudFrontキャッシュの更新

   数分後に https://www.sakurawi.dev/ に変更が反映されます。

### デプロイ先の詳細

- **ホスティング**: AWS Amplify
- **CDN**: Amazon CloudFront
- **ドメイン**: sakurawi.dev (Google Domainsで管理)
- **リポジトリ**: https://github.com/KotaSakurai/gatsby-portfolio

## 🔧 トラブルシューティング

### Node.js v22でビルドエラーが出る場合

Node.js v22では、古いWebpackとの互換性問題があります。以下の環境変数を設定してください：

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

または、`package.json`のスクリプトに追加：

```json
"scripts": {
  "build": "NODE_OPTIONS=--openssl-legacy-provider gatsby build",
  "develop": "NODE_OPTIONS=--openssl-legacy-provider gatsby develop",
  "serve": "NODE_OPTIONS=--openssl-legacy-provider gatsby serve"
}
```

### sharpパッケージのビルドエラー

`vips`ライブラリがインストールされていることを確認してください：

```bash
brew install vips
rm -rf node_modules package-lock.json
npm install
```

## 📝 コンテンツの編集

ブログ記事は `content/blog/` ディレクトリ内のマークダウンファイルで管理されています。

各記事は以下の形式で記述します：

```markdown
---
title: ページタイトル
date: "2025-12-10"
description: "ページの説明"
---

# 見出し

本文...
```

### 画像の追加方法

各ブログ記事のディレクトリに画像ファイルを配置し、マークダウンから相対パスで参照します。

**手順:**

1. **画像ファイルを配置**

   記事と同じディレクトリに画像を配置します：

   ```
   content/blog/life/
   ├── index.md
   └── photo.jpg    ← ここに画像を追加
   ```

2. **マークダウンで参照**

   ```markdown
   ![画像の説明](./photo.jpg)
   ```

**例:**

```markdown
---
title: Life
date: "2025-12-10"
description: "Life values"
---

## 旅行の思い出

![旅行の写真](./travel.jpg)

素晴らしい景色でした！
```

**対応している画像形式:**
- `.jpg` / `.jpeg`
- `.png`
- `.gif`
- `.webp`

**注意:**
- 画像は自動的に最適化されます（gatsby-plugin-sharpによる）
- レスポンシブ対応の画像が自動生成されます
- 相対パス（`./`）を使用してください

## 📄 ライセンス

MIT

## 👤 Author

**Kota Sakurai**

- Website: https://www.sakurawi.dev/
- GitHub: [@KotaSakurai](https://github.com/KotaSakurai)
