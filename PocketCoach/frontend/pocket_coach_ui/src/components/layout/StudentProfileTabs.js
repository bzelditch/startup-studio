import React, {Component} from "react";
import {Paper, Tab, Tabs, withStyles} from "@material-ui/core";

const styles = theme => ({
  tabs: {
    height:80,
    fontSize: 20,
    color: "yellow"
  }
});

class StudentProfileTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes, studentTabs, selectedStudentTab, onSelect} = this.props;
    const selectedIndex = selectedStudentTab
      ? studentTabs.findIndex(tab => tab === selectedStudentTab)
      : 0;

    return (
      <Paper >
        <Tabs
          tabItemContainerStyle={{height:80,}}
          indicatorColor="primary"
          textColor="primary"
          value={selectedIndex}
          onChange={(e, index) => {
            onSelect(studentTabs[index])
          }}
        >
          {studentTabs.map(tab =>
            <Tab label={tab} />
          )}
        </Tabs>
      </Paper>
    )
  }
};

export default withStyles(styles)(StudentProfileTabs);
