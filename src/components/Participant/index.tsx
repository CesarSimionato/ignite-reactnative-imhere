import { Text, TouchableOpacity, View } from "react-native"

import { Entypo } from "@expo/vector-icons"

import { styles } from "./styles"

type ParticipantProps = {
  name: string
  onRemove: () => void
}

export const Participant: React.FC<ParticipantProps> = ({ name, onRemove }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onRemove}
      >
        <Entypo
          name="minus"
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  )
}
