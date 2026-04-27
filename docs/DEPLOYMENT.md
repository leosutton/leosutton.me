# Deployment plan for leosutton.me

## Status

The site is built, tested, and committed locally. It is ready to push to GitHub once GitHub authentication is configured for this machine.

## Recommended GitHub setup

1. Create a GitHub repository named `leosutton.me`.
2. Keep it private if you want the source private, or public if you want free GitHub Pages without private-repo restrictions.
3. Push this local repository to GitHub.
4. In GitHub repository settings, enable **Pages** with **Source: GitHub Actions**.
5. The included workflow `.github/workflows/deploy.yml` will build and deploy on every push to `main`.

GitHub Pages custom-domain documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Domain

The custom domain is already declared in:

```text
public/CNAME
```

with:

```text
leosutton.me
```

After GitHub Pages is enabled, configure the DNS records for `leosutton.me` according to GitHub's current Pages documentation and verify the domain inside GitHub settings.

## Local verification

```bash
npm test
npm run build
```

Both commands passed locally before the initial commit.
