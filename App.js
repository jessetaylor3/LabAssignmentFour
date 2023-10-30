import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList'; 
import ToDoForm from './ToDoForm'; 

function App() {
  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: true },
    { text: 'Go to the gym', completed: false },
    { text: 'Walk dog', completed: true },
  ]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f5f5fc',
  },
});

export default App;
