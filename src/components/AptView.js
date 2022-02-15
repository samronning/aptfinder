import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import T from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { animated, useTransition, useSpring } from "react-spring";

const AptView = (props) => {
  const { apts } = props;

  const transitions = useTransition(apts, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, delay: 0, immediate: true },
    trail: 50,
    onProps: (_, controller) => controller.pause(),
  });

  const AnimatedCard = animated(Card);

  return (
    <Container>
      <Grid container justifyContent="center" spacing={3}>
        {transitions((props, apt, t) => (
          <Grid item sx={{ width: 300, height: 320 }}>
            <AnimatedCard style={props}>
              <CardHeader
                sx={{ height: 100 }}
                title={<T variant="h5">{apt.title}</T>}
                subheader={
                  <T variant="subtitle1">{`${apt.pricing} / ${apt.beds}`}</T>
                }
              />
              <CardMedia
                component="img"
                image={apt.img}
                height={200}
                onLoad={() => t.ctrl.resume()}
              />
            </AnimatedCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AptView;
