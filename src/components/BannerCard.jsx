import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText,
} from 'material-ui/Card';
import Banner1 from '../img/EventBeastBanner.png';

const BannerCard = () => (
  <Card style={{ marginTop: -0.5 }}>
    <CardHeader />
    <CardMedia>
      <img src={Banner1} alt="" />
    </CardMedia>
    <CardText />
    <CardActions />
  </Card>
);

export default BannerCard;
