const parallax = (num, i) => {
  const scale = 3;
  const parascale = 1.01;
  return (num * scale) / 1000 / (parascale / (i + 1));
};

export default parallax;
