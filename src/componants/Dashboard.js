import * as React from 'react'
import { Card, CardContent, CardHeader, CardMedia  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    
    media: {
      alignContent:'center'
    }
  }));

export default () => {

    const classes = useStyles();

    return (
<Card>
<CardHeader title="Welcome at : ">
</CardHeader>
<CardMedia
        //className={classes.media}
        image="../assets/images/logoserial.png"
        title="Serial SA"
      />
<CardContent>

<img src={require('../assets/images/logoserial.png')} className={classes.media} alt="" /><br/>
<h4>Meet the best company ever </h4>
</CardContent>
</Card>
    );
}
