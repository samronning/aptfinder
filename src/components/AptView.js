import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import T from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const AptView = (props) => {
  const { apts, sx, lastApartmentElementRef } = props;

  return (
    <Container sx={sx}>
      <Grid container justifyContent="center" spacing={3}>
        {apts.map(
          (apt) =>
            apt.price_min !== null && (
              <Grid item sx={{ width: 300, height: 320 }}>
                <Card style={props}>
                  <CardHeader
                    sx={{ height: 100 }}
                    title={<T variant="h5">{apt.title}</T>}
                    subheader={
                      <T variant="subtitle1">{`$${apt.price_min.toLocaleString()} - ${apt.price_max.toLocaleString()} / ${
                        apt.bed_min
                      } - ${apt.bed_max} Beds`}</T>
                    }
                  />
                  <CardMedia component="img" image={apt.img} height={200} />
                </Card>
              </Grid>
            )
        )}
      </Grid>
    </Container>
  );
};

export default AptView;
