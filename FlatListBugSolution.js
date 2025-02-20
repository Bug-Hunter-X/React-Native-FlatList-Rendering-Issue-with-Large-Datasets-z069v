```javascript
import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';

const DATA = Array.from({length: 1000}, (_, i) => `Item ${i}`);

const FlatListBugSolution = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}> 
      <Text>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      windowSize={10} // Adjust as needed
      maxToRenderPerBatch={10} // Adjust as needed
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FlatListBugSolution;
```