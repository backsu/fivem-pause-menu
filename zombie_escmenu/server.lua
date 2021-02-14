RegisterServerEvent("zombie_escmenu:drop")
AddEventHandler("zombie_escmenu:drop", function()
	DropPlayer(source, "You went to the server.")
end)