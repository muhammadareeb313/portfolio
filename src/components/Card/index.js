import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({src,alt,title,description,btn1,btn1OnClick,btn2,btn2OnClick}) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{margin:15}}>
      <CardMedia
        component="img"
        alt={alt}
        height="250"
        image={src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={btn1OnClick}>{btn1}</Button>
        <Button size="small" onClick={btn2OnClick}>{btn2}</Button>
      </CardActions>
    </Card>
  );
}