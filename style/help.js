window.onload = () => {
    console.log('hi');
}

let mousePosX;
let mousePosY;

document.addEventListener('mousemove', (event) => {
    mousePosX = event.clientX;
    mousePosY = event.clientY;
});

class previewElement {
    constructor(image) {
        this.element = document.createElement('img');
        this.element.style.display = 'none';
        this.element.className = 'preview';
        this.element.src = image;
    }

    position(x, y) {
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
    }

    display(value) {
        if (value == null) {
            return this.element.style.display;
        } else {
            this.element.style.display = value;
        }
    }

    render(parentElement) {
        parentElement.appendChild(this.element);
    }

    remove() {
        this.element.remove();
    }
}

function addPreview(elementID, imageLink) {
    let preview;
    let isHovering = false;
    let elm = document.getElementById(elementID);
    elm.addEventListener('mouseenter', async () => {
        preview = new previewElement(imageLink);
        preview.render(document.body);
        isHovering = true;
        while (isHovering) {
            await new Promise(resolve => setTimeout(resolve, 0.1));
            preview.position(mousePosX, mousePosY);
            if (preview.display() == 'none') {
                preview.display('revert');
            }
        }
    });
    elm.addEventListener('mouseleave', () => {
        preview.display('none');
        isHovering = false;
        preview.remove();
    });
}