import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    flexDirection: "row",
    marginTop: 24,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    color: "#ffffff",
    fontSize: 16,
    padding: 16,
    backgroundColor: "#1f1e25",
  },
  button: {
    marginLeft: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
  },
  listEmptyText: {
    color: "#ffffff",
    fontSize: 14,
    textAlign: "center",
  },
})
