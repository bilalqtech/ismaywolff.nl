#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "development" ]
then
  echo "This commit was pushed to $TRAVIS_BRANCH and not development. Aborting deploy..."
  exit 0
fi

rev=$(git rev-parse --short HEAD)

cd build

git init
git config user.name "ismay"
git config user.email "$GH_EMAIL"

git remote add upstream "https://$GH_TOKEN@github.com/ismay/ismay.github.io.git"
git fetch upstream
git reset upstream/master

touch .

git add -A .
git commit -m "publish: ${rev}"
git push -q upstream HEAD:master
