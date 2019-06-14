#!/bin/sh
cd /Users/lvhuimin/sourceCode/blog320/blog-node/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log