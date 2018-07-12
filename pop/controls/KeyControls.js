class KeyControls {
    constructor() {
        this.keys = {};
        // Bind event handlers
        document.addEventListener("keydown", e => {
            if ([37, 38, 39, 40].indexOf(e.which) >= 0) {
                e.preventDefault();
            }
            this.keys[e.which] = true;
        }, false);
        document.addEventListener("keyup", e => {
            this.keys[e.which] = false;
        }, false);

    }

    // Handle key actions
    get action() {
        // Space key is bound to action
        return this.keys[32];
    }
    // if (keys.action) {
    //     // Jump, or shoot, or …
    // }

    // Getting and setting a key's state directly
    key(key, value) {
        if (value !== undefined) {
            this.keys[key] = value;
        }
        return this.keys[key];
    }

    // Move all keys being pressed down to false, stops continuous input
    reset() {
        for (let key in this.keys) {
            this.keys[key] = false;
        }
    }

    get x() {
        // left arrow or A key
        if (this.keys[37] || this.keys[65]) {
            return -1;
        }
        // right arrow or D key
        if (this.keys[39] || this.keys[68]) {
            return 1;
        }
        return 0;
    }
    get y() {
        // up arrow or W key
        if (this.keys[38] || this.keys[87]) {
            return -1;
        }
        // down arrow or S key
        if (this.keys[40] || this.keys[83]) {
            return 1;
        }
        return 0;
    }

}
export default KeyControls;