const img = document.querySelector("#map-img");
const portals = document.querySelectorAll(".portal");

function positionLinks() {
    const containerRect = img.parentNode.getBoundingClientRect();
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const containerRatio = containerRect.width / containerRect.height;
    let viewbox;

    if (imgRatio > containerRatio) {
        // image is wider than the container, vertical edges are visible
        const height = containerRect.height;
        const width = height * imgRatio;
        const left = (containerRect.width - width) / 2;
        viewbox = { left, top: 0, width, height };
    } else {
        // image is taller than the container, horizontal edges are visible
        const width = containerRect.width;
        const height = width / imgRatio;
        const top = (containerRect.height - height) / 2;
        viewbox = { left: 0, top, width, height };
    }

    portals.forEach(portal => {
        const [x, y] = portal.dataset.pos.split(',').map(parseFloat);
        const [widthRatio, heightRatio] = portal.dataset.size.split(',').map(parseFloat);
        const width = viewbox.width * widthRatio;
        const height = viewbox.height * heightRatio;

        portal.style.width = width + 'px';
        portal.style.height = height + 'px';
        portal.style.left = (viewbox.left + viewbox.width * x - width / 2) + 'px';
        portal.style.top = (viewbox.top + viewbox.height * y - height / 2) + 'px';
    });
}

window.addEventListener('resize', positionLinks);

if (img.complete) {
    positionLinks();
} else {
    img.addEventListener('load', positionLinks);
}
