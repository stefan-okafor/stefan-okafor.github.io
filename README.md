# Ifeanyi Stefan Okafor — IT & Network Systems Portfolio

A fast, responsive, accessible personal portfolio built with plain HTML, CSS, and JavaScript. No frameworks, build tools, monthly subscriptions, or hosting fees are required.

## What's inside

- `index.html` — all portfolio content and metadata
- `styles.css` — full responsive design with dark/light modes
- `script.js` — navigation, live demo interactions, project filters, theme preferences, and email copying
- `assets/favicon.svg` — custom brand icon
- `assets/Ifeanyi_Stefan_Okafor_Resume.pdf` — résumé download
- `.nojekyll` — GitHub Pages compatibility

## Quick preview

Double-click `index.html` to open the portfolio in your browser. Everything works without a server, except that clipboard copying may redirect to email if your browser blocks clipboard access on local files.

## Publish for free on GitHub Pages

**Recommended portfolio address:** `https://fisco-x.github.io/` (available after publication, assuming your GitHub username is `FISCO-x`).

1. Sign in to GitHub at https://github.com.
2. Create a **public** repository named `fisco-x.github.io` (use your GitHub username in **lowercase**, followed by `.github.io`).
3. Upload the **contents of this folder** directly into the repository root. Important: `index.html` must be at the root, not inside another folder.
4. Commit the files to the `main` branch.
5. In your repository, select **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/(root)**; click **Save**.
7. After GitHub Pages finishes publishing, visit `https://fisco-x.github.io/`.

If you instead create a repository named `portfolio`, its URL will usually be `https://fisco-x.github.io/portfolio/`. All asset paths in this project are relative, so that works too.

GitHub Pages may take a little while to publish or update. Check **Settings → Pages** if you see a 404 immediately after uploading.

Official setup documentation: https://docs.github.com/en/pages/quickstart

## Customize

- Text and experience → edit `index.html`
- Accent color → edit `--mint` and `--mint-bright` in `styles.css`
- Project descriptions → change cards in `index.html`
- Résumé → replace `assets/Ifeanyi_Stefan_Okafor_Resume.pdf` with your updated file
- Email and social links → search for `iokafor569@gmail.com`, `FISCO-x`, and `ifeanyi-stefan-okafor` in `index.html` and `script.js`

## Grounding & privacy

Experience, skills, education, and project descriptions were adapted from the résumé supplied by Ifeanyi, with no fabricated employers, certifications, measured uptime, or published project URLs.

The network-visualization widget is intentionally marked **DEMO · NOT LIVE DATA**. It is illustrative and does not disclose employer infrastructure or represent live organizational systems.

Publishing the included résumé will make the phone number, email address, and work history in it publicly accessible. Remove the résumé file and adjust the download links if you prefer to keep those details private.

## Features

- Responsive design across mobile, tablet and desktop
- Accessible keyboard navigation and reduced-motion support
- Light and dark theme saved in localStorage
- Interactive conceptual network diagram
- Security / automation project filters
- No external API keys, paid libraries, accounts, or tracking scripts

Built as a portable static site for easy hosting and editing.
