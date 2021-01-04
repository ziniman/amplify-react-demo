##!/usr/bin/env bash

if [ ! -f ./src/App_basic.js ]; then
  cp ./src/App.js ./src/App_basic.js
  cp ./src/App_auth.js ./src/App.js
  echo "Switching code to full version."
else
  mv ./src/App_basic.js ./src/App.js
  echo "Switching code to short version."
fi
