#!/bin/bash

file=($1)
newfile=($2)

echo "🗜️ Optimizing SVG..."
svgo $file

echo "🧢 Adding frontmatter..."
echo -e "---\n\n---\n" > $newfile

echo "🫀 Adding SVG..."
cat $file | snang -P "split('><') | join('>\n<')" >> $newfile

echo "🧹 Prettifying..."
prettier --plugin=prettier-plugin-astro $newfile --write
