import { useEffect, useState } from 'react';
import { StyleSheet, View, Button, Text , TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import SpecificSubject from './views/SpecificSubject';
import { Camera, CameraType } from 'expo-camera';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [idPeriod, setIdPeriod] = useState(1);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
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


  // console.log(subjects_complete.Math.teacher);
  function startAddGoalHandler(id) {
    // console.log(id);
    setIdPeriod(id);
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <View style={styles.appContainer}>
        <Text style={styles.title}>Webcam API</Text>
        <View style={styles.container}>
          <Camera style={styles.camera} type={type}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'blue',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    flex: 100,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    textAlign: 'center',
  },
});
