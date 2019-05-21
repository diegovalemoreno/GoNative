import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image } from "react-native";
import styles from "./styles";

const Post = ({ data }) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.author}>{data.author}</Text>
      </View>
      <Text style={styles.content}>{data.content}</Text>
      <Image style={styles.image} source={{ uri: `${data.url}` }} />
    </View>
  );
};

Post.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string
  }).isRequired
};

export default Post;
