// https://www.prisma.io/docs/guides/database/seed-database
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const questionCategoriesData: Prisma.QuestionCategoryCreateInput[] = [
  {
    uuid: "912acaf8-0c64-4b3f-b4ba-edcfae0ef682",
    label: "HTML",
    contents: {
      create: [
        {
          uuid: "h-1",
          text:
            "HTMLのタグの意味を理解してセマンティックなマークアップができる",
        },
        {
          uuid: "h-2",
          text: "data-アトリビュートをいつどういう時に使うか理解している",
        },
        {
          uuid: "h-3",
          text:
            "<script>, <script async>, <script defer> のそれぞれの動きを説明できる",
        },
        {
          uuid: "h-4",
          text:
            "親要素あるいは子要素が限定されるタグを4セット以上列挙できる（<ul> と <li> で1セット）",
        },
        { uuid: "h-5", text: "img タグにおける alt 属性の重要性を説明できる" },
        { uuid: "h-6", text: "form を適切にマークアップできる" },
        {
          uuid: "h-7",
          text:
            "title, description / ogp 関連タグの役割を理解して意味のあるが指定できる",
        },
        {
          uuid: "h-8",
          text:
            "要素の数が変わる・トルツメ・中身が空になるといったパターンを考慮してマークアップできるか",
        },
      ],
    },
  },
  {
    uuid: "618fde2a-574b-4f0c-bcd7-1125b374910d",
    label: "CSS",
    contents: {
      create: [
        {
          uuid: "c-1",
          text:
            "Boxモデルについて説明できる （* { box-sizing: border-box } を指定する理由を説明できる）",
        },
        {
          uuid: "c-2",
          text:
            "状態が変わる（活性/非活性・hover/focus・テキストの長さ・画像のアスペクト比など）ことを考慮したスタイルがつけられる",
        },
        {
          uuid: "c-3",
          text: "要素を親要素の上下左右中央にレイアウトする方法を3つ言える",
        },
        {
          uuid: "c-4",
          text: "reset.css or normalize.css がなんで必要なの？が説明できる",
        },
        {
          uuid: "c-5",
          text:
            "空 div や br タグを使うことなくマークアップできる (margin や position を適切に使える）",
        },
        { uuid: "c-6", text: "flexbox で要素を並べることができる" },
        { uuid: "c-7", text: "クロスブラウザ対応ができる" },
        {
          uuid: "c-8",
          text:
            "div.primary-nav.active > a.link と a#link のどちらが詳細度が高いかわかる",
        },
        {
          uuid: "c-9",
          text: "CSS設計手法（BEM/OOCSS/FLOCSSなど）のどれか一つでも分かる",
        },
        {
          uuid: "c-10",
          text:
            'font-familiy: arial, Segoe UI Symbol, Hiragino Sans, sans-serif"; の指定がある時 MacOS10系で日本語表示にどのフォントが使用されるかわかる',
        },
        {
          uuid: "c-11",
          text: "メディアクエリを使用してレスポンシブなスタイルが組める",
        },
      ],
    },
  },
  {
    uuid: "4d02c205-53bf-4f3e-a400-ab2f64a0f22d",
    label: "OS/CLI",
    contents: {
      create: [
        { uuid: "o-1", text: "PATHを通せる" },
        { uuid: "o-2", text: "環境変数を追加できる" },
        {
          uuid: "o-3",
          text: "任意のディレクトリにプレーンテキストファイルを作成できる",
        },
        { uuid: "o-4", text: "shellを何かしらカスタマイズしたことがある" },
        { uuid: "o-5", text: "任意のファイルのコピーを作成できる" },
        { uuid: "o-6", text: "自作のスクリプトファイルに実行権限を付与できる" },
        {
          uuid: "o-7",
          text: "コマンドラインに表示されるdrwxr-xr-x が何を表しているかわかる",
        },
        { uuid: "o-8", text: "相対パス、絶対パスの違いがわかる" },
        { uuid: "o-9", text: "自分が実行しているコマンドのパスを調べられる" },
        {
          uuid: "o-10",
          text:
            "ローカルサーバーから取得したHTMLに書かれたパスの画像ファイルを自分のPCから見つけられる",
        },
      ],
    },
  },
  {
    uuid: "f2c20291-6253-4b9b-aba2-02efab054305",
    label: "TypeScript",
    contents: {
      create: [
        {
          uuid: "t-1",
          text: "TypeScript で 任意の Object の型を書いたことがある",
        },
        {
          uuid: "t-2",
          text: "TypeScript で 任意の React.FC の Props 型を定義したことがある",
        },
        { uuid: "t-3", text: "TypeScript で 任意の関数に型を付けたことがある" },
        {
          uuid: "t-4",
          text: "TypeScript の Utility Type を使ったことがある，わかる",
        },
        {
          uuid: "t-5",
          text: "TypeScript の Conditional Type を使ったことがある，わかる",
        },
        {
          uuid: "t-6",
          text:
            "@types/react が提供している React.HTMLProps 型 を活用したことがある",
        },
        {
          uuid: "t-7",
          text:
            "TypeScript の interface などを用いて関数にオーバーロード型を定義したことがある",
        },
        {
          uuid: "t-8",
          text:
            "TypeScriptにおけるType Annotation (通常の型付けのこと) と Type Assertion (as のことね) を使い分けることができる",
        },
        {
          uuid: "t-9",
          text: "TypeScript のkeyof, Mapped Typeを使ったことがある",
        },
        {
          uuid: "t-10",
          text: "TypeScript: interface と type alias の使い分けを理解している",
        },
      ],
    },
  },
  {
    uuid: "6aec9eb7-87e5-472e-b1fd-cc5173ff7ad1",
    label: "JavaScript",
    contents: {
      create: [
        { uuid: "j-1", text: "== と === の違いがわかる" },
        {
          uuid: "j-2",
          text: "現行の仕様に追従したJavascriptを意識して書くことができる",
        },
        {
          uuid: "j-3",
          text: "eslintといった静的解析ツールを用いることができる",
        },
        { uuid: "j-4", text: "consoleで実行内容を出力できる" },
        { uuid: "j-5", text: "DOMが何かを理解している" },
        { uuid: "j-6", text: "オブジェクト、配列を作成できる" },
        { uuid: "j-7", text: "イベントを登録できる、削除できる" },
        { uuid: "j-8", text: "MDNのJavascriptドキュメントを参照できる" },
        {
          uuid: "j-9",
          text: "tc39でプロポーザルが出されている機能を参照することができる",
        },
        { uuid: "j-10", text: "破壊的なメソッドとはどんなものか説明できる" },
        {
          uuid: "j-11",
          text:
            "Array.forEach(), Array.map(), Array.filter(), Array.reduce()の違いがそれぞれわかる",
        },
        { uuid: "j-12", text: "Promise.all()をどういう時に使うか説明できる" },
        {
          uuid: "j-13",
          text:
            "Promise.all(), Promise.race(), Promise.allSettled(), Promise.any()の違いがそれぞれわかる",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const q of questionCategoriesData) {
    const questionCategory = await prisma.questionCategory.create({
      data: q,
    });
    console.log(`Created questionCategory with uuid: ${questionCategory.uuid}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
