npm run build
git checkout master
git add dist -f
git commit -m "Update gh-pages"
git subtree split --prefix dist -b gh-pages
git push -u origin gh-pages -f
git branch -D gh-pages
git reset --hard HEAD~1
