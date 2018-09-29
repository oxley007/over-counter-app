import React, { Component } from 'react';

/*
Native base and react native
*/
import { Container, Footer, H2, H1, Text, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { StyleSheet, View } from 'react-native';

// Custom Styles
const styles = StyleSheet.create({
  textHeader: {
    color: '#fff',
  },
  textDesc: {
    color: '#eee',
    fontWeight: '100',
  },
  textHeaderNumber: {
    color: '#fff',
    fontSize: 40,
    lineHeight: 40,
  },
  colCenter: {
    alignItems: 'center',
  },
  horizontalRule: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.5,
    width: '100%',
    marginTop: 15,
    marginBottom: 15,
  }
});

class currentPartnership extends Component {


  render() {
    return (
      <Row>
        <Col size={9}>
          <Row><H1 style={styles.textHeader}>Current Partnership:</H1></Row>
          <Row><Text style={styles.textDesc}>The current partnership in overs</Text></Row>
        </Col>
        <Col size={3} style={styles.colCenter}>
          <Row>
            <H1 style={styles.textHeaderNumber}>{this.props.currentPartnership}</H1>
          </Row>
          <Row>
            <Text style={styles.textDesc}>Overs</Text>
          </Row>
        </Col>
      </Row>
    );
  }
}


export default currentPartnership
