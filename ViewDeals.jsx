import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getDocs, collection, addDoc } from '@firebase/firestore';
import { db } from './db';
import { useNavigation } from '@react-navigation/native';

export default ViewDeals = () => {
    const navigation = useNavigation();
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        const getDeals = async () => {
            const querySnapshot = await getDocs(collection(db, 'deals'));
            const deals = [];
            querySnapshot.forEach((doc) => {
                deals.push({ ...doc.data(), id: doc.id });
            });
            setDeals(deals);
        };
        getDeals();
    }, []);

    const renderItem = ({ item }) => (
        <View >
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>${item.price}</Text>
            <Button
                title="Edit"
                onPress={() => handleEditDeal(item.id)}
                style={styles.editButton}
            />
        </View>
    );

    const handleEditDeal = (dealId) => {
        console.log('Edit deal with id: ', dealId);
        // Handle edit deal logic here
        // You can navigate to the edit screen or perform any other action
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>View Deals</Text>
            <StatusBar style="auto" />

            <FlatList
                data={deals}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
            />

            <Button
                title="Add Deal"
                onPress={() => navigation.navigate('AddDeals')}
                style={styles.addButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    listContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    dealContainer: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        flex: 1,
        fontSize: 16,
        marginBottom: 5,
    },
    price: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    editButton: {
        marginLeft: 10,
    },
    addButton: {
        marginTop: 20,
    },
});