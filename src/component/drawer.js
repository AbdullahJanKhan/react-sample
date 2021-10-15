import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#000",
        color: "#fff"
        // box- shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function DrawerCmp() {
    const classes = useStyles();
    return (
        <Grid>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Permanent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem>
                        <Typography variant="body1">Markers</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Typography variant="body1">Navigation</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Typography variant="body1">Image</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Typography variant="body1">Video</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Typography variant="body1">3D Model</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Typography variant="body1">Embedded</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Button variant="outlined">Undo</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="outlined">Redo</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="outlined">Preview</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="outlined">Save</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="outlined">Publish</Button>
                    </ListItem>
                    <ListItem>
                        <Button variant="outlined">Back</Button>
                    </ListItem>
                </List>
            </Drawer>
        </Grid>
    )
}