export const getFloatingLabelCodeString = () => {
  return `
import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

const FloatingLabelInput = () => {
  const [labelAnimation] = useState(new Animated.Value(0));
  const textInputRef = useRef();

  const animateLabel = (toValue) => {
    Animated.timing(labelAnimation, {
      toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleFocus = () => {
    animateLabel(1);
    textInputRef.current?.focus();
  };

  const handleBlur = (text) => {
    if (!text) {
      animateLabel(0);
    }
  };

  const labelStyle = {
    ...styles.label,
    top: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [9, -10],
    }),
    fontSize: labelAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleFocus}>
          <Animated.Text style={labelStyle}>Input with label</Animated.Text>
        </TouchableWithoutFeedback>
        <TextInput
          ref={textInputRef}
          style={styles.input}
          placeholder=""
          placeholderTextColor="#666"
          keyboardType="email-address"
          onFocus={handleFocus}
          onBlur={(e) => handleBlur(e.nativeEvent.text)}
        />
      </View>
      <TextInput placeholder="Enter" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    position: "relative",
    marginVertical: 8,
  },
  label: {
    position: "absolute",
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 4,
    color: "#666",
    zIndex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    backgroundColor: "transparent",
    borderRadius: 6,
    padding: 8,
    fontSize: 14,
    color: "#000",
    width: 300,
  },
});

export default FloatingLabelInput;
    `;
};
