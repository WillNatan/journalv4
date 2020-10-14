import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import JournalTicket from "./Journal/components/JournalTicket";

const JournalScreen = (props) => {
  return (
    <View style={styles.container}>
      <Grid>
        <Col>
          <JournalTicket />
          <JournalTicket />
          <JournalTicket />
        </Col>
      </Grid>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#1A2035",
  },
});

export default JournalScreen;
