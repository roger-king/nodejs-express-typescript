#!/bin/bash

rm -rf .git
git init

mv README.md STRUCT.md

echo "#$CDIR" > README.md
