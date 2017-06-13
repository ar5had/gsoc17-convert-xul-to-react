#!/bin/bash
pattern1=' type="text\/babel"'
pattern2=' src="\/scripts\/babel\.js"'
echo $pattern2
sed -i "s/$pattern2//g;s/$pattern1//g" dist/**/*.html
