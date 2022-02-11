import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import { animated, useTransition } from "react-spring";

const AptView = (props) => {
  const { apts } = props;
  console.log(apts);

  const transitions = useTransition(apts, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, delay: 0 },
    delay: 1000,
    trail: 50,
  });

  const AnimatedCard = animated(Card);

  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{ px: 5, rowGap: 2, py: 2 }}
    >
      {transitions((props, apt) => (
        <AnimatedCard key={apt.address} style={props}>
          <CardHeader title={apt.title} />
        </AnimatedCard>
      ))}
    </Grid>
  );
};

export default AptView;
