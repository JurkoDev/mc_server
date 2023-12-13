@echo off
cd /d %~dp0
IF EXIST .git (
    echo setup uz bol
) ELSE (
    echo setupujem
    echo PRIDAJ SI PSYCHADELIC CHEMISTRY MANUALNE
    git init .
    git remote add origin "https://github.com/JurkoDev/mc_server.git"
    git fetch origin
    git checkout -f master 
)
echo updatujem
git fetch
git checkout -f origin/master
git checkout master
git pull
pause