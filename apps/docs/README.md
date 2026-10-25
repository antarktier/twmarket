# twmarket 文件站 / Documentation site

## 繁體中文

```sh
npm ci
npm run dev
npm run types:check
npm run build
```

開啟 http://localhost:3000/docs 。文件位於 `content/docs`，靜態輸出位於 `out`。

部署：推送到 `main` 時，`.github/workflows/docs.yml` 會建置並發布到
GitHub Pages（https://cmostw.github.io/twmarket/ ）；PR 只建置不部署。
建置時以 `NEXT_PUBLIC_BASE_PATH`（如 `/twmarket`）設定子路徑，
`NEXT_PUBLIC_SITE_URL` 設定 metadata 的絕對網址；本機開發不需設定。

## English

Run the commands above from this directory. Open http://localhost:3000/docs .
Content lives in `content/docs`; the static build is in `out`.

Pushes to `main` build and deploy the site to GitHub Pages
(https://cmostw.github.io/twmarket/) through `.github/workflows/docs.yml`; pull
requests only build it. `NEXT_PUBLIC_BASE_PATH` (e.g. `/twmarket`) sets the
subpath and `NEXT_PUBLIC_SITE_URL` the absolute URL used in metadata. Neither is
needed for local development.
