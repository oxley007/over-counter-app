import React, { Component } from 'react';
import { Container, Footer, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';
import { addOver } from "../../Actions/index";
import { connect } from "react-redux";
/*
Redux constants
*/
const mapDispatchToProps = dispatch => {
  return {
    addOver: over => dispatch(addOver(over))
  };
};
const mapStateToProps = state => {
  return { over: state.over.over, ball: state.over.ball };
};


class OverBowled extends Component {
  constructor(props) {
    super(props);

    this.state = {
          over: 0,
          ball: 0
        };

    this.overBowledText = this.overBowledText.bind(this);

  }

  overBowledText() {
    if (this.props.ball === 6) {
      return <Text>Over bowled</Text>
    }
    else {
      //nothing
    }
  }


  render() {
    return (
      <Col>
      {this.overBowledText()}
      </Col>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverBowled);

/*
export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
  )(OverBowled);
  */
