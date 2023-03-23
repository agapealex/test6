
import React from 'react';
import { StyledHeader, Search, SearchIconWrapper, StyledInputBase} from './header.style';
import { AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <StyledHeader>
            <AppBar position='relative'>
                <Toolbar>
                    <CarCrashIcon/>
                    <Tabs value={0} textColor='inherit'>
                        <Tab label='Despre noi' to="/home" component={Link}/>
                        {/* <Tab label='Discutii' to="/topics" component={Link}/> */}
                        <Tab label='Comp1' to="/comp1" component={Link}/>
                        {/* <Tab label='Lista neagra' to="/list" component={Link}/> */}

                    </Tabs>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                    </Search>
                    <Button sx={{ marginLeft: "auto", marginRight: "10px", backgroundColor: "white", color: "black" }} variant="contained" href="/add">
                        Adauga teapa
                    </Button>
                    <Button sx={{ marginLeft: "right",  backgroundColor: "white", color: "black" }} variant="contained"  href="/my-account">
                        Contul meu
                    </Button>
                </Toolbar>
            </AppBar>
        </StyledHeader>
    )
}

export default Header;