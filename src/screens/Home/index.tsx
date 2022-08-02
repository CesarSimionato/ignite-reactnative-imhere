import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"

import { Entypo } from "@expo/vector-icons"

import { Participant } from "../../components/Participant"

import { styles } from "./styles"

export const Home: React.FC = () => {
  const participants = [
    "Aline Borges",
    "Cesar Simionato",
    "Cho Chang",
    "Draco Malfoy",
    "Gregório Goyle",
    "Harry Potter",
    "Hermione Granger",
    "Luna Lovegood",
    "Neville Longbottom",
    "Rony Weasley",
    "Vicente Crabbe",
  ]

  const handleAddParticipant = () => {
    if (participants.includes("Cesar Simionato")) {
      return Alert.alert(
        "Participante Inválido!",
        "Já existe uma participante na lista com esse nome.",
      )
    }
  }

  const handleRemoveParticipant = (participantName: string) => {
    if (participants.includes("Cesar Simionato")) {
      return Alert.alert(
        "Remover Participante",
        `Deseja mesmo remover ${participantName}?`,
        [
          {
            text: "Sim",
            onPress: () => Alert.alert("Removido com Sucesso"),
          },
          {
            text: "Não",
            style: "cancel",
          },
        ],
      )
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleAddParticipant}
        >
          <Entypo
            name="plus"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presença.
          </Text>
        )}
      />
    </View>
  )
}
