import { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import SpecificSubject from './views/SpecificSubject';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [idPeriod, setIdPeriod] = useState(1);

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
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Text style={styles.title}>My Schedule</Text>
        <GoalInput
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
          idPeriod={idPeriod}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={subjects_complete}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  teacher={itemData.item.teacher}                  
                  time={itemData.item.time}
                  period={itemData.item.period}
                  pressed={startAddGoalHandler}
                  onClickItem={startAddGoalHandler}                  
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.period;
            }}
            alwaysBounceVertical={false}
          />
        </View>
        {/* <View style={styles.goalsContainer}>
          <FlatList
            data={subjects_complete}
            renderItem={(obj) => {
              return (
                <SubjectItem
                  teacher={obj.teacher}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
  goalsContainer: {
    flex: 5,
  },
});
