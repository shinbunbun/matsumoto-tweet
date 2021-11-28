# まつもとせんぱーい

## 使い方

1. serverless frameworkをインストールして自分のAWSアカウントでログインする
2. Twitter Developerに登録してConsumer KeysのAPI Key and Secret、Authentication TokensのAccess Token and Secretを取得する。
3. プロジェクト直下に`env.yml`を作成して、以下のように環境変数を記述する

```yml
TWITTER_ACCESS_TOKEN: XXX
TWITTER_ACCESS_SECRET: XXX
TWITTER_CONSUMER_KEY: XXX
TWITTER_CONSUMER_SECRET: XXX
```

4. `sls deploy`を実行してdeployする
5. APIエンドポイントが発行されるのでGETリクエストを送る
6. 「まつもとせんぱーい」
