import LatoBold from './assets/fonts/Lato-Bold.ttf';
import LatoBoldItalic from './assets/fonts/Lato-BoldItalic.ttf';

import LatoRegular from './assets/fonts/Lato-Regular.ttf';
import LatoRegularItalic from './assets/fonts/Lato-Italic.ttf';

import LatoLight from './assets/fonts/Lato-Light.ttf';
import LatoLightItalic from './assets/fonts/Lato-LightItalic.ttf';

export const GlobalStyle = `

@font-face {
  font-family: Lato;
  src: url(${LatoBold});
  font-weight: 700;
}

@font-face {
  font-family: Lato;
  src: url(${LatoBoldItalic});
  font-weight: 700;
  font-style: italic;
}

@font-face {
  font-family: Lato;
  src: url(${LatoRegular});
  font-weight: 400;
}

@font-face {
  font-family: Lato;
  src: url(${LatoRegularItalic});
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: Lato;
  src: url(${LatoLight});
  font-weight: 300;
}

@font-face {
  font-family: Lato;
  src: url(${LatoLightItalic});
  font-weight: 300;
  font-style: italic;
}

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
