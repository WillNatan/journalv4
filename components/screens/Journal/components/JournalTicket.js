import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const JournalTicket = (props) => {
  return (
    <View style={styles.ticketContainer}>
      <Icon
        style={{ color: "#F1637B" }}
        name="ticket"
        backgroundColor="#3b5998"
        onPress={() => alert("ok")}
        size={40}
      />
      <View style={styles.ticketInfo}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFF" }}>
          N°5513
        </Text>
        <Text style={{ fontSize: 12, color: "#FFF" }}>11-20-2019</Text>
      </View>
      <View style={styles.ticketBadges}>
        <View style={styles.badgePrimary}>
          <Text>Validé</Text>
        </View>
        <View style={styles.badgeInfo}>
          <Text>Vente</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ticketContainer: {
    backgroundColor: "#252D47",
    padding: 15,
    height: 80,
    width: "100%",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  ticketInfo: {
    marginLeft: 10,
  },
  ticketBadges: {
    marginLeft: "auto",
    justifyContent: "space-between",
  },
  badgePrimary: {
    backgroundColor: "#8EFF9B",
    padding: 5,
    borderRadius: 20,
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
    height:25
  },
  badgeFail: {
    backgroundColor: "red",
    padding: 2,
    borderRadius: 50,
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
    height:25
  },
  badgeInfo: {
    backgroundColor: "#9AD2FF",
    padding: 2,
    borderRadius: 50,
    margin: 1,
    alignItems: "center",
    justifyContent: "center",
    height:25
  },
});

export default JournalTicket;
