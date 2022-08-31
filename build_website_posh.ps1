# powershell port of build_website.sh, created mainly for ease of use on windows

# STILL REQUIRES NPM AND NODEJS TO BE INSTALLED TO WORK

# ----- START OF SCRIPT -----

# remove old build:

Remove-Item -Recurse index.html

Remove-Item -Recurse assets

Remove-Item -Recurse JSON

# -----

# build new:

Set-Location source

npm install

npm run build

# -----

# move build to root folder:

Set-Location dist

Move-Item ./* ../..

Set-Location ..

Remove-Item -Recurse dist

# -----

# copy JSON to root folder:

Copy-Item JSON ..

Copy-Item JSON/* ../JSON

# -----

# copy assets to new assets folder

Copy-Item -Path "assets/*" -Destination "../assets" -Recurse

# -----

# remove node_modules

Remove-Item -Recurse node_modules

# -----

# cd back into root folder:

Set-Location ..

# echo finish message

Write-Output ""

Write-Output "Website build complete!"