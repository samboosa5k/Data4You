#!/bin/bash

echo Your commit message:

read commit_message

git add .
git commit -m "$commit_message"
git push