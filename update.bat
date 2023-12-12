@echo off
cd /d %~dp0
IF EXIST .git (
    echo setup uz bol
) ELSE (
    echo setupujem
    echo PRIDAJ SI PSYCHADELIC CHEMISTRY MANUALNE
    git init
    git remote add origin "https://github.com/JurkoDev/mc_server.git"
)
echo updatujem
git pull origin master