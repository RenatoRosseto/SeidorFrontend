import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    props.minhaFunc(event.target)
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.titulo}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          {
            props.lista.map((item) =>
              <MenuItem key={item.value} value={item}>{item.name}</MenuItem>
            )
          }
        </Select>
      </FormControl>
    </div>
  );
}
