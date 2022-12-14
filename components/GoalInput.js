import { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Image
} from 'react-native';

function GoalInput(props) {
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setNotes([...notes, text]);
    console.log(notes);
  }
  function handleCancel() {
    setText('')
    setNotes([]);
    props.onCancel();
  }
  const subjects_complete = [
    {
          "period": 1,
          "teacher": "Mr. Smith",
          "reminders": [],
          "time": "7:30-8:24"
      },
    {
          "period": 2,
          "teacher": "Mr. Jones",
          "reminders": [],
          "time": "8:30-9:24"
      },
    {
    
          "period": 3,
          "teacher": "Mrs. Johnson",
          "reminders": [],
          "time": "9:30-10:24"
      },
    {
          "period": 4,
          "teacher": "Mr. Brown",
          "reminders": [],
          "time": "10:30-11:24"
      },
    {
          "period": 5,
          "teacher": "Mr. Smith",
          "reminders": [],
          "time": "11:30-12:24"
      },
      {
          "period": 6,
          "teacher": "Mr. Jones",
          "reminders": [],
          "time": "12:30-1:24"
      },
      {
          "period": 7,
          "teacher": "Mrs. Johnson",
          "reminders": [],
          "time": "1:30-2:24"
      }
  ]

    
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <Text style={styles.text}>
          This is : {props.idPeriod}
        </Text>
        <View style={styles.buttonContainer}>
          <TextInput
            style={{height: 40}}
            placeholder="Any notes?"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={handleCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  text:{
    color: 'white',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
