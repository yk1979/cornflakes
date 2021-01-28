import { APIDef, GET, ResponseDef, Success200 } from "@agreed/typed";
import { SkillData } from "../types";

type Api = APIDef<
  GET, // HTTP method
  [":id"], // path
  Record<string, unknown>, // request header
  Record<string, unknown>, // request query
  undefined, // response body
  Record<string, unknown>, // response header
  ResponseDef<Success200, SkillData>
>;

export const api: Api = {
  request: {
    // TODO エンドポイントは仮
    path: [":id"],
    method: "GET",
    body: undefined,
    values: {
      id: "pchan",
    },
  },
  response: {
    status: 200,
    headers: {
      "x-csrf-token": "csrf-token",
    },
    body: {
      name: "pchan",
      skills: [
        {
          category: "HTML/CSS",
          summary: 100,
          detail: [
            { text: "規約に従ってデザインデータを正しく再現できる", score: 1 },
            { text: "コーディング規約を作ることができる", score: 1 },
            {
              text:
                "Lighthouseの結果を見て適切にマークアップの問題点を改善できる",
              score: 1,
            },
            {
              text:
                "DOM王（※必要最低限のDOMでデザイン通りのマークアップができる人）になれる",
              score: 1,
            },
            { text: "レスポンシブなマークアップができる", score: 1 },
            { text: "クロスブラウザ対応ができる", score: 1 },
          ],
        },
        {
          category: "JS/TS",
          summary: 90,
          detail: [
            {
              text: "Object や Array を活用してデータを表現したり操作できる",
              score: 1,
            },
            {
              text:
                "String.prototype.includes Array.prototype.reduce RegExp.prototype.test などの基本的なメソッドを使える",
              score: 1,
            },
            {
              text:
                "tc39 proposal で ディスカッションされている実験的なシンタックスがあることをしっている",
              score: 1,
            },
            {
              text:
                "document.querySelector や document.createElement など DOM に関する関数を使える",
              score: 1,
            },
            {
              text:
                "devtools を活用して 時間のかかっている関数 や 呼び出し頻度の高い関数を見つけることができる",
              score: 1,
            },
            {
              text: ".tsconfigの内容を理解し、自分で書くことができる",
              score: 0,
            },
            { text: "strict modeでTypeScriptが書ける", score: 1 },
            {
              text: "TypeScript で 外部ライブラリに型を付けることができる",
              score: 0,
            },
            {
              text:
                "外部ライブラリを用いたTypeScriptが書ける（ex. ReactやStyled Components等を組み合わせて使えるか）",
              score: 1,
            },
            {
              text:
                "service workerを使ってオフラインでもキャッシュを用いてページをユーザーに見せることができる",
              score: 0,
            },
          ],
        },
        {
          category: "React",
          summary: 91,
          detail: [
            {
              text:
                "React をつかって 任意の Presentational Component を実装できる",
              score: 1,
            },
            { text: "BFFのserviceを書いたことがある", score: 1 },
            { text: "Next.jsでページを追加できる", score: 1 },
            {
              text: "agreed-typed で新しいレスポンスを追加したことがある",
              score: 1,
            },
            {
              text:
                "ロードバランサーからのヘルスチェックをどのように行っているか知っている ",
              score: 0,
            },
            { text: "next.config.jsでwebpackの設定を修正できる", score: 0 },
            {
              text:
                "Express の middleware を作ることができる （作ったことがある）",
              score: 0,
            },
            {
              text:
                "Express の Error Middleware を作ることができる （作ったことがある）",
              score: 0,
            },
            {
              text: "styled-componentsでコンポーネントをスタイリングできる",
              score: 1,
            },
            {
              text:
                "getInitialPropsでserviceを呼び出して、受け取ったデータを適切にページに渡すことができる",
              score: 1,
            },
            {
              text: "_app.tsxと_document.tsxのそれぞれの役割を説明できる",
              score: 0,
            },
          ],
        },
        {
          category: "Node.js",
          summary: 83,
          detail: [
            {
              text: "npm を活用して サードパーティのライブラリを利用できる",
              score: 1,
            },
            { text: "npm scripts を自分で追加できる", score: 1 },
            {
              text:
                "npm / yarn を活用して outdated なモジュールを調べることができる",
              score: 1,
            },
            {
              text: "outdated な モジュールを調べた上で 更新したことがある",
              score: 1,
            },
            {
              text:
                "node modules配下のライブラリを参照してトラブルシューティングができる",
              score: 0,
            },
            {
              text: "npm publishできる（その際先輩の顔を全世界公開しない）",
              score: 0,
            },
          ],
        },
        {
          category: "AMP",
          summary: 100,
          detail: [
            { text: "amp validなコードが書ける", score: 1 },
            {
              text: "amp component を利用してコンポーネントが実装できる",
              score: 1,
            },
            {
              text:
                "amp component のもつデフォルトのスタイルを上書きしてデザインを再現できる",
              score: 1,
            },
            { text: "amp-stateを使って動的な処理を実装できる", score: 1 },
            { text: "amp component に型付けができる", score: 0 },
            {
              text: "amp valid なコードを書くことによる恩恵を説明できる",
              score: 0,
            },
          ],
        },
        {
          category: "CI/CD",
          summary: 75,
          detail: [
            { text: "CI /CDのタスクの内容を書き換えたことがある", score: 0 },
            {
              text:
                "CI /CDに新規のdocker imageを使ったタスクを追加することができる",
              score: 0,
            },
            {
              text:
                "CI /CDがfailした時に、原因を突き止めて解決することができる",
              score: 0,
            },
            {
              text:
                "reg-suitによるVRT結果を確認して必要な修正を行うことができる",
              score: 1,
            },
          ],
        },
        {
          category: "Test",
          summary: 100,
          detail: [
            {
              text:
                "Jest を使って utils 関数など なにかしらのテストコードを書いたことがある",
              score: 1,
            },
            { text: "coverageを見ることができる", score: 1 },
            {
              text:
                "必要なパターンを全て網羅してStorybookに追加することができる",
              score: 1,
            },
          ],
        },
        {
          category: "Backend",
          summary: 60,
          detail: [
            {
              text: "バックエンド側のRuby on Railsを書き換えたことがある",
              score: 0,
            },
            {
              text:
                "GAE（Go言語）を使ったツールもしくはサービスを書き換えることができる",
              score: 0,
            },
            {
              text:
                "APIをコールして必要な情報が正しく返ってきているか確認できる",
              score: 1,
            },
            {
              text: "cosme-apiを手元で実行してローカルでBFFと接続できる",
              score: 0,
            },
            { text: "cosmeのmySQLにSQLを発行できる", score: 0 },
          ],
        },
        {
          category: "GCP",
          summary: 60,
          detail: [
            {
              text: "GCPコンソールで任意のPJのログを見ることができる",
              score: 1,
            },
            {
              text:
                "cosme-webのk8sコンテナの最新のリビジョンが起動しているか確認できる",
              score: 0,
            },
            {
              text: "任意のGCSバケットの中身をダウンロード/アップロードできる",
              score: 0,
            },
            { text: "k8sコンテナのyamlを適切に修正できる", score: 0 },
            { text: "cloudCDNのキャッシュを手動でパージできる", score: 0 },
          ],
        },
        {
          category: "SEO",
          summary: 100,
          detail: [
            { text: "amp-gtmで、GoogleAnalyticsに情報を送信できる", score: 0 },
            {
              text: "amp-analyticsでadobe-analyticsに情報を送信できる",
              score: 0,
            },
            {
              text: "送信されたログ情報をGAもしくはAAコンソール上で確認できる",
              score: 1,
            },
            {
              text: "lighthouseの結果を見て、SEOの点数を上げることができる",
              score: 1,
            },
            { text: "SearchConsoleの情報を見て必要な修正ができる", score: 1 },
          ],
        },
      ],
    },
  },
};
