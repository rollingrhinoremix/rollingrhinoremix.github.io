#!/bin/bash

# Build tool for website

# Requires npm and nodeJS to be installed

# ----- START OF SCRIPT -----

# remove old build:

rm ./index.html # remove old index.html

rm -r assets # remove old assets folder

rm -r JSON # remove old JSON folder

# -----

# build new:

cd ./source # go into source folder

npm install # install necessary node modules

npm run build # build website

# -----

# move build to root folder:

cd dist # go into dist folder

mv ./* ../.. # move all contents to root folder

cd .. # go back one folder

rm -r dist # remove dist folder since it is no longer necessary

# -----

# copy JSON to root folder:

cp -r ./JSON ..

# -----

# copy assets to new assets folder:

cp -r ./assets/* ../assets

# -----

# remove node_modules

rm -r ./node_modules

# -----

# echo finish message

echo "" # empty line

echo "Website build complete!" # finish message