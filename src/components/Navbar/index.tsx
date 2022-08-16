import {
    AppBar,
    Box,
    Button,
    InputBase,
    Toolbar,
    Typography,
} from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const pages = [
    {
        route: '/',
        name: 'Home',
    },
    {
        route: '/type',
        name: 'Type',
    }
];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function Navbar() {
    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Box display='flex' justifyContent='space-between' width='100%'>
                    <Box display='flex' justifyContent='start' width='70%' columnGap={'10px'}>
                        <Link to='/'>
                            <Typography variant="h6" component="div">
                                Pokemon Data
                            </Typography>
                        </Link>
                        {pages.map((page, index) =>
                            <Link to={page.route} key={index}>
                                <Button>
                                    {page.name}
                                </Button>
                            </Link>
                        )}
                        <Search color='error'>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={(e) => console.log(e.target.value)}
                            />
                        </Search>
                    </Box>
                    <Box display='flex' justifyContent='flex-end' width='30%' columnGap={'10px'}>
                        <Button variant='contained' color='secondary'>Register</Button>
                        <Button variant='contained' color='primary'>Login</Button>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar >
    );
}

export default Navbar