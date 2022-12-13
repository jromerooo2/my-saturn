import { StyleSheet, View, Text, Pressable } from 'react-native';

export default function SubjectItem(props) {
  return (
    <View style={styles.goalItem}>
        <Pressable
        android_ripple={{ color: '#210644' }}
        >
        <Text style={styles.goalText}>{props.teacher}</Text>
        {/* <Text style={styles.goalText}>{props.teacher}</Text>
        <Text style={styles.goalText}>{props.time}</Text>         */}
        </Pressable>
  </View>
  )
}

const styles = StyleSheet.create({
    goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: '#5e0acc',
    },
    pressedItem: {
      opacity: 0.5,
    },
    goalText: {
      color: 'white',
      padding: 8,
    },
  });
  