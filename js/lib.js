class Core {}

class Validator {}

class PixelError {
	throwError(code) {
        switch (code) {
            case 1:
            	throw new Error('');
            	break;
            case 2: 
            	throw new Error('');
            	break;
            default:
                break;
        }
    }
}

class ImageError {
	throwError(code) {
		switch (code) {
			case 1:
				throw new Error('');
			default:
				break;
		}
	}
}

/**
 * 
 */
class Pixel extends PixelError {
    constructor(image, x, y) {
    	super()
        this.image = image;
        this.x = x;
        this.y = y;
    }

    get getPixel() {}
    get getX() {}
    get getY() {}
    get getRed() {}
    get getGreen() {}
    get getBlue() {}
    get getAlpha() {}

    set setPixel() {}
    set setX() {}
    set setY() {}
    set setRed() {}
    set setGreen() {}
    set setBlue() {}
    set setAlpha() {}
}

/**
 * 	Main Class for workin with image
 */
class Image extends Pixel {
    constructor(props, logger = '') {
        super.props;
        this.logger = logger
    }

    makeGray() {}
    logger() {

    }

}