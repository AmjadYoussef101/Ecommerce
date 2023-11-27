import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';

interface Props {
    darkMode : boolean ;
    handleThemeChange : () => void;
}

const Header = ({darkMode,handleThemeChange}:Props) => {
    return <AppBar position="static" sx={{mb:4}}>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Ecommerce
        <Switch checked={darkMode} onChange={() => handleThemeChange()} />
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>;
}

export default Header;