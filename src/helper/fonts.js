import { Platform } from "react-native"


const isAndroid = () => {
	return Platform.OS == "android";
};

const primary_font = "Montserrat-"
const primary_font_ios = "VAG Rounded Next"
export default{
    primary_regular_font:isAndroid() ? `${primary_font}Regular` : `${primary_font_ios}`,
    primary_light_font:isAndroid() ? `${primary_font}Light` : `${primary_font_ios}Light`,
    primary_bold_font:isAndroid() ? `${primary_font}Bold` : `${primary_font_ios}Bold`,
}