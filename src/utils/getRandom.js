export const getRandom = () =>
  `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
