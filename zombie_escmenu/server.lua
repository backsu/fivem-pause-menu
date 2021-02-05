RegisterServerEvent("zombie_escmenu:drop")
AddEventHandler("zombie_escmenu:drop", function()
	DropPlayer(source, "서버에 나가셨습니다.")
end)