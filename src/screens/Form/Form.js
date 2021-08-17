import React, { memo } from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import format from 'date-fns/format';
import add from 'date-fns/add';
import TextInput from 'src/components/input';
import { useForm } from 'src/hooks';
import { style } from './style';

const Form = () => {
    const { container, inputStyle, buttonStyle, buttonTextStyle, button, disabledButton } = style();
    const { count, date, disabled, mobile, name, visible, setVisible, updateNmae, setCount, setDepartment, updateMobile, handleConfirm, submit } = useForm();

    return (
        <ScrollView contentContainerStyle={container} showsVerticalScrollIndicator={false} bounces={false}>
            <TextInput
                placeholder="Name"
                inputStyle={inputStyle}
                value={name.value}
                error={name.error}
                onChangeText={updateNmae}
            />

            <SelectDropdown
                data={['department_1', 'department_2', 'department_3']}
                defaultButtonText="Department name"
                onSelect={(selectedItem) => setDepartment(selectedItem)}
                buttonTextAfterSelection={(selectedItem) => selectedItem}
                rowTextForSelection={(item) => item}
                buttonStyle={buttonStyle}
                buttonTextStyle={buttonTextStyle}
                rowTextStyle={buttonTextStyle}
            />

            <TextInput
                placeholder="Mobile"
                inputStyle={inputStyle}
                value={mobile.value}
                keyboardType="phone-pad"
                error={mobile.error}
                onChangeText={updateMobile}
            />

            <TouchableOpacity style={[buttonStyle, { paddingHorizontal: '3%' }]} onPress={() => setVisible(true)}>
                <Text style={buttonTextStyle}>{date ? format(date, 'dd MMMM yyyy') : "Start Date"}</Text>
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={visible}
                mode="date"
                minimumDate={new Date()}
                maximumDate={add(new Date(), { months: 4 })}
                onConfirm={handleConfirm}
                onCancel={() => setVisible(false)}
            />

            <TextInput
                placeholder="Number of requested days"
                inputStyle={inputStyle}
                value={count}
                keyboardType="numeric"
                error={''}
                onChangeText={setCount}
            />

            <TouchableOpacity style={disabled ? disabledButton : button} disabled={disabled} onPress={submit}>
                <Text style={buttonTextStyle}>Send request</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}
export default memo(Form);