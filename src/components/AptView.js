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
  console.log(apts);

  const transitions = useTransition(apts, {
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, delay: 0, immediate: true },
    delay: 1000,
    trail: 50,
  });

  const scrollBar = useSpring({
    from: { opacity: 0 },
    opacity: apts.length ? 1 : 0,
    delay: apts.length ? 1000 : 0,
    immediate: !apts.length,
  });

  const AnimatedCard = animated(Card);
  const AnimatedGrid = animated(Grid);

  return (
    <Container>
      <AnimatedGrid
        container
        justifyContent="center"
        spacing={2}
        style={scrollBar}
        sx={{ my: 3, maxHeight: "80vh", overflow: "auto" }}
      >
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
      </AnimatedGrid>
    </Container>
  );
};

export default AptView;
