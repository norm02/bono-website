import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://bono-website.com");
});

test("ナビゲーションメニューの機能テスト", async ({ page }) => {
  //トップタイトル
  await expect(page.getByText("bono-website")).toBeVisible();

  // ABOUTページへの遷移をテスト
  await page.getByRole("button", { name: "ABOUT" }).click();
  await expect(page.getByText("ABOUT ME")).toBeVisible();

  // ARTICLESページへの遷移をテスト
  await page.getByRole("button", { name: "ARTICLES" }).click();
  await expect(page.getByText("ARTICLES").nth(1)).toBeVisible();

  // ACHIEVEMENTページへの遷移をテスト
  await page.getByRole("button", { name: "ACHIEVEMENT" }).click();
  await expect(page.getByText("ACHIEVEMENT").nth(1)).toBeVisible();
});
test("ABOUT MEセクションの内容確認", async ({ page }) => {
  await page.getByRole("button", { name: "ABOUT" }).click();

  // スキルリストの存在確認
  await expect(page.getByText("得意な言語・フレームワークなど")).toBeVisible();
  await expect(
    page.getByText("JavaScript / Playwright / Cypress / GitHub Actions")
  ).toBeVisible();

  // ソーシャルリンクの存在確認
  const link_X = await page
    .getByRole("link", { name: "X Icon" })
    .getAttribute("href");

  const expectedUrl_X = "https://x.com/bonomodel";
  expect(link_X).toBe(expectedUrl_X);

  const link_hatena = await page
    .getByRole("link", { name: "Hatena Icon" })
    .getAttribute("href");

  const expectedUrl_hatena = "https://bonomodel.hatenablog.com/";
  expect(link_hatena).toBe(expectedUrl_hatena);

  const link_git = await page
    .getByRole("link", { name: "Github Icon" })
    .getAttribute("href");

  const expectedUrl_git = "https://github.com/norm02";
  expect(link_git).toBe(expectedUrl_git);
});
test("Articlesセクションの機能テスト", async ({ page }) => {
  await page.getByRole("button", { name: "ARTICLES" }).click();

  // 初期表示の記事数を確認
  await page.waitForFunction(
    () => document.querySelectorAll(".article-card").length === 8
  );

  const initialArticlesCount = await page.locator(".article-card").count();
  expect(initialArticlesCount).toEqual(8);

  // More Articlesボタンをクリック
  await page.getByRole("link", { name: "More Articles" }).click();

  // All ARTICLESページに遷移
  await expect(page.getByText("All ARTICLES")).toBeVisible();

  // 記事数が増加したことを確認
  const newArticlesCount = await page.locator(".article-card").count();
  expect(newArticlesCount).toBeGreaterThan(initialArticlesCount);

  //下部までスクロール
  function scrollToBottom() {
    return page.evaluate(() =>
      window.scrollTo(0, document.documentElement.scrollHeight)
    );
  }

  scrollToBottom();

  //Back to Home
  await page.getByRole("button", { name: "Back to Home" }).click();

  //Topページへ戻る
  await expect(page.getByText("bono-website")).toBeVisible();
});
test("ACHIEVEMENTセクションの内容確認", async ({ page }) => {
  await page.getByRole("button", { name: "ACHIEVEMENT" }).click();

  const link_1 = await page
    .getByRole("link", { name: "ブラウザアイコン TechTrain" })
    .getAttribute("href");

  const expectedUrl_1 =
    "https://bonomodel.hatenablog.com/entry/2023/07/11/183505";
  expect(link_1).toBe(expectedUrl_1);

  const link_2 = await page
    .getByRole("link", { name: "クラウドアイコン GoogleCloud" })
    .getAttribute("href");

  const expectedUrl_2 =
    "https://www.cloudskillsboost.google/public_profiles/0b6a07a7-e9fb-483a-8321-cc5827e6cb84";
  expect(link_2).toBe(expectedUrl_2);

  const link_3 = await page
    .getByRole("link", { name: "棒グラフアイコン Nishika" })
    .getAttribute("href");

  const expectedUrl_3 =
    "https://competition.nishika.com/users/5owM3njENJObagpd";
  expect(link_3).toBe(expectedUrl_3);

  const link_4 = await page
    .getByRole("link", { name: "モデル開発アイコン SIGNATE" })
    .getAttribute("href");

  const expectedUrl_4 = "https://signate.jp/users/43119";
  expect(link_4).toBe(expectedUrl_4);
});

test("フッターの内容確認", async ({ page }) => {
  await page.getByRole("link", { name: "プライバシーポリシー" }).click();
  await expect(
    page.getByRole("heading", { name: "アクセス解析ツールについて" })
  ).toBeVisible();
});
