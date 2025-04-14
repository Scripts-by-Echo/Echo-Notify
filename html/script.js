function showNotification(message, type) {
    const container = document.getElementById("notify-container");

    let iconPath = "icons/info.png"; // default
    if (type === "success") iconPath = "icons/success.png";
    else if (type === "error") iconPath = "icons/error.png";

    const notification = document.createElement("div");
    notification.classList.add("notify", type);

    notification.innerHTML = `
        <img src="${iconPath}" class="notify-icon">
        <span>${message}</span>
    `;

    container.appendChild(notification);

    document.getElementById("notify-sound").play();
    

    setTimeout(() => {
        notification.remove();
    }, 4500);
}


window.addEventListener("message", function(event) {
    if (event.data.action === "notify") {
        showNotification(event.data.message, event.data.type);
    }
});