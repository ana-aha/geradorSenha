import React from 'react';
import { View, Text, Flatlist, StyleSheet} from 'react-native';

export default function SavedPasswords({ route }) {
    const { SavedPasswords } = route.params;

    return (
        <View style={Styles.container}>
                <Text style={Styles.title}>Senhas Salvas</Text>
                <Flatlist 
                data={savedPasswords}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={Styles.passwordContainer}>
                        <Text style={Styles.passwordText}>{item}</Text>
                    </View>
                )}
                />
        </View> 
    )
}