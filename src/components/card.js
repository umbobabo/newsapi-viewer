import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const formatDate = require("../server/templates/helpers/formatDate");
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
};

function SimpleMediaCard(props) {
  const {
    classes,
    article: { url, urlToImage, publishedAt, title, description }
  } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={urlToImage} title={title} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography component="p">{formatDate(publishedAt)}</Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" href={url}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SimpleMediaCard);
