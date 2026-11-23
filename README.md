# Meu Manipulado Preview

Prévia estática da Home. O catálogo, as avaliações, os descontos, os favoritos e o carrinho são demonstrativos. A fonte Poppins e as imagens são servidas junto com a página.

## Validar localmente

Com Node.js 24, execute na raiz:

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd test
npm.cmd start
```

Abra [a Home local](http://localhost:4200/meu-manipulado-preview/). O build de produção usa `/meu-manipulado-preview/` como base e gera os arquivos publicáveis em `dist/loja/browser/`. Para testar ou hospedar o build, sirva essa pasta montada no mesmo subdiretório.

## Primeira publicação após aprovação do PO

1. Crie no GitHub um repositório **público** chamado `meu-manipulado-preview` para usar GitHub Pages no plano gratuito. Crie-o vazio, sem README, licença ou gitignore.
2. Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**. Se o GitHub exibir essa opção somente após a primeira publicação da branch, selecione-a assim que a branch existir. Se a primeira execução do workflow tiver falhado por falta dessa configuração, use **Actions → Re-run jobs**.
3. Na raiz deste repositório local, substitua `USUARIO` pelo proprietário autorizado e execute:

   ```powershell
   git add .github .gitignore README.md angular.json package.json package-lock.json tsconfig.json tsconfig.app.json tsconfig.spec.json src public
   git commit -m "Preparar preview estático do Meu Manipulado"
   git remote add origin https://github.com/USUARIO/meu-manipulado-preview.git
   git push -u origin main
   ```

4. Acompanhe **Actions → Publicar Home no GitHub Pages**. O endereço será `https://USUARIO.github.io/meu-manipulado-preview/`.

## Atualizar a prévia

Altere os arquivos deste repositório, valide com `npm.cmd ci`, `npm.cmd run build` e `npm.cmd test`, revise as alterações e envie o commit para `main` após aprovação. O workflow gera um novo artefato estático a cada push para `main`.
