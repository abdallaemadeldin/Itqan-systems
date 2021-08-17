import React, { memo } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import TextInput from 'src/components/input';
import format from 'date-fns/format';
import { useVacation } from 'src/context/vacation.context';
import { style } from './style';

const List = () => {
    const { container, card, contentContainerStyle, deleteBtn, empty, inputStyle } = style();
    const { vacations, deleteVacation, search } = useVacation();

    const renderItem = ({ item: { name, mobile, department, date, count } }) => {
        return (
            <View style={card}>
                <Text style={deleteBtn} onPress={() => {
                    Alert.alert("Warning", "Are you sure to delete this record", [{
                        text: "Yes",
                        onPress: () => deleteVacation(name)
                    }, { text: "Cancel" }])
                }}>Delete</Text>
                <Text>{`Name: ${name}`}</Text>
                {mobile ? <Text>{`Mobile: ${mobile}`}</Text> : null}
                <Text>{`Department: ${department}`}</Text>
                <Text>{`Date: ${format(date, 'dd MMMM yyyy')}`}</Text>
                <Text>{`Requested Days: ${count}`}</Text>
            </View>
        );
    }

    const renderEmpty = () => <Text style={empty}>No requests yet.</Text>

    return (
        <View style={container}>
            <TextInput
                placeholder="Search by name..."
                inputStyle={inputStyle}
                containerStyle={{ width: '94%' }}
                onChangeText={search}
            />
            <FlatList
                data={vacations}
                renderItem={renderItem}
                keyExtractor={(_, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={contentContainerStyle}
                ListEmptyComponent={renderEmpty}
            />
        </View>
    );
}
export default memo(List);