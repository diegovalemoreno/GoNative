import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

const Todo = ({ id, title }) => (
  <View>
    <Text>{title}</Text>
    <Text>{id}</Text>
  </View>
);
Todo.defaultProps = {
  title: "Todo Padrao"
};

Todo.propTypes = {
  title: PropTypes.string.isRequired
};

export default Todo;
