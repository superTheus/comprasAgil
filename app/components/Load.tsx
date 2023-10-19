import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../constants/Colors";

export default function LoadComponent() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.colorsPrimary} />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  }
});
