import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import FormGroup from "../Search/components/FormGroup";
import JournalTicket from "./Journal/components/JournalTicket";


const SearchScreen = (props) => {
  return (
    <View style={styles.searchContainer}>
      <Grid>
        <Col>
            <FormGroup />
            <FormGroup />
            <Grid>
                <Col>
                <FormGroup />
                </Col>
                <Col style={{marginLeft:10}}>
                <FormGroup />
                </Col>
            </Grid>
        </Col>
      </Grid>
    </View>
  );
};

const styles = StyleSheet.create({
    searchContainer: {
      flex: 1,
      padding: 15,
      backgroundColor: "#1A2035",
    },
  });

export default SearchScreen;
