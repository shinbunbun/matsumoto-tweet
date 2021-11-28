# まつもとせんぱーい

<iframe class="speakerdeck-iframe" frameborder="0" src="https://speakerdeck.com/player/030e4618e2054809be6300a54087ed5e" title="「まつもとせんぱーい」を自動化してみた" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 560px; height: 314px;" data-ratio="1.78343949044586"></iframe>

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
