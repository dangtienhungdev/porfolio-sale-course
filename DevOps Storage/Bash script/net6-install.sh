#!/bin/bash

apt update && apt install -y wget
wget https://packages.microsoft.com/config/ubuntu/22.04/packages-microsoft-prod.deb
dpkg -i packages-microsoft-prod.deb
apt install apt-transport-https -y
apt update
apt install dotnet-sdk-6.0 -y
apt install dotnet-runtime-6.0 -y
dotnet --version
