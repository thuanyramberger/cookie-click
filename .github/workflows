name: Build and Deploy

on:
  push:
    branches: [ main ]
  workflow_dispatch:  # lets you run it manually too

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      # Optional: if your project uses Node
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies (if package.json exists)
        run: |
          if [ -f package.json ]; then
            npm ci
          else
            echo "No package.json found, skipping install."
          fi

      - name: Build project (if package.json exists)
        run: |
          if [ -f package.json ]; then
            npm run build
          else
            echo "No build step, using static files."
          fi

      # Decide what to deploy
      - name: Prepare deployment folder
        run: |
          if [ -d dist ]; then
            echo "Using dist/ for deployment."
            cp -r dist ../deploy
          else
            echo "Using project root for deployment."
            mkdir ../deploy
            cp -r . ../deploy
          fi

      - name: Upload site artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ../deploy

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
