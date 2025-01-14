document.addEventListener('onEventReceived', function (obj) {
    if (!document.querySelector(`div[data-id="${obj.detail.messageId}"] > .meta`)) {
        return;
    }
    document.querySelector(`div[data-id="${obj.detail.messageId}"] > .meta`).style.color = randomColor();
    if (
        obj.detail.tags['display-name'] != null &&
        obj.detail.from != null &&
        obj.detail.tags['display-name'] !== obj.detail.from
    ) {
        document.querySelector(`div[data-id="${obj.detail.messageId}"] > .meta > .name`).dataset.name = `${obj.detail.tags['display-name']}(${obj.detail.from})`;
    }
});

function randomColor() {
    return `hsl(${Math.random() * 360}, var(--username-color-saturation), var(--username-color-lightness))`;
}