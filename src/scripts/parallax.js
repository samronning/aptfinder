const parallax = (x) => {
  const layers = ["layer1", "layer2", "layer3", "layer4", "layer5"].map((id) =>
    document.getElementById(id)
  );
  const scale = 3;
  const parascale = 1.01;
  layers.forEach((layer, i) =>
    layer.setAttribute(
      "transform",
      `translate(${(x * scale) / 1000 / (parascale * i + 1)} 0)`
    )
  );
};

export default parallax;
