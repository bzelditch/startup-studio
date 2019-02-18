import React from "react";
import {Paper, Tab, Tabs} from "@material-ui/core";

export default ({studentTabs, selectedStudentTab, onSelect}) => {
  const selectedIndex = selectedStudentTab
    ? studentTabs.findIndex(tab => tab === selectedStudentTab)
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
            <Tab label={tab} />
          )}
        </Tabs>
      </Paper>
    );
}
