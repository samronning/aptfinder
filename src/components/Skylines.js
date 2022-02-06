import { animated } from "react-spring";
import { useSpring } from "react-spring";
import parallax from "../scripts/parallax";

const Skyline = ({ d, fill, xTrans }) => {
  const spring = useSpring({ x: xTrans, config: { duration: 200 } });
  return <animated.path d={d} fill={fill} style={spring} />;
};

const pathProps = [
  {
    d:
      "m65.666 131.33a65.666 65.666 0 0 0 65.666-65.666h-14.311v-5.29e-4h-4.084v-6.5459h-1.0154v-1.1948h-2.6097v7.7406h0.70383v5.29e-4h-3.1269v-5.29e-4h-1.3622v-10.53h-0.35864v-0.47852h-0.41858v0.47852h-0.63769v10.53h-0.94723v5.29e-4h-4.5708v-10.77l-0.6873-2.0934-0.6873 2.0934v10.769h-0.19844v-9.9121l-0.62787-1.4139-0.62735 1.4139v9.9121h-1.3575v-8.7654h-0.87385v-3.3807h-2.5073v12.146h0.83406v5.29e-4h-2.5895v-5.29e-4h-0.3297v-5.61h-2.2407v5.61h0.67696v5.29e-4h-9.6614v-5.29e-4h-2.3823v-11.301h-2.6195v11.301h-0.62064v-25.799h-0.77825v-0.62838h-1.0506v-7.3685h-0.5178v7.3685h-1.0511v0.62838h-0.77773v25.799h-1.3384v5.29e-4h-18.602v-5.29e-4h-7.8884v-6.1733h-0.90175v-0.47904h-1.6624v0.47904h-1.7467v6.1733h-0.63355v-5.5113h-0.43666v-0.50695h-0.39481v-0.77463h-0.54932v0.77463h-0.47904v0.50695h-0.5917v-3.3254h-0.45837v-0.79685h-1.3942v0.79685h-1.0558v8.8367h-15.475v5.29e-4h-14.31a65.666 65.666 0 0 0 65.666 65.666z",
    fill: "#333",
  },
  {
    d:
      "m65.666 131.33a65.666 65.666 0 0 0 65.666-65.666h-20.344v-5.29e-4h-0.46974v-9.216l-1.6898-0.80615-1.6909 0.80615v9.216h-3.1548v5.29e-4h-3.1269v-5.29e-4h0.68988v-13.897h-1.7136v13.897h-2.7006v5.29e-4h-4.5708v-5.29e-4h2.6892v-10.649h-1.833v4.9005h-1.016v-0.75654l-0.74724-1.9131-0.74621 1.9131v0.75654h-1.1364v5.749h-0.55759v-11.167h-1.1358v11.167h-2.25v5.29e-4h-43.883v-5.29e-4h-0.25373v-7.7794h-3.0706v7.7794h-14.735v-6.1733h-0.61184v-0.9803h-0.15917v0.9803h-0.22892v-0.37259h-0.67748v0.37259h-0.40825v-1.4583h-0.24959v1.4583h-0.79117v4.3388h-2.7848v-4.5119h-1.4139v-0.37827h-1.1555v0.37827h-0.37879v6.3464h-6.7484v5.29e-4h-8.2765a65.666 65.666 0 0 0 65.666 65.666zm55.558-65.666 1.8304-5.29e-4v-9.3002h-1.4929v-0.47904h-1.8309v0.47904h-1.7472v9.3002h3.2406zm-8.0858-5.29e-4v-9.2351h-0.55759v-0.87643h-1.0759v10.112zm-52.854 0v-12.991h-2.3384v12.991zm-11.777 0v-14.569l-2.2815-5.29e-4v14.569zm-2.7606 0v-7.6946h-1.5214v7.6946zm-2.0567 0v-7.4414h-1.465v7.4414z",
    fill: "#666",
  },
  {
    d:
      "m65.666 131.33a65.666 65.666 0 0 0 65.666-65.666h-19.236v-5.29e-4h-0.7245v-5.5692h-0.61753v-2.2314h-2.1317v7.8006h-0.25011v5.29e-4h-4.5708v-5.29e-4h-2.7497v-6.2089l-1.2676-0.66663-1.2676 0.66663v6.2089h-1.448v5.29e-4h-2.59v-5.29e-4h-1.6139v-12.144h-2.8288v12.144h2.5497v5.29e-4h-2.7089v-5.29e-4h-2.2712v-11.944h-0.5581v-6.1758h-2.5497v2.3911h-0.67748v15.729h3.1078v5.29e-4h-4.0044v-5.29e-4h-6.8926v-6.2668h-0.51831v-7.7096l-2.1916-1.2004-2.1911 1.2004v7.7096h-0.35864v6.2668h1.016v5.29e-4h-7.4502v-5.29e-4h2.2872v-15.302h-6.536v15.302h0.67593v5.29e-4h-7.5789v-5.29e-4h-6.6208v-11.893h-1.8593v11.893h-20.341v-9.2723h-0.78859v-1.0707h-0.98598v-0.95808h-1.5782v0.95808h-0.98599v1.0707h-0.78858v9.2723h0.28164v5.29e-4h-19.518a65.666 65.666 0 0 0 65.666 65.666z",
    fill: "#808080",
  },
  {
    d:
      "m65.666 131.33a65.666 65.666 0 0 0 65.666-65.666h-27.168v-5.29e-4h0.13178v-5.29e-4h1.973v-8.1189h-0.7767v-0.817h-1.1756v0.817h-0.63717v5.7971h-2.6097v-3.4065h-0.77721v-2.4107h-0.81649v8.1396h0.96428v5.29e-4h-34.669v-6.1361h-0.47904v-0.98599h-0.31006v-1.7751h-0.59169v-2.2257h-3.5626v2.2257h-0.70435v1.7751h-0.45062v7.1215h1.6934v-5.3e-4h0.62012v5.3e-4h1.8691v5.29e-4h-20.802v-1e-3h1.5513v-5.7221h-3.9445v2.3952h-2.0283v3.3269h1.0402v1e-3h-1.6356v-5.7294h-3.4665v2.4505h-1.295v3.2778h2.2112v1e-3h-35.486a65.666 65.666 0 0 0 65.666 65.666zm-28.606-65.666h-0.19895v-1e-3h0.19895zm-30.52-5.29e-4v-3.8964h-0.37828v-0.95601h-1.8531v0.95601h-2.0159v3.8964zm122.5-5.29e-4v-9.3147c-2.6749 1.2207-3.4065 1.5544-3.4065 1.5544v7.7603zm-9.2671 0v-1.665h-0.38034v-5.5785h-1.5214v7.2435zm-5.3754 0v-1.7441h-0.31884v-0.49764h-0.85576v0.49764h-0.83768v-3.7853h-0.35812v-1.6934h-0.43873v-0.77618h-0.45785v0.77618h-0.41806v1.6934h-1.4149v3.7853h-1.0754v0.35864h-1.2356v1.3854zm-24.178 0v-7.1308h-0.50695v-2.451h-0.16898v-0.5917h-0.0072v-0.75448l-0.73381-0.7245h-1.5012l-0.7338 0.7245v0.75448h-0.60203v10.174zm-6.2415 0v-11.944h-5.29e-4v-4.7413h-3.4665v4.7413l-0.46147 11.944zm-7.9571 0v-6.5676h-0.32453v-5.2684h-0.35605c-0.0593-0.87223-0.78456-1.5492-1.6588-1.5493-0.87406 2.35e-4 -1.5985 0.6772-1.6578 1.5493h-0.35605v5.2684l-0.09818 6.5676z",
    fill: "#b3b3b3",
  },
  {
    d:
      "m65.666 131.33a65.666 65.666 0 0 0 65.666-65.666h-6.8254v-6.2859h-0.83406v-1.3157h-3.6649v7.6016h-2.1317v-7.7608h-3.6065v7.7608h-7.0053v-5.4694h-1.324v-1.6898h-1.0149v1.6898h-0.78806v5.4694h-3.7243v-6.5655h-1.4883v4.084h-0.31471v-0.7767h-2.7678v3.2582h-6.7329v-7.1231h-2.5895v7.1231h-1.8934v-6.4854h-2.7089v6.4854h-2.9487v-2.7006h-4.0039v2.7006h-11.137v-6.1071h-7.4502v6.1071h-3.5729v-7.9768h-3.0148v4.3672h-4.5641v3.6096h-33.667v-3.5248h-4.733v3.5248h-6.8254a65.666 65.666 0 0 0 65.666 65.666z",
    fill: "#e6e6e6",
  },
];

const Skylines = ({ x }) => {
  console.log(x);
  return pathProps.map((pProps, i) => (
    <Skyline key={i} {...pProps} xTrans={parallax(x, i)} />
  ));
};
export default Skylines;
