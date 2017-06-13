#!/bin/bash

# this script removes `type="text/babel"` and babel scripts from all the index.html files in /dist
pattern1=' type="text\/babel"'
pattern2=' src="\/scripts\/babel\.js"'
# pattern3='s/<script type="text\/babel"><\/script>//g'
sed -i "s/$pattern2//g;s/$pattern1//g" dist/**/*.html
