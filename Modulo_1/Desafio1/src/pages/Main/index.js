import React, { Component } from "react";
import "~/config/ReactotronConfig";
import "~/config/DevToolsConfig";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import Post from "./components/Posts";
// import styles from './styles';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Aprendendo React Native",
        author: "Diego Moreno",
        content:
          "Thanks so much for the birthday money. Thanks so much for driving me home.",
        url: "https://facebook.github.io/react-native/docs/assets/favicon.png"
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        author: "Diego Moreno",
        content:
          "Thanks so much for cooking dinner. I really appreciate it. Thanks so much. I really appreciate you cooking dinner.",
        url: "https://facebook.github.io/react-native/docs/assets/favicon.png"
      },
      {
        id: 3,
        title: "Aprendendo React Native",
        author: "Diego Moreno",
        content:
          "Excuse me sir, you dropped your wallet. Excuse me, do you know what time it is?",
        url: "https://facebook.github.io/react-native/docs/assets/favicon.png"
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>English Time App</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
