import { StyleSheet } from "react-native";
import { colors } from "~/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.title
  },

  author: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.author,
    marginTop: 10
  },

  content: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: colors.post
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 10
  }
});

export default styles;
