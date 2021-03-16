# 実行手順

1. `.env.sample`をコピーして`.env.local`にリネーム
1. [こちら](https://docs.github.com/ja/github/authenticating-to-github/creating-a-personal-access-token)を参考にGitHubのパーソナルアクセストークンを取得し、`.env.local`に設定  
  (トークンのスコープもこの記事通りでOK)
    ```.env.local
    NEXT_PUBLIC_GITHUB_PERSONAL_ACCESSTOKEN=<取得したトークン>
    ```
1. パッケージインストール・アプリ実行
    ```bash
    yarn install
    yarn dev
    ```
1. http://localhost:3000/ にアクセス