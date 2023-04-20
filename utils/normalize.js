import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
const widthBaseScale = SCREEN_WIDTH / 390;
const heightBaseScale = SCREEN_HEIGHT / 840;

function normalize (size, based = 'width') {
    const newSize = 
        based === 'height' ? size = heightBaseScale * size : size = widthBaseScale * size
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
}

const widthPixel = (size) => {
    return normalize(size, 'width')
}
const heightPixel = (size) => {
    return normalize(size, 'height')
}
const fontPixel = (size) => {
    return heightPixel(size)
}
const pixelSizeVertical = (size) => {
    return heightPixel(size)
}
const pixelSizeHorizontal = (size) => {
    return widthPixel(size)
}
export{
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeHorizontal,
    pixelSizeVertical
}
