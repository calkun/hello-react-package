const primary = {
  prim100: "#6D9AD1",
  prim200: "#426EA4",
  prim300: "#0F4C82",
};

const neutral = {
  neu0: "#FFFFFF",
  neu100: "#F8F8FF",
  neu200: "#E6F0FC",
  neu300: "#D9D9D9",
  neu400: "#666666",
  neu500: "#323232",
  neu600: "#000000",
};

const blue = {
  blu100: "#F0F2FD",
  blu200: "#1B7BF2",
  blu300: "#2030C5",
};

const red = {
  red100: "#FAC5B6",
  red200: "#F21B1B",
  red300: "#A61B11",
};

const yellow = {
  yel100: "#FFFFC9",
  yel200: "#F2C31B",
  yel300: "#9D770B",
};

const green = {
  gre100: "#C1FFDB",
  gre200: "#19CC5E",
  gre300: "#088734",
};

const purple = {
  pur100: "#F8E3FD",
  pur200: "#941BF2",
  pur300: "#440D81",
};

const primitives = {
  ...primary,
  ...neutral,
  ...blue,
  ...red,
  ...yellow,
  ...green,
  ...purple,
};

const neutralText = {
  primary: neutral.neu500,
  secondary: neutral.neu400,
  tertiary: neutral.neu300,
  invert: neutral.neu0,
};

const primaryText = {
  brandPrimary: primary.prim300,
  brandSecondary: primary.prim200,
};

const secondaryText = {
  bluDrk: blue.blu300,
  bluMid: blue.blu200,
  redDrk: red.red300,
  redMid: red.red200,
  yelDrk: yellow.yel300,
  yelMid: yellow.yel200,
  greDrk: green.gre300,
  greMid: green.gre200,
  purDrk: purple.pur300,
  purMid: purple.pur200,
};

const texts = {
  ...neutralText,
  ...primaryText,
  ...secondaryText,
};

const neutralSurface = {
  primary: neutral.neu0,
  secondary: neutral.neu200,
  tertiary: neutral.neu100,
  quarternary: neutral.neu300,
  invert: neutral.neu500,
  pureblack: neutral.neu600,
};

const primarySurface = {
  brandPrimary: primary.prim300,
  brandSecondary: primary.prim200,
  brandTertiary: primary.prim100,
};

const secondarySurface = {
  bluMid: blue.blu200,
  bluLite: blue.blu100,
  redDark: red.red300,
  redMid: red.red200,
  redLite: red.red100,
  yelMid: yellow.yel200,
  yelLite: yellow.yel100,
  greMid: green.gre200,
  greLite: green.gre100,
  purMid: purple.pur200,
  purLite: purple.pur100,
};

const surfaces = {
  ...neutralSurface,
  ...primarySurface,
  ...secondarySurface,
};

const neutralBorder = {
  primary: neutral.neu400,
  secondary: neutral.neu300,
  tertiary: neutral.neu500,
  invert: neutral.neu0,
};

const primaryBorder = {
  brandPrimary: primary.prim300,
  brandSecondary: primary.prim200,
};

const secondaryBorder = {
  bluDrk: blue.blu300,
  bluMid: blue.blu200,
  redDark: red.red300,
  redMid: red.red200,
  yelDrk: yellow.yel300,
  yelMid: yellow.yel200,
  greDrk: green.gre300,
  greMid: green.gre200,
  purDrk: purple.pur300,
  purMid: purple.pur200,
};

const borders = {
  ...neutralBorder,
  ...primaryBorder,
  ...secondaryBorder,
};

export const colors = {
  primitives: primitives,
  texts: texts,
  surfaces: surfaces,
  borders: borders,
};
