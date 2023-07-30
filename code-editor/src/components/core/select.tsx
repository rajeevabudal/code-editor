import * as React from "react";
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from "react-redux";
import Select from "@mui/material/Select";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { getLangauges } from "../redux/editor";
import "./style.css";
type SelectProps={
    options: any[],
    label:string,
    className: string,
}
export default function SelectComponent(props:SelectProps) {

    const dispatch = useDispatch();
    const {options, className, label} = props;
    const [data, setData] = React.useState('');
    const handleChange = (event:any) => {
        setData(event.target.value as string);
        dispatch(getLangauges(event.target.value));
      };
    
  return (
    <>
     <FormControl sx={{ m: 1, width: 300 }}>
     <InputLabel id="demo-multiple-name-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data}
        onChange={handleChange}
        label={label}
        className={className}
      >
           <MenuItem disabled value="">
            <em>{label}</em>
          </MenuItem>
       {options.map((child:any)=>(
            
                <MenuItem key={child?.id} value={child?.name}>{child.name}</MenuItem>
            
       ))}
      </Select>
      </FormControl>
    </>
  );
}
