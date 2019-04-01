import React, {Fragment} from "react";
import {Paper, Tab, Tabs} from "@material-ui/core";
import { Route, Link } from 'react-router-dom'
import {CoachProfile, CoachSessions} from "../../pages";


function LinkTab(props) {
  return <Tab component={Link} onClick={event => event.preventDefault()} {...props} />;
}

export default (props) => {
  const {studentTabs, selectedStudentTab, onSelect, match, location} = props
  console.log("tabs")
  console.log(match)
  const selectedIndex = selectedStudentTab
    ? studentTabs.findIndex(tab => tab.name === selectedStudentTab)
    : 0;

    return (
      <Paper > {/*className={classes.root}*/}
        <Tabs
          value={selectedIndex}
          onChange={(e, index) => {
            onSelect(studentTabs[index])
          }}
          indicatorColor="primary"
          textColor="primary"
        >
          {studentTabs.map(tab =>
            <LinkTab key={tab.name} component={Link}  label={tab.name} to={tab.href}/>
          )}
        </Tabs>
      </Paper>
    );
}
