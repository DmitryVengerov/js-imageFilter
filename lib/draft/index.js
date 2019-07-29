var image = null;

function upload() {
    let fileinput = document.getElementById("finput");
    let canvas = document.getElementById("can");
    image = new SimpleImage(fileinput);
    image.drawTo(canvas);
}

function makeGray() {
    for (let pixel of image.values()) {
        let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    let canvas = document.getElementById("grayscale");
    image.drawTo(canvas);
}

function getRange(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function clip(arg, min, max) {
  let range = getRange(min, max)
  if(range.indexOf(arg) == -1) {
    if(arg > range[range.length - 1]){
      return max
    } 
    if(arg < range[0]) {
      return min
    }
  } else {
    return arg
  }
}

function quantization(pixel, level) {
    return ((pixel/level) * level)
}

function reduceBrughtress(level) {
    for (let pixel of image.values()) {

        let r = quantization(pixel.getRed(),level)
        let g = quantization(pixel.getGreen(),level)
        let b = quantization(pixel.getBlue(),level) 

        pixel.setRed(clip(r, 0, 255));
        pixel.setGreen(clip(g, 0, 255));
        pixel.setBlue(clip(b, 0, 255));
    }

    let canvas = document.getElementById("quantization");
    image.drawTo(canvas);
}
