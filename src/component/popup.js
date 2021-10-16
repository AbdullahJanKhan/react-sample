import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from "@material-ui/core/Divider";
import AppBar from '@material-ui/core/AppBar';
import { Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import AddIcon from '@material-ui/icons/Add';
import ImageIcon from "@material-ui/icons/Image";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "40vh",
    },
    left: {
        background: "#24292e",
        color: "#fff",
    },
    right: {
        background: "#000",
    },
    active: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#fff",
    },
    sideactive: {
        background: "grey"
    }
}))



export default function Popup({ num }) {
    const classes = useStyles();
    const file = React.createRef();
    const [img, setimg] = React.useState(null);
    const [assets, setasset] = React.useState(false);

    return (
        <Grid container className={classes.root}>
            <Grid item xs={3} className={classes.left}>
                <Typography
                    variant="h5"
                    style={{ alignItems: "center", textAlign: "center", padding: "5px" }}
                >
                    Add A Video Marker
                </Typography>
                <List>
                    <ListItem
                        button
                        className={!assets ? classes.sideactive : classes.test}
                        onClick={() => setasset(false)}
                    >
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <Typography variant="h6">My Files</Typography>
                    </ListItem>
                    <Divider />

                    <ListItem
                        button
                        className={assets ? classes.sideactive : classes.test}
                        onClick={() => setasset(true)}
                    >
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <Typography variant="h6">Asset Library</Typography>
                    </ListItem>
                    <Divider />

                </List>
                <Divider />
            </Grid>
            <Grid item xs={9} className={classes.right}>
                <AppBar
                    position="relative"
                    style={{ background: "#000", padding: "5px" }}
                >
                    <Grid container>
                        <Grid item xs={2} style={{ textAlign: "center" }}>
                            <Button
                                fullWidth
                                style={{ color: "#fff", fontWeight: "bold", }}
                                className={num === 1 ? classes.active : classes.test}
                                variant={num === 1 ? "outlined" : "text"}
                            >
                                Images
                            </Button>
                        </Grid>
                        <Grid item xs={2} style={{ textAlign: "center" }}>
                            <Button
                                fullWidth
                                style={{ color: "#fff", fontWeight: "bold" }}
                                className={num === 2 ? classes.active : classes.test}
                                variant={num === 2 ? "outlined" : "text"}
                            >Videos</Button>
                        </Grid>
                        <Grid item xs={2} style={{ textAlign: "center" }}>
                            <Button
                                fullWidth
                                style={{ color: "#fff", fontWeight: "bold" }}
                                className={num === 3 ? classes.active : classes.test}
                                variant={num === 3 ? "outlined" : "text"}
                            >3D</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container>
                                <IconButton component="span" style={{ background: "#fff", padding: "5px", marginLeft: "10px" }}>
                                    <MailIcon />
                                </IconButton>
                                <IconButton component="span" style={{ background: "#fff", padding: "5px", marginLeft: "10px" }}>
                                    <MailIcon />
                                </IconButton>
                                <Button
                                    variant="outlined"
                                    startIcon={<AddIcon />}
                                    style={{
                                        color: "#fff",
                                        fontWeight: "bold",
                                        borderColor: "#fff",
                                        marginLeft: "10px",
                                        borderRadius: "15px"
                                    }}
                                    onClick={() => file.current.click()}
                                >
                                    Upload Files(s)
                                </Button>
                                <input
                                    type="file"
                                    multiple
                                    ref={file}
                                    hidden
                                    onChange={() => {
                                        console.log(file.current.files);
                                        setimg(file.current.files);
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </AppBar>
                <hr style={{ background: "#fff" }} />
                <Grid container>
                    {
                        assets ?
                            ['test1,jpg', 'test2.jpg', 'test3.jpg', 'test4.jpg', 'test5.jpg'].map((item, index) => {
                                return (
                                    <Grid item xs={3} key={index} style={{
                                        background: "#24292e",
                                        alignItems: "center",
                                        padding: "10px",
                                        margin: "10px",
                                    }}>
                                        <ImageIcon size={36} />
                                        <Typography variant="body2" style={{ color: "#fff" }}>{item}</Typography>
                                    </Grid>
                                )
                            })
                            :
                            img ?
                                Object.keys(img).map((item, index) => {
                                    return (
                                        <Grid item xs={3} key={index} style={{
                                            background: "#24292e",
                                            alignItems: "center",
                                            padding: "10px",
                                            margin: "10px",
                                        }}>
                                            <ImageIcon size={36} />
                                            <Typography variant="body2" style={{ color: "#fff" }}>{img[item].name}</Typography>
                                        </Grid>
                                    )
                                })
                                :
                                <Typography variant="body1" style={{ color: "#fff" }}>
                                    No Files Uploaded
                                </Typography>
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}