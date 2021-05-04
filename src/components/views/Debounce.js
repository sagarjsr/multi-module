import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import states from '../../data/state.json';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        
        display:'flex',
        flexDirection:'column',
        alignItems: "center",
        justifyContent:'center',
       
    },
    listItems: {
        width: '100%',
        maxWidth: 230,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        
    },
}));


const Debounce = () => {
    const classes = useStyles();

    const [search, setSearch] = useState('');
    const [filteredStates, setFilteredStates] = useState(states);

    useEffect(() => {
        const timer = setTimeout(() => {
            const filter = states.filter(state => {
                return state.name.toLowerCase().includes(search.toLowerCase());
            });

            setFilteredStates(filter);
        }, 1000);

        return () => clearTimeout(timer);
    }, [search]);


    return (
        <div className={classes.root}>
           
                <h3>Enter the City Name to be filtered</h3>
                <TextField label="Enter City Name" value={search} onChange={e => setSearch(e.target.value)} />

                {/* <ul>
                    {
                        filteredStates.map(state => {
                            return <li key={state.id}>City: {state.name}</li>;
                        })}
                </ul> */}
                <br></br>
                <br></br>

                <List className={classes.listItems} subheader={<li />}>
                {
                        filteredStates.map(state => (
                        <ul key={state.id} className={classes.listSection}>
                                    <ListItem>
                                        <ListItemText primary={`City: ${state.name}`} />
                                    </ListItem>
                        </ul>
                    ))}
                </List>
            
        </div>
    )
}
export default Debounce
