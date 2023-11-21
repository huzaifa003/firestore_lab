import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { db } from './db';
import { doc, updateDoc } from '@firebase/firestore';
import { useNavigation } from '@react-navigation/native';
const EditDeals = (props) => {
    const navigation = useNavigation();
    const [dealData, setDealData] = useState(props.route.params);

    const updateData = async () => {
        try {
            const dealsRef = doc(db, 'deals', dealData.id); // Use doc() instead of collection()
            await updateDoc(dealsRef, dealData);
            console.log('Data updated successfully!');
            console.log('Document written with ID: ', dealsRef.id);
            console.log('Document data: ', dealData)
            navigation.reset({index: 0, routes: [{name: 'ViewDeals'}]})
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description:</Text>
            <TextInput
                style={styles.input}
                value={dealData.description}
                onChangeText={(text) => setDealData({ ...dealData, description: text })}
            />
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={dealData.name}
                onChangeText={(text) => setDealData({ ...dealData, name: text })}
            />
            <Text style={styles.label}>Price:</Text>
            <TextInput
                style={styles.input}
                value={dealData.price}
                onChangeText={(text) => setDealData({ ...dealData, price: text })}
            />

            <Button title='Update Data' onPress={updateData}></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    label: {
        alignSelf: 'flex-start',
        marginBottom: 4,
    },
});

export default EditDeals;
