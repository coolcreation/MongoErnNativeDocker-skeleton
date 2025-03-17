import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

const MobileEmployeeForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = () => {
    const newEmployee = { name, age: parseInt(age), salary: parseFloat(salary), role };
    console.log('Submitting:', newEmployee); // For debugging

    fetch('http://localhost:8000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);


       // Call the refetch function passed down  onEmployeeAdded();



        // Handle success (e.g., show a message, navigate back)
        setName('');
        setAge('');
        setSalary('');
        setRole('');
      })
      .catch(error => {
        console.error('Error creating employee:', error);
        // Handle error (e.g., show an error message)
      });
  };

  return (
    <View style={styles.container}>
      <Text>Add New Employee</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Salary"
        value={salary}
        onChangeText={setSalary}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Role"
        value={role}
        onChangeText={setRole}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Employee" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default MobileEmployeeForm;