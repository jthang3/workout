import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import {
    Link
} from "react-router-dom";
import "./Login.css";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: "500px",
        margin: "auto",
        height: "500px",
        marginTop: "250px",
        borderRadius: "15px",
        boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    },
    textField: {
        width: "80%",
        marginLeft: "47px",
    },
    label: {
        fontWeight: "bolder",
        fontSize: "20px",
        display: "block",
        marginTop: "20%",
        marginLeft: "47px",

    },
    label1: {
        marginTop: "15px",
        fontWeight: "bolder",
        fontSize: "20px",
        display: "block",
        marginLeft: "47px",

    },
    btn: {
        width: "80%",
        marginLeft: "47px",
        borderRadius: "0px",
        marginTop: "15px"
    }
})

const Login = () => {
    let [username,setUsername] = useState("");
    let [password,setPassword] = useState("");
    const classes = useStyles();
    return(
        <Card className = {classes.root}>
            <label className={classes.label}>Username</label><br />
            <div className = "closer">
                <TextField className = {classes.textField}
                label= "Username"
                type = "text"
                value = {username}
                onChange={e => setUsername(e.target.value)}
                variant = "filled" />
            </div>
            <label className={classes.label1}>Password</label><br />
            <div className="closer">
                <TextField className = {classes.textField}
                label= "Password"
                type = "password"
                value = {password}
                onChange = {e => setPassword(e.target.value)}
                variant = "filled" />
            </div>
            <Button variant="contained" className = {classes.btn} color = "primary">LOG IN</Button>
            <Link to = "/create" className = "account">Create an account</Link>
        </Card>
    )
}

export default Login;