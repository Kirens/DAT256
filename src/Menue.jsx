import React from 'react';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Casino from '@material-ui/icons/Casino';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Star from '@material-ui/icons/Star';
import PropTypes from 'prop-types';

import LogOutpage from 'LogOutpage';
import Topplista from 'Topplista';


const styles = {
  root: {
    flexGrow: 0,
    maxWidth: 400,
  },
};

class IconLabelTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { App, classes } = this.props;
    console.log(this.state);
    const { value } = this.state;
    return (
      <Paper square className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab icon={<Casino />} label="SPEL" />
          <Tab icon={<Star />} label="TOPPLISTA" />
          <Tab icon={<ExitToApp />} label="LOGGA UT" />
        </Tabs>
        {[
          <App />,
          <Topplista />,
          <LogOutpage />,
        ][value]
        }

      </Paper>
    );
  }
}

IconLabelTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelTabs);
