import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { animated, useTransition, useSpring } from "react-spring";

const AptView = (props) => {
  const { apts } = props;

  const transitions = useTransition(apts, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, delay: 0, immediate: true },
    delay: 1000,
    trail: 50,
  });

  const AnimatedCard = animated(Card);

  return (
    <Container>
      <Grid container justifyContent="center" spacing={2}>
        {transitions((props, apt) => (
          <Grid item>
            <AnimatedCard style={props}>
              <CardHeader
                title={apt.title}
                subheader={`${apt.pricing} / ${apt.beds}`}
              />
              <CardMedia component="img" image={apt.img} height={200} />
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AptView;
