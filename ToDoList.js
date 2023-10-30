import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

const ToDoList = ({ tasks }) => {
  return (
    <ScrollView style={styles.scrollView}>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <View style={[styles.circle, task.completed && styles.completedCircle]}>
              {task.completed && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.taskText}>{task.text}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginVertical: 20,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    borderRadius: 50, // This gives a rounded shape to the task
    borderColor: '#3498db',
    backgroundColor: '#ecf0f1',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,  // half of width and height to make it a circle
    borderWidth: 2,
    borderColor: '#3498db',  // primary color
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  completedCircle: {
    borderColor: '#2ecc71',  // secondary color
    backgroundColor: '#2ecc71',  // secondary color
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskText: {
    fontSize: 18,
    color: '#3498db', // Use primary color for text
  },
});


export default ToDoList;
