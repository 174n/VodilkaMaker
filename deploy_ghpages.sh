git checkout master
git subtree split --prefix dist -b gh-pages
git push -f gh-pages origin:gh-pages
git branch -D gh-pages