import React, { forwardRef, useState, cloneElement, useEffect, useRef } from 'react';
import styled, { createGlobalStyle, ThemeProvider as ThemeProvider$1, keyframes, css } from 'styled-components';

var colors = {
	primary: "#118ab2",
	secondary: "#ef476f",
	alternative: "#073b4c",
	linkColor: "#118ab2",
	textColorDark: "#303030",
	textColorLight: "#fafafa",
	backgroundColor: "#faf9f9",
	grayLightEvenMore: "#eeeeee",
	grayLightMore: "#e0e0e0",
	grayLight: "#bdbdbd",
	gray: "#9e9e9e",
	grayDark: "#757575",
	grayDarkMore: "#424242",
	grayDarkEvenMore: "#212121",
	notificationError: "#db3a34",
	notificationWarning: "#f7b801",
	notificationInfo: "#1a659e",
	notificationSuccess: "#6a994e"
};
var roundness = "4px";
var buttonRoundness = "6px";
var inputRoundness = "6px";
var fontSize = "14px";
var defaultTheme = {
	colors: colors,
	roundness: roundness,
	buttonRoundness: buttonRoundness,
	inputRoundness: inputRoundness,
	fontSize: fontSize
};

const GlobalStyle = `
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1.25;
  font-family: 'Lato', sans-serif;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box;
}

b {
  font-weight: bold;
}

p {
  padding: 10px 0;
  line-height: 1.39;
  letter-spacing: 0.2px;
  margin: 6px 0;
}

b {
  font-weight: 700;
}

a,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
`;

function _extends$9() {
  _extends$9 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends$9.apply(this, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": "remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n",
  "78": "base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (process.env.NODE_ENV === 'production') {
      _this = _Error.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + code + " for more information.") || this;
    } else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return _assertThisInitialized(_this);
  }

  return PolishedError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

var reduceHexValue$1 = reduceHexValue;

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */

function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$9({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(darken);
var curriedDarken$1 = curriedDarken;

/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */

function getLuminance(color) {
  if (color === 'transparent') return 0;
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

/**
 * Returns the contrast ratio between two colors based on
 * [W3's recommended equation for calculating contrast](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).
 *
 * @example
 * const contrastRatio = getContrast('#444', '#fff');
 */

function getContrast(color1, color2) {
  var luminance1 = getLuminance(color1);
  var luminance2 = getLuminance(color2);
  return parseFloat((luminance1 > luminance2 ? (luminance1 + 0.05) / (luminance2 + 0.05) : (luminance2 + 0.05) / (luminance1 + 0.05)).toFixed(2));
}

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends$9({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(lighten);
var curriedLighten$1 = curriedLighten;

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff'),
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')};
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends$9({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(transparentize);
var curriedTransparentize$1 = curriedTransparentize;

const getVariantColor = (theme, variant) => {
    return theme.colors[variant];
};
const getContrastColor = (theme, color, light = theme.colors.textColorLight, dark = theme.colors.textColorDark) => {
    const contrastRatio = getContrast(color, dark);
    if (contrastRatio > 5) {
        return dark;
    }
    return light;
};
const size = {
    phone: '640px',
    tablet: '950px',
    desktop: '1024px',
};
const device = (theme) => ({
    phone: `(max-width: ${theme.app ? '100vw' : size.phone})`,
    tablet: `(max-width: ${size.tablet})`,
    tabletOnly: `(min-width: ${size.phone}) AND (max-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`,
});
const measurements = {
    extraSmall: '0.2rem',
    small: '0.5rem',
    medium: '0.75rem',
    large: '1.5rem',
    extraLarge: '2rem',
};

let theme = defaultTheme;
const ThemeProvider = ({ children, customTheme = {}, app }) => {
    theme = { ...defaultTheme, ...customTheme, app: app };
    theme.colors = { ...defaultTheme.colors, ...(customTheme.colors || {}) };
    const GlobalStyling = createGlobalStyle `
  ${GlobalStyle}
  body, input, button {
    font-size: ${theme.fontSize};

    @media ${(p) => device(theme).phone} {
      font-size: calc(${theme.fontSize} * 1.15);
    }
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  a {
    color: ${theme.colors.linkColor};

    &:hover {
      color: ${curriedDarken$1(0.2, theme.colors.linkColor)};
    }
  }
  `;
    return (React.createElement(ThemeProvider$1, { theme: theme },
        React.createElement(GlobalStyling, null),
        children));
};

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs.exports = reactIs_production_min;
} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = has$2;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var has = has$2;
var checkPropTypes = checkPropTypes_1;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  propTypes.exports = factoryWithThrowingShims();
}

var PropTypes = propTypes.exports;

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }

function _objectWithoutProperties$8(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$8(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$8(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlertCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$8(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$8({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12.01",
    y2: "16"
  }));
});
AlertCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlertCircle.displayName = 'AlertCircle';
var AlertCircle$1 = AlertCircle;

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }

function _objectWithoutProperties$7(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$7(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$7(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AlertTriangle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$7(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$7({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }));
});
AlertTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
AlertTriangle.displayName = 'AlertTriangle';
var AlertTriangle$1 = AlertTriangle;

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }

function _objectWithoutProperties$6(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$6(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$6(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var CheckCircle = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$6(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$6({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  }));
});
CheckCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CheckCircle.displayName = 'CheckCircle';
var CheckCircle$1 = CheckCircle;

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }

function _objectWithoutProperties$5(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$5(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$5(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Check = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$5(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$5({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
});
Check.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Check.displayName = 'Check';
var Check$1 = Check;

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronDown = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$4(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$4({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }));
});
ChevronDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronDown.displayName = 'ChevronDown';
var ChevronDown$1 = ChevronDown;

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ChevronUp = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$3(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$3({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("polyline", {
    points: "18 15 12 9 6 15"
  }));
});
ChevronUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChevronUp.displayName = 'ChevronUp';
var ChevronUp$1 = ChevronUp;

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Info = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$2(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$2({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  }));
});
Info.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Info.displayName = 'Info';
var Info$1 = Info;

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Search = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties$1(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends$1({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  }));
});
Search.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Search.displayName = 'Search';
var Search$1 = Search;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var X = forwardRef(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
});
X.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
X.displayName = 'X';
var X$1 = X;

const getColor$1 = (theme, type) => {
    const colors = [
        {
            name: 'error',
            color: theme.colors.notificationError,
        },
        {
            name: 'success',
            color: theme.colors.notificationSuccess,
        },
        {
            name: 'warning',
            color: theme.colors.notificationWarning,
        },
        {
            name: 'info',
            color: theme.colors.notificationInfo,
        },
    ];
    const foundColor = colors.find((color) => color.name === type)?.color;
    return foundColor;
};
const StyledNotification = styled.div `
  display: flex;
  margin: ${measurements.medium} 0;
  border-radius: ${(props) => props.theme.roundness};
  background-color: ${(props) => curriedLighten$1(0.5, props.theme.colors.backgroundColor)};
  color: ${(props) => props.theme.colors.textColorDark};

  ${(props) => `border: 1px solid ${curriedDarken$1(0.02, getColor$1(props.theme, props.type))};`}
`;
const Icon$1 = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  width: calc(${measurements.extraLarge} * 2);
  border-top-left-radius: calc(${(props) => props.theme.roundness} - 2);
  border-bottom-left-radius: calc(${(props) => props.theme.roundness} - 2);

  ${(props) => `
    background-color: ${getColor$1(props.theme, props.type)};
    color: ${getContrastColor(props.theme, getColor$1(props.theme, props.type))};
  `}
`;
const Message = styled.div `
  padding: ${measurements.large};
`;

const Notification = ({ type, message, children }) => {
    if (!children && !message) {
        return null;
    }
    const renderIcon = () => {
        let icon;
        switch (type) {
            case 'success':
                icon = React.createElement(CheckCircle$1, null);
                break;
            case 'info':
                icon = React.createElement(Info$1, null);
                break;
            case 'warning':
                icon = React.createElement(AlertTriangle$1, null);
                break;
            case 'error':
                icon = React.createElement(AlertCircle$1, null);
                break;
            default:
                icon = '';
        }
        return icon;
    };
    return (React.createElement(StyledNotification, { type: type, className: `tui-notification tui-${type}` },
        React.createElement(Icon$1, { type: type, className: "tui-notification-icon" }, renderIcon()),
        React.createElement(Message, { className: "tui-notification-message" }, children || message)));
};

const StyledFillPage = styled.div `
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FillPage = ({ children }) => React.createElement(StyledFillPage, null, children);

const spinningAnimation = keyframes `
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
const StyledLoader = styled.div `
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.div `
  position: absolute;
  border-radius: 50%;
  border: 2px solid transparent;
  border-left: 2px solid ${(props) => props.theme.colors.primary};
  width: ${measurements.extraLarge};
  height: ${measurements.extraLarge};
  animation-name: ${spinningAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  mask-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  ${(props) => (props.light ? `border-left-color: ${props.theme.colors.textColorLight};` : '')}
  ${(props) => props.small ? `width: calc(${measurements.medium} * 1.5); height: calc(${measurements.medium} * 1.5);` : ''}
`;
const CircleFaded = styled.div `
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  width: ${measurements.extraLarge};
  height: ${measurements.extraLarge};
  ${(props) => (props.light ? 'border-color: rgba(255, 255, 255, 0.1);' : '')}
  ${(props) => props.small ? `width: calc(${measurements.medium} * 1.5); height: calc(${measurements.medium} * 1.5);` : ''}
`;

const Loader = ({ size, light = false, fillPage = false, testId = 'loader' }) => {
    const checkFillPage = () => {
        if (fillPage) {
            return React.createElement(FillPage, null, renderLoader());
        }
        return renderLoader();
    };
    const getClasses = () => ['tui-loader', size ? size : '', light ? 'tui-loader-light' : ''].join(' ');
    const renderLoader = () => {
        return (React.createElement(StyledLoader, { className: getClasses(), "data-test-id": testId },
            React.createElement(Circle, { small: size === 'small', light: light }),
            React.createElement(CircleFaded, { small: size === 'small', light: light })));
    };
    return checkFillPage();
};

const expanderAnimation = keyframes `
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const ExpanderButton = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const ExpanderContent = styled.div `
  padding: ${measurements.medium};
  font-size: calc(${(props) => props.theme.fontSize} * 0.95);
  animation-name: ${expanderAnimation};
  animation-duration: 0.1s;
`;

const Expander = ({ title = '', children, expanded = false }) => {
    const [expandedState, setExpandedState] = useState(expanded);
    const renderArrow = () => {
        let arrow = React.createElement(ChevronDown$1, null);
        if (expandedState) {
            arrow = React.createElement(ChevronUp$1, null);
        }
        return arrow;
    };
    const toggleExpander = () => {
        setExpandedState(!expandedState);
    };
    const renderContent = () => {
        if (!expandedState) {
            return null;
        }
        return React.createElement(ExpanderContent, { className: "tui-expander-content" }, children);
    };
    return (React.createElement("div", { className: "tui-expander" },
        React.createElement(ExpanderButton, { className: "tui-expander-trigger", onClick: () => toggleExpander() },
            React.createElement("div", { className: "tui-expander-title" }, title),
            renderArrow()),
        renderContent()));
};

const BadgeWrapper = styled.div `
  position: relative;
  display: inline-block;
`;
const StyledBadge = styled.div `
  top: 0px;
  right: 0px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${measurements.small};
  line-height: ${measurements.extraSmall};
  border-radius: 11px;
  min-width: 11px;
  height: 11px;
  padding: 2px;
  background-color: ${(props) => props.theme.colors.notificationError};
  color: ${(props) => getContrastColor(props.theme, props.theme.colors.notificationError)};
`;

const Badge = ({ children, value = '' }) => {
    if (!children) {
        return null;
    }
    const renderBadge = () => {
        if (!value) {
            return null;
        }
        return React.createElement(StyledBadge, { className: "tui-badge" }, value);
    };
    return (React.createElement(BadgeWrapper, null,
        renderBadge(),
        children));
};

const getAppearance = (appearance = 'button', color) => {
    if (appearance === 'button') {
        return `
      background: ${color};
      &:hover {
        background: ${curriedDarken$1(0.05, color)}
      }
    `;
    }
    let appearanceStyle = `
    color: ${color};
    background: transparent;
    &:hover {
      background: ${rgba(color, 0.1)}
    }
  `;
    if (appearance === 'border') {
        appearanceStyle = `${appearanceStyle} border: 1px solid ${color};`;
    }
    return appearanceStyle;
};
const generateVariantColor = (props) => {
    if (props.variant === 'gradient') {
        return `
      color: ${getContrastColor(props.theme, props.theme.colors.primary)};
      background: linear-gradient(135deg, ${props.theme.colors.secondary} 0%, ${props.theme.colors.primary} 100%);

      &:hover {
        background: linear-gradient(
          135deg,
          ${curriedDarken$1(0.05, props.theme.colors.secondary)} 0%,
          ${curriedDarken$1(0.05, props.theme.colors.primary)} 100%
        );
      }

      &:focus {
        outline: none;
        box-shadow: 0px 0px 0px 3px ${curriedTransparentize$1(0.55, props.theme.colors.primary)};
      }

      ${props.appearance && props.appearance !== 'button'
            ? getAppearance(props.appearance, props.theme.colors.primary)
            : ''}
    `;
    }
    let backgroundColor = getVariantColor(props.theme, props.variant || 'gray');
    if (props.variant === 'danger') {
        backgroundColor = props.theme.colors.notificationError;
    }
    return `
      color: ${getContrastColor(props.theme, backgroundColor)};
      ${getAppearance(props.appearance, backgroundColor)}

      &:focus {
        outline: none;
        box-shadow: 0px 0px 0px 3px ${curriedTransparentize$1(0.55, backgroundColor)};
      }

      ${StyledLoader}{
          div:first-child {
            border-left-color: ${getContrastColor(props.theme, backgroundColor, props.theme.colors.textColorLight, props.theme.colors.primary)};
          }
          div:last-child {
            border-color: ${getContrastColor(props.theme, backgroundColor, 'rgba(255, 255, 255, .2)', 'rgba(0, 0, 0, 0.2)')}
          }
        }
    `;
};
const generateButtonSize = (props) => {
    if (props.size === 'small') {
        return `
      padding: ${measurements.extraSmall} ${measurements.medium};
      font-size: calc(${props.theme.fontSize} * 0.8);
    `;
    }
    if (props.size === 'large') {
        return `
      padding: ${measurements.medium} ${measurements.large};
      font-size: calc(${props.theme.fontSize} * 1.2);
    `;
    }
};
const StyledButton = styled.button `
  font-family: inherit;
  font-size: inherit;
  letter-spacing: 0.05em;
  transition: 0.1s;
  border: 0;
  padding: ${measurements.medium} ${measurements.large};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: ${(props) => props.theme.buttonRoundness || 0};
  text-decoration: none;
  position: relative;
  ${(props) => generateButtonSize(props)}
  ${(props) => generateVariantColor(props)}

  @media ${(p) => device(p.theme).phone} {
    width: 100%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &:focus {
    outline: none;
  }

  ${(p) => p.$loading &&
    `
    cursor: not-allowed;

    ${StyledLoader} {
      position: absolute;
    }

    ${Icon}, ${Content$5} {
      opacity: 0.3;
    }
  `}
`;
const Icon = styled.div `
  display: flex;
  margin-right: ${measurements.small};
`;
const Content$5 = styled.span `
  display: flex;
  align-items: center;
`;

const Button = ({ children, onClick, className = '', loading = false, icon, disabled = false, testId = 'button', ...props }) => {
    const [isLoading, setIsLoading] = useState(loading);
    const handleClick = async () => {
        if (isLoading || disabled) {
            return;
        }
        setIsLoading(true);
        await onClick();
        setIsLoading(false);
    };
    const renderLoader = () => {
        if (!isLoading) {
            return null;
        }
        return React.createElement(Loader, { size: "small" });
    };
    const renderIcon = () => {
        if (!icon) {
            return null;
        }
        return React.createElement(Icon, { className: "tui-button-icon" }, cloneElement(icon, { size: 14 }));
    };
    const getClass = () => {
        return ['tui-button', isLoading ? 'tui-button-loading' : '', className].join(' ');
    };
    return (React.createElement(StyledButton, { "data-test-id": testId, className: getClass(), disabled: disabled, onClick: () => handleClick(), "$loading": isLoading, ...props },
        renderLoader(),
        renderIcon(),
        React.createElement(Content$5, { className: "tui-button-content", "$loading": isLoading }, children)));
};

const getIconStyle = (props) => {
    if (!props.icon) {
        return;
    }
    if (props.iconPosition === 'right') {
        return `
      .tui-input {
        input,
        textarea {
          padding-right: ${measurements.extraLarge};
          padding-left: ${measurements.small};
        }
        .tui-icon {
          right: 0;
          margin-right: ${measurements.small};
        }
      }
    `;
    }
    return `
    .tui-input {
      input,
      textarea {
        padding-left: ${measurements.extraLarge};
        padding-right: ${measurements.small};
      }
    }

    .tui-icon {
      left: 0;
      margin-left: ${measurements.small};
      margin-top: 1px;
    }
  `;
};
const getInvalid = (props) => {
    if (!props.invalid) {
        return;
    }
    return `
      border: 1px solid ${props.theme.colors.notificationError};
      background-color: ${curriedLighten$1(0.4, props.theme.colors.notificationError)};

      &:hover,
      &:focus-within {
        border-color: ${curriedDarken$1(0.15, props.theme.colors.notificationError)};
      }

      &:focus-within {
        box-shadow: 0px 0px 0px 3px ${curriedTransparentize$1(0.55, props.theme.colors.notificationError)};
      }
  `;
};
const StyledInputField = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${measurements.extraSmall};

  @media ${(p) => device(p.theme).phone} {
    width: 100%;
  }

  ${(props) => getIconStyle(props)}
`;
const InputLabel = styled.label `
  padding: ${measurements.small} 0 ${measurements.extraSmall} 0;
`;
const ClearIcon = styled.div `
  cursor: pointer;
  margin-right: ${measurements.small};
  margin-top: 1px;
`;
const InputIcon = styled.div `
  position: absolute;
  margin-top: 1px;

  ${(props) => props.position === 'left' && `left: 0; margin-left: ${measurements.small};`}
  ${(props) => props.position === 'right' && `right: 0; margin-right: ${measurements.small};`}
`;
const InputWrapper = styled.div `
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) => curriedLighten$1(0.3, props.theme.colors.backgroundColor)};
  border: 1px solid ${(props) => props.theme.colors.grayLight};
  border-radius: ${(props) => props.theme.inputRoundness};
  width: 100%;

  @media ${(p) => device(p.theme).phone} {
    width: 100%;
  }

  &:hover,
  &:focus-within {
    border-color: ${(props) => props.theme.colors.grayDarkMore};
  }

  &:focus-within {
    box-shadow: 0px 0px 0px 3px ${(props) => curriedTransparentize$1(0.55, props.theme.colors.primary)};
  }

  input,
  textarea,
  select {
    padding: ${measurements.medium};
    width: 100%;
    border: 0;
    resize: none;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    font-size: 100%;

    ${(props) => props.iconPosition === 'right' &&
    `padding-right: ${measurements.extraLarge}; padding-left: ${measurements.medium};`}
    ${(props) => props.iconPosition === 'left' &&
    `padding-left: ${measurements.extraLarge}; padding-right: ${measurements.medium};`}

    &:focus {
      outline: none;
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }

  ${(props) => getInvalid(props)}
`;
const getCheckBoxContent = (props) => {
    const color = props.active ? props.theme.colors.primary : props.theme.colors.backgroundColor;
    return `
    background-color: ${color};
    color: ${getContrastColor(props.theme, color)};
    border: 1px solid ${curriedDarken$1(0.2, color)};
  `;
};
const CheckBoxWrapper = styled.div `
  margin-bottom: ${measurements.extraSmall};

  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    > span {
      margin-right: ${measurements.small};
    }
  }
`;
styled.div `
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
  }
`;
const SelectIcon = styled.div `
  position: absolute;
  right: 0;
  margin-right: ${measurements.small};
  pointer-events: none;
`;
const CheckBoxContent = styled.div `
  ${(props) => getCheckBoxContent(props)}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10%;
  height: calc(${measurements.medium} * 1.5);
  width: calc(${measurements.medium} * 1.5);
  border-radius: ${(props) => props.theme.roundness};
  padding: 2px;

  @media ${(p) => device(p.theme).phone} {
    height: ${measurements.large};
    width: ${measurements.large};
  }
`;

const InputField = ({ type = 'text', multiline = false, rows = 4, label = '', value = '', onChange, className = '', iconPosition = 'left', placeholder = '', width = 'auto', validator, onClear, testId = 'input', autoComplete = 'on', ...props }) => {
    const [valid, setValid] = useState(true);
    useEffect(() => {
        if (validator) {
            handleOnChange(value);
        }
    }, []);
    const handleOnChange = (value) => {
        let isValid = true;
        if (validator) {
            isValid = validator(value);
        }
        setValid(isValid);
        onChange(value);
    };
    const renderInput = () => {
        if (!multiline) {
            return (React.createElement("input", { autoComplete: autoComplete, type: type, value: value, onChange: (e) => handleOnChange(e.target.value), placeholder: placeholder }));
        }
        return (React.createElement("textarea", { autoComplete: autoComplete, onChange: (e) => handleOnChange(e.target.value), value: value, rows: rows, placeholder: placeholder }));
    };
    const renderIcon = () => {
        if (!props.icon) {
            return null;
        }
        return cloneElement(props.icon, { size: 16 });
    };
    const renderLabel = () => {
        if (!label) {
            return null;
        }
        return React.createElement(InputLabel, { className: "tui-label" }, label);
    };
    const renderClearButton = () => {
        if (!onClear || value === '') {
            return null;
        }
        return (React.createElement(ClearIcon, { className: "tui-clear-icon", onClick: () => onClear() },
            React.createElement(X$1, { size: 16 })));
    };
    const getClassNames = () => ['tui-input', className, valid ? '' : 'tui-input-invalid'].join(' ');
    return (React.createElement(StyledInputField, { "data-test-id": testId, className: getClassNames(), ...props },
        renderLabel(),
        React.createElement(InputWrapper, { className: "tui-input", iconPosition: props.icon ? iconPosition : undefined, style: { maxWidth: width }, invalid: !valid },
            React.createElement(InputIcon, { position: iconPosition, className: "tui-input-icon" }, renderIcon()),
            renderInput(),
            renderClearButton())));
};

const SearchField = ({ handleSearch, placeholder, label, delay = 1000, onClear, value = '', testId = 'search', }) => {
    const [searchString, setSearchString] = useState(value);
    const [lastValue, setLastValue] = useState(value);
    useEffect(() => {
        if (searchString === lastValue) {
            return;
        }
        if (!searchString) {
            if (onClear) {
                onClear();
            }
            setLastValue(searchString);
            handleSearch(searchString);
            return;
        }
        const timer = setTimeout(() => {
            setLastValue(searchString);
            handleSearch(searchString);
        }, delay);
        return () => {
            clearTimeout(timer);
        };
    }, [searchString]);
    const handleChange = (value) => {
        if (searchString !== value) {
            setSearchString(value);
        }
    };
    const handleClear = () => {
        setSearchString('');
        if (!onClear) {
            return;
        }
        onClear();
    };
    return (React.createElement(InputField, { icon: React.createElement(Search$1, null), value: searchString, placeholder: placeholder, label: label, onChange: (e) => handleChange(e), onClear: () => handleClear(), testId: testId }));
};

const Select = ({ items = [], defaultValue, onChange, width = 'auto', label, disabled = false, testId = 'select', }) => {
    const renderOptions = items.map((item, i) => (React.createElement("option", { key: i, value: item.value }, item.label)));
    const renderLabel = () => {
        if (!label) {
            return null;
        }
        return React.createElement("label", { className: "tui-label" }, label);
    };
    return (React.createElement(StyledInputField, { style: { maxWidth: width }, "data-test-id": testId },
        renderLabel(),
        React.createElement(InputWrapper, { className: "tui-input tui-select" },
            React.createElement("select", { disabled: disabled, defaultValue: defaultValue, onChange: (e) => onChange(items[e.target.selectedIndex]) }, renderOptions),
            React.createElement(SelectIcon, null,
                React.createElement(ChevronDown$1, { className: "tui-icon" })))));
};

const CheckBox = ({ label = '', checked = false, onCheck }) => {
    const renderLabel = () => {
        if (!label) {
            return null;
        }
        return React.createElement("span", null, label);
    };
    return (React.createElement(CheckBoxWrapper, null,
        React.createElement("label", null,
            renderLabel(),
            React.createElement("input", { className: "tui-input tui-checkbox", type: "checkbox", hidden: true, checked: checked, onChange: (e) => onCheck(e.target.checked) }),
            React.createElement(CheckBoxContent, { active: checked }, checked && React.createElement(Check$1, null)))));
};

const StyledSection = styled.div `
  padding: ${measurements.extraLarge} 0;
`;
const StyledView = styled.div `
  background-color: ${(p) => p.theme.colors.backgroundColor};
  display: flex;
  flex-direction: column;
`;
const Flex = styled.div `
  display: flex;
  align-items: baseline;
  flex-direction: ${(p) => p.$direction || 'row'};
  ${(p) => p.$gap && `gap: ${p.$gap};`}
  ${(p) => p.$verticalAlign && `align-items: ${p.$verticalAlign};`}
  ${(p) => p.$horizontalAlign && `justify-content: ${p.$horizontalAlign};`}

  ${(p) => {
    switch (p.$breakpoint) {
        case 'tablet':
            return `
        @media ${device(p.theme).tablet} {
          flex-direction: column;
        }`;
        case 'phone':
            return `
        @media ${device(p.theme).phone} {
          flex-direction: column;
        }`;
        default:
            return;
    }
}}
`;

const thumbStyling = (theme) => `
  height: 0px;
  width: 0px;
`;
const StyleSlider = styled.input `
  cursor: pointer;
  padding: 0;
  margin: 0;
  z-index: 3;
  position: absolute;
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  height: 30px;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  :focus {
    outline: none;
  }

  ::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  ::-webkit-slider-thumb {
    ${(p) => thumbStyling(p.theme)}
  }

  ::-moz-range-thumb {
    ${(p) => thumbStyling(p.theme)}
  }

  ::-ms-thumb {
    ${(p) => thumbStyling(p.theme)}
  }
`;
const Thumb = styled.div `
  position: absolute;
  height: ${measurements.large};
  width: ${measurements.large};
  border-radius: 50%;
  background: ${(p) => p.theme.colors.primary};
  pointer-events: none;
  z-index: 3;
`;
const Wrapper$1 = styled.div `
  display: flex;
  height: ${measurements.extraLarge};
  align-items: center;
  position: relative;
  width: 100%;
`;
const RelativeWrapper = styled.div `
  width: 100%;
  padding: 0 ${measurements.medium};
`;
const Track = styled.div `
  z-index: 1;
  position: absolute;
  width: 100%;
  background-color: ${(p) => p.theme.colors.grayLightMore};
  height: 8px;
  border-radius: 4px;
`;
const TrackProgress = styled.div `
  z-index: 2;
  position: absolute;
  background-color: ${(p) => p.theme.colors.primary};
  height: 8px;
  border-radius: 4px;
`;
const ThumbLabel = styled.div `
  font-size: calc(${(p) => p.theme.fontSize} / 1.4);
`;

const Slider = ({ label, min = 0, max = 100, value, showPercent, showValue, onChange }) => {
    const [progress, setProgress] = useState();
    const [currentValue, setCurrentValue] = useState(value || min);
    useEffect(() => {
        updateValue(currentValue);
    }, []);
    const updateValue = (rangeValue) => {
        const resetValue = rangeValue - min;
        const reset = max - min;
        const percentValue = Math.round((resetValue / reset) * 100);
        setProgress(percentValue);
        setCurrentValue(rangeValue);
        onChange && onChange(percentValue, rangeValue);
    };
    const renderLabel = () => {
        if (!label) {
            return null;
        }
        return React.createElement(InputLabel, { className: "tui-slider-label" }, label);
    };
    const renderExtras = () => {
        if (!showPercent && !showValue) {
            return null;
        }
        let value = '';
        let percent = '';
        let labelValue = '';
        if (showPercent) {
            percent = progress?.toString() || min.toString();
            labelValue = percent;
        }
        if (showValue) {
            value = currentValue?.toString() || min.toString();
            labelValue = value;
        }
        if (showValue && showPercent) {
            labelValue = `${percent}% | ${value}`;
        }
        return React.createElement(ThumbLabel, null, labelValue);
    };
    return (React.createElement(StyledInputField, { className: "tui-slider" },
        React.createElement(RelativeWrapper, null,
            React.createElement(Flex, { "$horizontalAlign": "space-between", "$verticalAlign": "center" },
                renderLabel(),
                renderExtras()),
            React.createElement(Wrapper$1, null,
                React.createElement(StyleSlider, { value: currentValue, max: max, min: min, onChange: (e) => updateValue(parseInt(e.target.value)), type: "range" }),
                React.createElement(TrackProgress, { className: "tui-slider-progress", style: { width: `${progress}%` } }),
                React.createElement(Track, { className: "tui-slider-track" }),
                React.createElement(Thumb, { className: "tui-slider-thumb", style: { left: `calc(${progress}% - 10px)` } })))));
};

const StyledList = styled.div `
  display: flex;
  flex-direction: column;

  ${(p) => p.$padded &&
    `& > *:not(:last-child) {
      padding-bottom: ${measurements.medium};
    }`}

  ${(p) => p.$lines &&
    `
    border-top: 1px solid ${p.theme.colors.grayLightMore};
    border-bottom: 1px solid ${p.theme.colors.grayLightMore};

    & > *:hover {
      background-color: ${p.theme.colors.grayLightEvenMore};
    }
    
    & > *:not(:last-child) {
      border-bottom: 1px solid ${p.theme.colors.grayLightMore};
    }

    ${p.$padded &&
        `& > * {
        padding: ${measurements.medium} ${measurements.small};
      }`}
  `}
`;
const StyledListTitle = styled.div `
  font-size: calc(${(p) => p.theme.fontSize} * 0.9);
  font-weight: bold;
  margin-bottom: ${measurements.small};
`;

const List = ({ children, padding = false, lines = false, className = '' }) => {
    const getClasses = () => [className, 'tui-list', padding ? 'tui-padded' : '', lines ? 'tui-lines' : ''].join(' ');
    return (React.createElement(StyledList, { "$padded": padding, "$lines": lines, className: getClasses() }, children));
};
const ListItem = ({ children, title = '' }) => {
    return (React.createElement("div", { className: "tui-listItem" },
        React.createElement(StyledListTitle, { className: "tui-title" }, title),
        children));
};

const StyledCard = styled.div `
  display: flex;
  border-radius: ${(p) => p.theme.roundness};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);
  background-color: ${(p) => curriedLighten$1(0.2, p.theme.colors.backgroundColor)};
  overflow: auto;
  ${(p) => p.$wrap && 'width: fit-content;'}
  ${(p) => {
    switch (p.$imagePlacement) {
        case 'top':
            return 'flex-direction: column;';
        case 'bottom':
            return 'flex-direction: column-reverse;';
        case 'left':
            return 'flex-direction: row;';
        case 'right':
            return 'flex-direction: row-reverse;';
    }
}}

  @media ${(p) => device(p.theme).phone} {
    width: 100%;
  }
`;
const Content$4 = styled.div `
  padding: ${measurements.medium};
`;
const ImageWrapper = styled.div `
  img {
    width: 100%;
    height: auto;
    border-radius: ${(p) => p.theme.roundness};
    display: block;
  }
`;

const Card = ({ children, maxHeight, image, wrap = false, imagePlacement = 'top' }) => {
    const renderContent = () => {
        if (!children) {
            return null;
        }
        return React.createElement(Content$4, null, children);
    };
    const renderImage = () => {
        if (!image) {
            return null;
        }
        return React.createElement(ImageWrapper, null, image);
    };
    return (React.createElement(StyledCard, { className: "tui-card", "$wrap": wrap, "$imagePlacement": imagePlacement, style: { maxHeight: maxHeight } },
        renderImage(),
        renderContent()));
};

const getColor = (p) => {
    let color = p.$variant || 'grayLightMore';
    switch (p.$variant) {
        case 'danger':
            color = 'notificationError';
            break;
        case 'success':
            color = 'notificationSuccess';
            break;
        case 'warning':
            color = 'notificationWarning';
            break;
        case 'info':
            color = 'notificationInfo';
            break;
    }
    return getVariantColor(p.theme, color);
};
const StyledTick = styled.div `
  display: flex;
  border-radius: 20px;
  padding: ${measurements.extraSmall} ${measurements.small};
  font-size: calc(${(p) => p.theme.fontSize} * 0.8);
  width: fit-content;
  background-color: ${(p) => getColor(p)};
  color: ${(p) => getContrastColor(p.theme, getColor(p))};
`;

const Tick = ({ children, variant }) => {
    return (React.createElement(StyledTick, { className: "tui-tick", "$variant": variant }, children));
};

const useEventListener = (eventName, handler, element = typeof window === 'undefined' ? null : window) => {
    const savedHandler = useRef(() => { });
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);
    useEffect(() => {
        const isSupported = element && element.addEventListener;
        if (!isSupported) {
            return () => { };
        }
        const eventListener = (event) => savedHandler.current(event);
        element.addEventListener(eventName, eventListener);
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};

const getModalForDropdown = (props, isModal) => {
    if (!isModal) {
        return '';
    }
    return `
    @media ${device(props.theme).phone} {
      position: inherit;
    }
  `;
};
const StyledDropdown = styled.div `
  position: relative;
  display: inline-block;

  ${(props) => getModalForDropdown(props, props.modal)}
`;
const DropdownButton = styled.div `
  cursor: pointer;
`;
const openDropdownContent = (position) => {
    let transformBegin = '';
    let transformEnd = '';
    switch (position) {
        case 'up':
            transformBegin = `
        transform : translateY(20px);
      `;
            transformEnd = `
        transform : translateY(0);
      `;
            break;
        case 'down':
            transformBegin = `
        transform : translateY(-20px);
      `;
            transformEnd = `
        transform : translateY(0);
      `;
            break;
        case 'left':
            transformBegin = `
        transform : translateX(20px);
      `;
            transformEnd = `
        transform : translateX(0);
      `;
            break;
        case 'right':
            transformBegin = `
        transform : translateX(-20px);
      `;
            transformEnd = `
        transform : translateX(0);
      `;
            break;
    }
    return keyframes `
    0% {
      opacity: 0;
      ${transformBegin}
    }
    50% {
      opacity: 1;
    }
    100% {
      ${transformEnd}
    }
  `;
};
const setPosition = (position) => {
    let positionCss = '';
    switch (position) {
        case 'up':
            positionCss = `
        left: 0;
        bottom: 100%;
        margin-bottom: ${measurements.extraSmall};
      `;
            break;
        case 'down':
            positionCss = `
        left: 0;
        top: 100%;
        margin-top: ${measurements.extraSmall};
      `;
            break;
        case 'left':
            positionCss = `
        right: 100%;
        top: 0;
        margin-right: ${measurements.extraSmall};
      `;
            break;
        case 'right':
            positionCss = `
        left: 100%;
        top: 0;
        margin-left: ${measurements.extraSmall};
      `;
    }
    return css `
    ${positionCss}
    animation-name: ${openDropdownContent(position)};
    animation-duration: 0.2s;
  `;
};
const openModal = keyframes `
  0% { transform: translateY(100%); }
  100% { transform: translateY(0); }
`;
const getModalForContent = (isModal) => {
    if (!isModal) {
        return '';
    }
    return css `
    @media ${(p) => device(p.theme).phone} {
      animation-name: ${openModal};
      animation-duration: 0.2s;
      position: fixed;
      bottom: 0;
      min-height: 100px;
      width: 100%;
      top: unset;
      right: unset;
      left: 0;
      margin: 0;
      z-index: 110;
    }
  `;
};
const DropdownContent = styled.div `
  position: absolute;
  width: max-content;
  z-index: 25;
  background-color: ${(props) => props.theme.colors.grayLightEvenMore};
  border: 1px solid ${(props) => props.theme.colors.grayLight};
  border-radius: ${(props) => props.theme.roundness};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24);

  ${(props) => setPosition(props.position)}

  ${(props) => getModalForContent(props.modal)}
`;
const Blocker = styled.div `
  display: none;

  @media ${(p) => device(p.theme).phone} {
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    top: 0;
    left: 0;
    z-index: 100;
  }
`;
const DropdownWrapper = styled.div `
  display: inline-block;
`;

const Dropdown = ({ children, content, position = 'down', mobileModal = false }) => {
    const [expanded, setExpanded] = useState(false);
    const dropdownRef = useRef(null);
    const handleMouseEvent = (e) => {
        if (!expanded) {
            return;
        }
        if (dropdownRef.current && e.composedPath().includes(dropdownRef.current)) {
            return;
        }
        setExpanded(false);
    };
    useEventListener('mousedown', (e) => handleMouseEvent(e));
    const renderContent = () => {
        if (!expanded) {
            return null;
        }
        return (React.createElement(DropdownContent, { className: "tui-dropdown-content", modal: mobileModal, position: position }, content));
    };
    const renderBlocker = () => {
        if (!expanded) {
            return null;
        }
        if (!mobileModal) {
            return null;
        }
        return React.createElement(Blocker, null);
    };
    return (React.createElement(DropdownWrapper, { className: "tui-dropdown" },
        React.createElement(StyledDropdown, { modal: mobileModal, ref: dropdownRef },
            React.createElement(DropdownButton, { className: "tui-dropdown-trigger", onClick: () => setExpanded(!expanded) }, children),
            renderContent()),
        renderBlocker()));
};

const leftSwipe = keyframes `
  0% { opacity: 1; right: 0; }
  100% { opacity: 0; right: 100%; }
`;
const rightSwipe = keyframes `
  0% { opacity: 1; left: 0; }
  100% { opacity: 0; left: 100%; }
`;
const StyledSwiper = styled.div ``;
const TransformWrapper = styled.div `
  position: relative;
  cursor: pointer;

  img,
  svg {
    pointer-events: none;
  }

  ${(p) => p.$swipeDir === 'left' &&
    css `
      animation-name: ${leftSwipe};
      animation-duration: 0.2s;
    `}

  ${(p) => p.$swipeDir === 'right' &&
    css `
      animation-name: ${rightSwipe};
      animation-duration: 0.2s;
    `}
`;
const SwiperWrapper = styled.div `
  position: relative;
`;
const Content$3 = styled.div `
  touch-action: none;
  width: 100%;
  position: absolute;
`;

const Swiper = ({ views, step = 0, loop, sensitivity = 110, onSwiped }) => {
    const contentRef = useRef(null);
    const swiperRef = useRef(null);
    const [currentStep, setCurrentStep] = useState(step);
    const [mouseIsDown, setMouseIsDown] = useState(false);
    const [startDragPoint, setStartDragPoint] = useState(0);
    const [dragged, setDragged] = useState(0);
    const [continueSwipe, setContinueSwipe] = useState(null);
    useEffect(() => {
        if (continueSwipe) {
            setTimeout(() => {
                let nextStep = currentStep + 1;
                if (loop && nextStep >= views.length) {
                    nextStep = 0;
                }
                setCurrentStep(nextStep);
                setContinueSwipe(null);
                setDragged(0);
            }, 100);
        }
    }, [continueSwipe]);
    useEffect(() => {
        if (contentRef.current && swiperRef.current) {
            swiperRef.current.style.height = `${contentRef.current.clientHeight}px`;
        }
    }, [contentRef.current]);
    const test = (e) => {
        setStartDragPoint(e.pageX);
        setMouseIsDown(true);
    };
    const renderContent = () => {
        let currentContent = views[currentStep];
        if (!loop && currentStep >= views.length) {
            return null;
        }
        if (currentStep > views.length - 1) {
            currentContent = views[0];
        }
        return currentContent;
    };
    const renderNextContent = () => {
        const nextStep = currentStep + 1;
        if (!loop && nextStep >= views.length) {
            return null;
        }
        let nextContent = views[nextStep];
        if (nextStep >= views.length) {
            nextContent = views[0];
        }
        return nextContent;
    };
    useEventListener('pointerup', () => {
        if (mouseIsDown) {
            if (dragged > sensitivity) {
                setContinueSwipe('right');
                onSwiped && onSwiped('right');
            }
            else if (dragged < -sensitivity) {
                setContinueSwipe('left');
                onSwiped && onSwiped('left');
            }
            else {
                setDragged(0);
            }
            setMouseIsDown(false);
        }
    });
    useEventListener('pointermove', (e) => {
        if (mouseIsDown) {
            setDragged((startDragPoint - e.pageX) * -1);
        }
    });
    return (React.createElement(StyledSwiper, { ref: swiperRef, className: "tui-swiper" },
        React.createElement(SwiperWrapper, { onPointerDown: (e) => test(e) },
            React.createElement(Content$3, { className: "tui-swiper-next-content" }, renderNextContent()),
            React.createElement(TransformWrapper, { "$swipeDir": continueSwipe, style: { transform: `translateX(${dragged}px) rotate(${dragged * 0.02}deg)` } },
                React.createElement(Content$3, { ref: contentRef, className: "tui-swiper-content" }, renderContent())))));
};

const modalAnimation = keyframes `
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;
const StyledModal = styled.div `
  transition: 0.2s;
  position: fixed;
  overflow: auto;
  z-index: 150;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  padding-bottom: calc(env(safe-area-inset-bottom) + ${measurements.medium});
  padding-top: env(safe-area-inset-top);
  animation-name: ${modalAnimation};
  animation-duration: 0.2s;
  animation-timing-function: ease-out;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  ${(props) => props.closing && `transform: translateY(100%); opacity: 0;`}
`;
const CloseButton$1 = styled.div `
  padding: ${measurements.medium};
  z-index: 10;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
`;
const Content$2 = styled.div `
  ${(p) => !p.$fill && `padding: ${measurements.medium}; margin-top: ${measurements.extraLarge};`}
  z-index: 1;
`;

const Modal = ({ children, onClose, onOpen, open, fillContent }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [closed, setClosed] = useState(false);
    useEffect(() => {
        if (open) {
            setIsClosing(false);
            setClosed(false);
            onOpen ? onOpen() : null;
        }
    }, [open]);
    if (!open) {
        return null;
    }
    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setClosed(true);
            onClose ? onClose() : null;
        }, 250);
    };
    const renderCloseButton = () => {
        if (!onClose) {
            return null;
        }
        return (React.createElement(CloseButton$1, { className: "tui-modal-close", onClick: () => closeModal() },
            React.createElement(X$1, null)));
    };
    const getClasses = ['tui-modal', isClosing ? 'tui-modal-closing' : ''].join(' ');
    if (closed) {
        return null;
    }
    return (React.createElement(StyledModal, { closing: isClosing, className: getClasses },
        renderCloseButton(),
        React.createElement(Content$2, { "$fill": fillContent, className: "tui-modal-content" }, children)));
};

const getContent = (open) => {
    if (open) {
        return `
      position: fixed;
      z-index: 800;
      height: 100vh;
      width: 100vw;
      left: 0;
      top: 0;
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: baseline;
      padding: ${measurements.medium};

      ${PopupBlocker} {
        opacity: 1;
      }
    `;
    }
    return `
    pointer-events: none;

    ${PopupBlocker} {
      opacity: 0;
    }
  `;
};
const StyledPopup = styled.div `
  ${(p) => getContent(p.open)}

  ${(p) => p.$fullscreen &&
    `
    padding: 0;
    ${Content$1} {
      min-width: 100vw;
      min-height: -webkit-fill-available;
    }
  `}
`;
const Content$1 = styled.div `
  z-index: 900;
  transition: 0.1s;
  max-width: 80%;
  max-height: calc(100% - 40px);
  overflow: auto;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  border-radius: ${(props) => props.theme.roundness};
  padding: ${measurements.medium};
  padding-top: 0;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  img,
  video {
    max-width: 100%;
    height: auto;
  }

  @media ${(p) => device(p.theme).phone} {
    min-width: calc(100vw - 50px);
  }
`;
const TopBar = styled.div `
  padding-top: ${measurements.medium};
  padding-bottom: ${measurements.medium};
  display: flex;
  align-items: center;
  margin-bottom: ${measurements.large};
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: ${(props) => rgba(props.theme.colors.backgroundColor, 0.85)};
`;
const Title = styled.div `
  justify-content: space-between;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
`;
const Footer = styled.div `
  margin-top: ${measurements.large};
  display: flex;
  justify-content: space-between;

  @media ${(p) => device(p.theme).phone} {
    display: block;
  }
`;
const ButtonGroup = styled.div `
  display: flex;

  & > *:not(:last-child) {
    margin-right: ${measurements.large};

    @media ${(p) => device(p.theme).phone} {
      margin-right: 0;
      margin-bottom: ${measurements.small};
    }
  }

  @media ${(p) => device(p.theme).phone} {
    flex-direction: column;
  }
`;
const PopupBlocker = styled.div `
  position: absolute;
  z-index: 800;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: ${(props) => rgba(props.theme.colors.grayDarkEvenMore, 0.6)};
`;

const Popup = ({ title = '', open = false, onClose, onOpen = () => { }, name, children, buttons, width = 'auto', fullscreen = false, closeText = 'Close', }) => {
    const [isOpen, setIsOpen] = useState(open);
    useEffect(() => {
        setIsOpen(open);
        if (open) {
            onOpen();
        }
    }, [open]);
    const closePopup = () => {
        if (onClose) {
            const couldClose = onClose();
            if (couldClose) {
                setIsOpen(false);
            }
        }
    };
    const handleEvent = (e) => {
        if (!name) {
            return;
        }
        const { detail } = e;
        if (detail.name === name) {
            let open = detail.open;
            setIsOpen(open);
            if (open && onOpen) {
                onOpen();
            }
        }
    };
    useEventListener('popup', handleEvent);
    const getClasses = () => {
        return [isOpen ? 'tui-open' : 'tui-closed', fullscreen ? 'tui-fullscreen' : ''].join(' ');
    };
    const renderCloseButton = () => {
        if (!onClose) {
            return null;
        }
        return (React.createElement(Button, { appearance: "text", icon: React.createElement(X$1, null), variant: "primary", onClick: () => closePopup() }, closeText));
    };
    const renderButtons = () => {
        if (!buttons) {
            return null;
        }
        return (React.createElement(ButtonGroup, { className: "tui-popup-buttons" }, buttons.map((button, i) => (React.createElement("div", { key: i }, button)))));
    };
    const renderPopup = () => {
        if (!isOpen) {
            return null;
        }
        return (React.createElement(StyledPopup, { className: getClasses(), "$fullscreen": fullscreen, open: isOpen },
            React.createElement(Content$1, { className: "tui-popup-content", style: { width: width } },
                React.createElement(TopBar, { className: "tui-popup-top-bar" },
                    React.createElement(Title, { className: "tui-popup-title" }, title),
                    React.createElement("div", null, renderCloseButton())),
                children,
                React.createElement(Footer, { className: "tui-popup-footer" },
                    renderButtons(),
                    React.createElement("div", null))),
            React.createElement(PopupBlocker, { className: "tui-popup-blocker", onClick: () => closePopup() })));
    };
    return renderPopup();
};
const sendPopupEvent = (name, open = true) => {
    const event = new CustomEvent('popup', { detail: { open: open, name: name } });
    dispatchEvent(event);
};

const toasterAnimation = keyframes `
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
const Wrapper = styled.div `
  z-index: 99999;
  position: fixed;
  width: 100%;
  pointer-events: none;
  padding: 0 ${measurements.large};
  box-sizing: border-box;
  display: flex;
  bottom: 100px;
  flex-direction: column-reverse;
`;
const StyledToaster = styled.div `
  display: flex;
  margin: ${measurements.small} 0;
  flex-grow: 1;
  transition: 0.2s;
  padding: ${measurements.large};
  border-radius: ${(props) => props.theme.roundness};
  position: relative;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.grayDarkMore};
  color: ${(props) => getContrastColor(props.theme, props.theme.colors.grayDarkMore)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 1.25;
  align-items: center;
  justify-content: space-between;

  animation-name: ${toasterAnimation};
  animation-duration: 0.12s;
  animation-timing-function: linear;

  ${(props) => (props.isClosing ? `transform: translateX(100%); opacity: 0;` : '')}
  ${(props) => (props.closed ? `display: none;` : '')}
`;
const MessageGroup = styled.div `
  display: flex;
  align-items: center;
  gap: ${measurements.medium};
`;
const CloseButton = styled.div `
  pointer-events: all;
  cursor: pointer;

  svg {
    display: block;
    width: calc(${(p) => p.theme.fontSize} * 1.3);
    height: calc(${(p) => p.theme.fontSize} * 1.3);
  }
`;
const Content = styled.div `
  display: flex;
  align-items: center;
`;

const ToasterMessage = ({ toaster, onDelete }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [closed, setClosed] = useState(false);
    useEffect(() => {
        if (!toaster.sticky) {
            setTimeout(() => {
                closeToaster();
            }, toaster.timeout || 3500);
        }
    }, []);
    const closeToaster = () => {
        setIsClosing(true);
        setTimeout(() => {
            setClosed(true);
            onDelete(toaster);
        }, 250);
    };
    const getClasses = [
        'tui-message',
        isClosing ? 'tui-toaster-closing' : '',
        closed ? 'tui-toaster-closed' : '',
        toaster.variant ? `tui-toaster-${toaster.variant}` : '',
    ].join(' ');
    const getIcon = () => {
        let icon = null;
        switch (toaster.variant) {
            case 'success':
                icon = React.createElement(CheckCircle$1, { className: "tui-toaster-icon", size: "16" });
                break;
            case 'error':
                icon = React.createElement(AlertCircle$1, { className: "tui-toaster-icon", size: "16" });
                break;
            case 'info':
                icon = React.createElement(Info$1, { className: "tui-toaster-icon", size: "16" });
                break;
        }
        return icon;
    };
    const renderCloseButton = () => {
        if (!toaster.sticky) {
            return null;
        }
        return (React.createElement(CloseButton, { className: "tui-toaster-close-button", onClick: () => closeToaster() },
            React.createElement(X$1, null)));
    };
    return (React.createElement(StyledToaster, { closed: closed, isClosing: isClosing, className: getClasses },
        React.createElement(MessageGroup, null,
            getIcon(),
            React.createElement(Content, { className: "tui-toaster-content" }, toaster.text)),
        renderCloseButton()));
};
const AddToaster = (props) => {
    const event = new CustomEvent('toaster', { detail: props });
    dispatchEvent(event);
};
const Toaster = () => {
    const [messages, setMessages] = useState([]);
    const stateRef = useRef([]);
    useEffect(() => {
        if (messages.length <= 0) {
            return;
        }
        stateRef.current = messages;
        const visibleMessages = messages.filter((message) => message.visible);
        if (visibleMessages.length <= 0) {
            setMessages([]);
        }
    }, [messages]);
    const addToaster = (toaster) => {
        const toast = {
            id: Date.now() + Math.random() * 2000,
            ...toaster.detail,
        };
        const newToastToAdd = {
            toaster: toast,
            visible: true,
        };
        setMessages((messages) => [...messages, newToastToAdd]);
    };
    useEventListener('toaster', addToaster);
    const removeToaster = (toaster) => {
        if (!stateRef.current) {
            return;
        }
        const newMessages = stateRef.current.map((message) => {
            if (message.toaster.id === toaster.id) {
                message.visible = false;
            }
            return message;
        });
        setMessages(newMessages);
    };
    const renderToasterMessage = () => {
        if (messages.length <= 0) {
            return null;
        }
        return messages.map((message) => (React.createElement(ToasterMessage, { key: message.toaster.id, toaster: message.toaster, onDelete: (toaster) => removeToaster(toaster) })));
    };
    return React.createElement(Wrapper, { className: "tui-toaster" }, renderToasterMessage());
};

const View = ({ children }) => {
    return React.createElement(StyledView, { className: "tui-view" }, children);
};

const Section = ({ children }) => {
    return React.createElement(StyledSection, { className: "tui-section" }, children);
};

export { AddToaster, Badge, Button, Card, CheckBox, Dropdown, Expander, GlobalStyle, InputField, List, ListItem, Loader, Modal, Notification, Popup, SearchField, Section, Select, Slider, Swiper, ThemeProvider, Tick, Toaster, View, sendPopupEvent, useEventListener };
//# sourceMappingURL=index.es.js.map
