import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@mui/material/Button';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {styled} from '@mui/material/styles';
import {blue, purple} from '@mui/material/colors';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});
const ColorButton = styled(Button)(({theme}) => ({
    color: theme
        .palette
        .getContrastText(blue[500]),
    backgroundColor: blue[500],
    '&:hover': {
        backgroundColor: blue[700]
    }
}));

export default function MaterialUIPickers() {
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const handleClick = value => {
        switch(value){
            case '회원가입': window.location.href='/user/login'
            break;
            case '취소': window.location.href='/'
            break;
    }}
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <TextField id="outlined-basic" label="UserID"/>
                <TextField id="outlined-basic-2" label="Password"/>
                <TextField id="outlined-basic-3" label="E-Mail"/>
                <TextField id="outlined-basic-4" label="Name"/>
                <TextField id="outlined-basic-5" label="TEL"/>
                <TextField id="outlined-basic-6" label="Birth"/>
                <TextField id="outlined-basic-7" label="ADRESS"/>
            </Stack>
            <Stack spacing={2} direction="row" style={{marginTop:"20px", float: "right"}}>
                <ColorButton variant="contained" style={{width:"200px"}} onClick={handleClick}>회원가입</ColorButton>
                <BootstrapButton variant="contained" disableRipple="disableRipple" style={{width:"200px"}} onClick={handleClick}>
                    취소
                </BootstrapButton>
            </Stack>
        </LocalizationProvider>
    );
}