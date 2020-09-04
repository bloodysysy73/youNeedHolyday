import * as React from 'react'
import { Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  media: {
    alignContent: 'center'
  }
}));

export default () => {

  const classes = useStyles();

  return (
    <Card>

      <CardContent>

        <img src={require('../assets/images/logoserial.png')} className={classes.media} alt="" /><br />
      </CardContent>
    </Card>
  );
}
