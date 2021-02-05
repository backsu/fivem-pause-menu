Citizen.CreateThread(function()
	while true do
	Citizen.Wait(1)
	if (IsControlJustPressed(0, 200)) then
		SetPauseMenuActive(false)
		TransitionToBlurred(1000)
		SetNuiFocus(true,true)
		SendNUIMessage({
		open = true
		})
		SetPauseMenuActive(false)
		end
	end
end)

RegisterNetEvent("ToggleActionmenu")
AddEventHandler("ToggleActionmenu", function()
	ToggleActionMenu()
end)

RegisterNetEvent("zombie_escmenu:on")
AddEventHandler("zombie_escmenu:on", function()
    TransitionToBlurred(1000)
	SetNuiFocus(true,true)
	SendNUIMessage({
	open = true
	})
end)

RegisterNetEvent("zombie_escmenu:opendiscord")
AddEventHandler("zombie_escmenu:opendiscord", function()
	SetNuiFocus(true,true)
	SendNUIMessage({
	opendiscord = true
	})
end)


RegisterNUICallback('close', function(data, cb)
	TransitionFromBlurred(1000)
    closemenu()
  	cb('ok')
end)

function closemenu()
	TransitionFromBlurred(1000)
  SetNuiFocus( false, false )
      SendNUIMessage({
        open = false
      })
  end
  
function closediscord()
  SetNuiFocus( false, false )
      SendNUIMessage({
        opendiscord = false
      })
  end
  
  
  
RegisterNUICallback('continue', function(data, cb)
    closemenu()
  	cb('ok')
end)

RegisterNUICallback('discord', function(data, cb)
    closemenu()
	TriggerEvent("zombie_escmenu:opendiscord")
  	cb('ok')
end)

RegisterNUICallback('guide', function(data, cb)
	closemenu()
	TriggerEvent("zombie_escmenuhtml:on")
  	cb('ok')
end)

RegisterNUICallback('key', function(data, cb)
  	cb('ok')
end)

RegisterNUICallback('offGame', function(data, cb)
    TriggerServerEvent("zombie_escmenu:drop")
  	cb('ok')
end)


RegisterNUICallback('discorcopy', function(data, cb)
	closediscord()
    TransitionToBlurred(1000)
	SetNuiFocus(true,true)
	SendNUIMessage({
	open = true
	})
  	cb('ok')
end)
