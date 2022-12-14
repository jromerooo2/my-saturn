import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onClickItem.bind(this, props.period)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>Teacher: {props.teacher}</Text>
        <Text style={styles.goalText}>Time: {props.time}</Text>
        <Text style={styles.goalText}>Period   : {props.period}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

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
