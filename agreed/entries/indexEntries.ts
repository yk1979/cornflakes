import { APIDef, GET, ResponseDef, Success200 } from "@agreed/typed";
import { Questions } from "../types";

type Api = APIDef<
  GET, // HTTP method
  ["entries"], // path
  Record<string, unknown>, // request header
  Record<string, unknown>, // request query
  undefined, // response body
  Record<string, unknown>, // response header
  ResponseDef<Success200, Questions>
>;

export const api: Api = {
  request: {
    // TODO エンドポイントは仮
    path: ["entries"],
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
    body: [
      {
        uuid: "912acaf8-0c64-4b3f-b4ba-edcfae0ef682",
        label: "HTML",
        contents: [
          {
            id: "h-1",
            text:
              "HTMLのタグの意味を理解してセマンティックなマークアップができる",
          },
          {
            id: "h-2",
            text: "data-アトリビュートをいつどういう時に使うか理解している",
          },
          {
            id: "h-3",
            text:
              "<script>, <script async>, <script defer> のそれぞれの動きを説明できる",
          },
          {
            id: "h-4",
            text:
              "親要素あるいは子要素が限定されるタグを4セット以上列挙できる（<ul> と <li> で1セット）",
          },
          { id: "h-5", text: "img タグにおける alt 属性の重要性を説明できる" },
          { id: "h-6", text: "form を適切にマークアップできる" },
          {
            id: "h-7",
            text:
              "title, description / ogp 関連タグの役割を理解して意味のあるが指定できる",
          },
          {
            id: "h-8",
            text:
              "要素の数が変わる・トルツメ・中身が空になるといったパターンを考慮してマークアップできるか",
          },
        ],
      },
      {
        uuid: "618fde2a-574b-4f0c-bcd7-1125b374910d",
        label: "CSS",
        contents: [
          {
            id: "c-1",
            text:
              "Boxモデルについて説明できる （* { box-sizing: border-box } を指定する理由を説明できる）",
          },
          {
            id: "c-2",
            text:
              "状態が変わる（活性/非活性・hover/focus・テキストの長さ・画像のアスペクト比など）ことを考慮したスタイルがつけられる",
          },
          {
            id: "c-3",
            text: "要素を親要素の上下左右中央にレイアウトする方法を3つ言える",
          },
          {
            id: "c-4",
            text: "reset.css or normalize.css がなんで必要なの？が説明できる",
          },
          {
            id: "c-5",
            text:
              "空 div や br タグを使うことなくマークアップできる (margin や position を適切に使える）",
          },
          { id: "c-6", text: "flexbox で要素を並べることができる" },
          { id: "c-7", text: "クロスブラウザ対応ができる" },
          {
            id: "c-8",
            text:
              "div.primary-nav.active > a.link と a#link のどちらが詳細度が高いかわかる",
          },
          {
            id: "c-9",
            text: "CSS設計手法（BEM/OOCSS/FLOCSSなど）のどれか一つでも分かる",
          },
          {
            id: "c-10",
            text:
              'font-familiy: arial, Segoe UI Symbol, Hiragino Sans, sans-serif"; の指定がある時 MacOS10系で日本語表示にどのフォントが使用されるかわかる',
          },
          {
            id: "c-11",
            text: "メディアクエリを使用してレスポンシブなスタイルが組める",
          },
        ],
      },
      {
        uuid: "4d02c205-53bf-4f3e-a400-ab2f64a0f22d",
        label: "OS/CLI",
        contents: [
          { id: "o-1", text: "PATHを通せる" },
          { id: "o-2", text: "環境変数を追加できる" },
          {
            id: "o-3",
            text: "任意のディレクトリにプレーンテキストファイルを作成できる",
          },
          { id: "o-4", text: "shellを何かしらカスタマイズしたことがある" },
          { id: "o-5", text: "任意のファイルのコピーを作成できる" },
          { id: "o-6", text: "自作のスクリプトファイルに実行権限を付与できる" },
          {
            id: "o-7",
            text:
              "コマンドラインに表示されるdrwxr-xr-x が何を表しているかわかる",
          },
          { id: "o-8", text: "相対パス、絶対パスの違いがわかる" },
          { id: "o-9", text: "自分が実行しているコマンドのパスを調べられる" },
          {
            id: "o-10",
            text:
              "ローカルサーバーから取得したHTMLに書かれたパスの画像ファイルを自分のPCから見つけられる",
          },
        ],
      },
      {
        uuid: "f2c20291-6253-4b9b-aba2-02efab054305",
        label: "TypeScript",
        contents: [
          {
            id: "t-1",
            text: "TypeScript で 任意の Object の型を書いたことがある",
          },
          {
            id: "t-2",
            text:
              "TypeScript で 任意の React.FC の Props 型を定義したことがある",
          },
          { id: "t-3", text: "TypeScript で 任意の関数に型を付けたことがある" },
          {
            id: "t-4",
            text: "TypeScript の Utility Type を使ったことがある，わかる",
          },
          {
            id: "t-5",
            text: "TypeScript の Conditional Type を使ったことがある，わかる",
          },
          {
            id: "t-6",
            text:
              "@types/react が提供している React.HTMLProps 型 を活用したことがある",
          },
          {
            id: "t-7",
            text:
              "TypeScript の interface などを用いて関数にオーバーロード型を定義したことがある",
          },
          {
            id: "t-8",
            text:
              "TypeScriptにおけるType Annotation (通常の型付けのこと) と Type Assertion (as のことね) を使い分けることができる",
          },
          {
            id: "t-9",
            text: "TypeScript のkeyof, Mapped Typeを使ったことがある",
          },
          {
            id: "t-10",
            text:
              "TypeScript: interface と type alias の使い分けを理解している",
          },
        ],
      },
      {
        uuid: "6aec9eb7-87e5-472e-b1fd-cc5173ff7ad1",
        label: "JavaScript",
        contents: [
          { id: "j-1", text: "== と === の違いがわかる" },
          {
            id: "j-2",
            text: "現行の仕様に追従したJavascriptを意識して書くことができる",
          },
          {
            id: "j-3",
            text: "eslintといった静的解析ツールを用いることができる",
          },
          { id: "j-4", text: "consoleで実行内容を出力できる" },
          { id: "j-5", text: "DOMが何かを理解している" },
          { id: "j-6", text: "オブジェクト、配列を作成できる" },
          { id: "j-7", text: "イベントを登録できる、削除できる" },
          { id: "j-8", text: "MDNのJavascriptドキュメントを参照できる" },
          {
            id: "j-9",
            text: "tc39でプロポーザルが出されている機能を参照することができる",
          },
          { id: "j-10", text: "破壊的なメソッドとはどんなものか説明できる" },
          {
            id: "j-11",
            text:
              "Array.forEach(), Array.map(), Array.filter(), Array.reduce()の違いがそれぞれわかる",
          },
          { id: "j-12", text: "Promise.all()をどういう時に使うか説明できる" },
          {
            id: "j-13",
            text:
              "Promise.all(), Promise.race(), Promise.allSettled(), Promise.any()の違いがそれぞれわかる",
          },
        ],
      },
    ],
  },
};
