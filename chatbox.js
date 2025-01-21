let previousHue;

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
    const hue = randomHue(previousHue);
    previousHue = hue;
    return `hsl(${hue}, var(--username-color-saturation), var(--username-color-lightness))`;
}

function randomHue(previousHue) {
    let step = 90;
    let hue = Math.round((Math.random() * step)) * (360 / step);
    while (previousHue != null && hue >= previousHue - step && hue <= previousHue + step) {
        hue = randomHue(previousHue);
    }
    return hue;
}