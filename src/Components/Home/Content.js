import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { database } from "../../data";

console.log(database);

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function Content() {
  
  const classes = useStyles();
  const [user, setUser] = useState({
    userName: "",
    userComment: ""
  })

  function handlePost(event) {
    const {name, value} = event.target;
    setUser(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
    event.preventDefault();
  }

  return (
    <div className="container">
      <form onSubmit={handlePost}>
        <input
        onChange={handlePost}
         name="userName" 
         placeholder="Username"
         value={user.userName}
         />
        <input
        onChange={handlePost} 
        name="userComment" 
        placeholder="What do you think?"
        value={user.userComment}
        />
        <button>Submit</button>
      </form>
      <p>{user.userName}</p>
      <p>{user.userComment}</p>
      <List className={classes.root}>
        {database.map((data, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://picsum.photos/200/300?random=1"
                />
              </ListItemAvatar>
              <ListItemText
                primary={data.comment}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {data.name}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
