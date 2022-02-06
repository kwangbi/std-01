import { useState } from "react";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProTip from '../src/ProTip';
import Link from "next/link";
import Copyright from '../src/Copyright';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
});

const MUIPage = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Container maxWidth="sm" className={classes.root}>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Next.js example
                </Typography>
                <Link href="/about" color="secondary">
                    Go to the about page
                </Link>
                <div>
                    <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                        메뉴 열기
                    </Button>
                    <Menu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>메뉴 1</MenuItem>
                        <MenuItem onClick={handleClose}>메뉴 2</MenuItem>
                        <MenuItem onClick={handleClose}>메뉴 3</MenuItem>
                    </Menu>
                </div>

                <ProTip />
                <Copyright />
            </Box>

        </Container>

    )
}

export default MUIPage;