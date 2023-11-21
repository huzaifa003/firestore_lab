import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import { collection, addDoc } from '@firebase/firestore';
import { db } from './db';
import {useNavigation} from '@react-navigation/native'
export default function AddDeals() {

    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleNameChange = (text) => {
        setName(text);
    };

    const handlePriceChange = (text) => {
        setPrice(text);
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
    };

    const handleAddDeal = async () => {
        try {
            const docRef = await addDoc(collection(db, 'deals'), {
                name: name,
                price: price,
                description: description,
            });
            console.log('Document written with ID: ', docRef.id);
            // Reset the input fields
            setName('');
            setPrice('');
            setDescription('');

            navigation.navigate('ViewDeals');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Add Deals</Text>
            <StatusBar style="auto" />

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter name"
                    value={name}
                    onChangeText={handleNameChange}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Price:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter price"
                    value={price}
                    onChangeText={handlePriceChange}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Description:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter description"
                    value={description}
                    onChangeText={handleDescriptionChange}
                />
            </View>

            <Button title="Add Deal" onPress={handleAddDeal} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        width: 200,
    },
});
