import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  grid: {
    flexGrow: 1,
  },
});


const CardGenerator = () => {
  const classes = useStyles();
  // const [count, setCount] = useState(0);
  const [card, setCard] = useState([]);

  const AddCards = () => {
    setCard([card.length + 1, ...card])


  }

  const ResetCards = () => {
    setCard([])
  }



  return (
    <div>
      <Container fixed>
        <div style={{ margin: '20px' }}>
          {console.log(card)}
          <Button variant="contained" size="small" color="primary" onClick={AddCards}>Add Crad</Button>
          <Button variant="contained" style={{ float: 'right' }} color="secondary" size="small" onClick={ResetCards}>Clear Cards</Button>
        </div>


        {/* <Grid container spacing={3}>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Card className={classes.root}>
            <CardContent>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
                
        </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">Learn More</Button>
              <Button variant="contained" size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
      
      
      </Grid> */}
        <Grid container spacing={3} >
          {card.map((item, index) => {
            return (

              <Grid item xs={6} sm={3} key={index}>
                <Paper className={classes.paper}>
                  <Card className={classes.root} >
                    <CardContent>
                      <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                      </Typography>
                      <TextField id="filled-basic" label="Filled" variant="filled" />
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" color="primary" size="small">Learn More</Button>
                      <Button variant="outlined" color="primary" size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Container>


    </div>
  )
}

export default CardGenerator
