import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MailIcon from '@material-ui/icons/Mail';
import Modal from '@material-ui/core/Modal';

import Popup from "./popup";

const drawerWidth = 180;

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
        color: "#fff",
        alignContent: "center",
        overflowY: "scroll"
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
    const [model, setmodel] = React.useState({
        open: false,
        num: 0,
    })

    const handleClose = () => {
        setmodel({ ...model, open: false });
    };
    return (
        <Grid>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <Typography variant="body1" style={{ textAlign: "center", padding: "5px" }}>LOGO</Typography>
                <Divider />
                <List>
                    <ListItem>
                        <Typography variant="body1" style={{ color: "#00adee", margin: "auto", padding: "5px" }}>Markers</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button style={{ backgroundColor: "#24292e", margin: "5px 0px 5px 0px" }}>
                        <ListItemIcon>
                            <MailIcon color="#fff" />
                        </ListItemIcon>
                        <Typography variant="body1">Navigation</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        style={{
                            backgroundColor: "#24292e",
                            margin: "5px 0px 5px 0px"
                        }}
                        onClick={() => setmodel({
                            ...model,
                            open: true,
                            num: 1
                        })}
                    >
                        <ListItemIcon>
                            <MailIcon color="#fff" />
                        </ListItemIcon>
                        <Typography variant="body1">Image</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        style={{
                            backgroundColor: "#24292e",
                            margin: "5px 0px 5px 0px"
                        }}
                        onClick={() => setmodel({
                            ...model,
                            open: true,
                            num: 2,
                        })}
                    >
                        <ListItemIcon>
                            <MailIcon color="#fff" />
                        </ListItemIcon>
                        <Typography variant="body1">Video</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem
                        button
                        style={{
                            backgroundColor: "#24292e",
                            margin: "5px 0px 5px 0px"
                        }}
                        onClick={() => setmodel({
                            ...model,
                            open: true,
                            num: 3
                        })}
                    >
                        <ListItemIcon>
                            <MailIcon color="#fff" />
                        </ListItemIcon>
                        <Typography variant="body1">3D Model</Typography>
                    </ListItem>
                    <Divider />
                    <ListItem button style={{ backgroundColor: "#24292e", margin: "5px 0px 5px 0px" }}>
                        <ListItemIcon>
                            <MailIcon color="#fff" />
                        </ListItemIcon>
                        <Typography variant="body1">Embedded</Typography>
                    </ListItem>
                    <Divider />
                </List>
                <List>
                    <ListItem>
                        <Button
                            fullWidth
                            variant="outlined"
                            color='primary'
                            style={{ color: "#fff", borderWidth: "2px", backgroundColor: "#24292e" }}
                            startIcon={<MailIcon color="#fff" />}
                        >Undo</Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            fullWidth
                            variant="outlined"
                            color='primary'
                            style={{ color: "#fff", borderWidth: "2px", backgroundColor: "#24292e" }}
                            startIcon={<MailIcon color="#fff" />}>Redo</Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            fullWidth
                            variant="outlined"
                            color='primary'
                            style={{ color: "#fff", borderWidth: "2px", backgroundColor: "#24292e" }}
                        >Preview</Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            fullWidth
                            variant="outlined"
                            color='primary'
                            style={{ color: "#fff", borderWidth: "2px", backgroundColor: "#24292e" }}
                        >Save</Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            fullWidth
                            variant="contained"
                            color='primary'
                            style={{ color: "#fff", borderWidth: "2px" }}
                        >Publish</Button>
                    </ListItem>
                    <ListItem>
                        <Button
                            fullWidth
                            variant="outlined"
                            color='secondary'
                            style={{ color: "#f00", borderWidth: "2px", backgroundColor: "#24292e" }}
                        >Back</Button>
                    </ListItem>
                </List>
            </Drawer>
            <Modal
                open={model.open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Grid
                    item
                    xs={8}
                    style={{
                        alignItem: "center",
                        justifyContent: "center",
                        margin: "auto",
                        marginTop: "90px",
                    }}
                >

                    <Popup num={model.num} />
                </Grid>
            </Modal>
        </Grid>
    )
}