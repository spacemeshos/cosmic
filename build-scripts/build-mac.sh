export CSC_LINK="$(pwd)/mac-cert.p12"
export WIN_CSC_LINK="$(pwd)/win-cert.pfx"
export CSC_KEY_PASSWORD=""

yarn electron-pack
