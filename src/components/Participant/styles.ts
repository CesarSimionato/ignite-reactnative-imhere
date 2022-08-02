import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  name: {
    flex: 1,
    color: "#ffffff",
    fontSize: 16,
    marginLeft: 16,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 5,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#e23c44",
  },
})
