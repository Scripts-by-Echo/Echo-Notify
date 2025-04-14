RegisterNetEvent("echonotify", function(msg, ntype)
    SendNUIMessage({
        action = "notify",
        message = msg,
        type = ntype
    })
end)

RegisterCommand("testnotify", function()
    TriggerEvent("echonotify", "Works fine", "success")
    TriggerEvent("echonotify", "Here is a Info for you.", "info")
    TriggerEvent("echonotify", "Something went wrong!", "error")
end)