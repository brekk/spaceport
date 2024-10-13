#!/bin/bash

file=($1)
newfile=($2)

echo "🗜️ Optimizing SVG..."
svgo $file

echo "🧢 Adding frontmatter..."
echo -e "---\ninterface Props {\n  class?: string\n}\nconst { class: _class = \"\" } = Astro.props\n---\n" > $newfile

echo "🫀 Adding SVG..."
cat $file | snang -P "replace('xmlns', 'class={_class} xmlns') | split('><') | join('>\n<')" >> $newfile

echo "🧹 Prettifying..."
prettier --plugin=prettier-plugin-astro $newfile --write
