import { useState } from 'react';
import { StyleSheet, ScrollView, FlatList, Button,Text } from 'react-native';

export default function SpecificSubject(SpecificSubject) {
    const [subjectInfo, setSubjectInfo] = useState(SpecificSubject);
    const [reminders, setReminders ] = useState([subjectInfo.reminders]);
    return (
    <>
        <ScrollView>
            <Text>This is :{subjectInfo.subject}</Text>
            <Text>Period: {subjectInfo.period}</Text>
            <Text>Teacher: {subjectInfo.teacher}</Text>
            <Text>Time: {subjectInfo.time}</Text>
        </ScrollView>
    </>
  )
}
