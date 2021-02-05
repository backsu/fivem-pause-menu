fx_version 'adamant'

game 'gta5'

version '1.0.0'

ui_page "nui/ui.html"

files {
    "nui/ui.html",
    "nui/ui.css",
    "nui/ui.js",
    "nui/img/*.png",
    "nui/font/gta-fonte.ttf",
    "nui/font/JejuHallasan.ttf"
}

client_scripts{ 
  "client.lua"
}

server_scripts {
	'server.lua'
}