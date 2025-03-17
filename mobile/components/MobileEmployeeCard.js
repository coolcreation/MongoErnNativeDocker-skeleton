import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#e0e0e0',
  },
  headerText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  employeeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  employeeText: {
    flex: 1,
    textAlign: 'center',
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  cardHeaderText: {
    fontWeight: 'bold',
  },
  cardInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  cardInfoText: {
    flex: 1,
    textAlign: 'left',
  },
});

export default function EmployeeCard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/employees')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Text>Loading employees...</Text>;
  }

  if (error) {
    return <Text>Error loading employees: {error.message}</Text>;
  }

  // Option 1: Column Structure
  const renderColumnStructure = () => (
    <ScrollView style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Name</Text>
        <Text style={styles.headerText}>Age</Text>
        <Text style={styles.headerText}>Role</Text>
        <Text style={styles.headerText}>Salary</Text>
      </View>
      {employees.map(employee => (
        <View key={employee._id} style={styles.employeeRow}>
          <Text style={styles.employeeText}>{employee.name}</Text>
          <Text style={styles.employeeText}>{employee.age}</Text>
          <Text style={styles.employeeText}>{employee.role}</Text>
          <Text style={styles.employeeText}>${employee.salary}</Text>
        </View>
      ))}
    </ScrollView>
  );

  // Option 2: Basic Card Structure
  const renderCardStructure = () => (
    <ScrollView style={styles.container}>
      {employees.map(employee => (
        <View key={employee._id} style={styles.cardContainer}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardHeaderText}>{employee.name}</Text>
          </View>
          <View style={styles.cardInfoRow}>
            <Text style={styles.cardInfoText}>Age:</Text>
            <Text style={styles.cardInfoText}>{employee.age}</Text>
          </View>
          <View style={styles.cardInfoRow}>
            <Text style={styles.cardInfoText}>Role:</Text>
            <Text style={styles.cardInfoText}>{employee.role}</Text>
          </View>
          <View style={styles.cardInfoRow}>
            <Text style={styles.cardInfoText}>Salary:</Text>
            <Text style={styles.cardInfoText}>${employee.salary}</Text>
          </View>
          {/* Add more details or actions here */}
        </View>
      ))}
    </ScrollView>
  );

  return renderCardStructure(); // Choose which structure you want to use
}