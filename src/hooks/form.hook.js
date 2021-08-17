import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useVacation } from 'src/context/vacation.context';
import { Alert } from 'react-native';

export const useForm = () => {
    const { goBack, canGoBack } = useNavigation();
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState({ value: '', error: '' });
    const [department, setDepartment] = useState('');
    const [mobile, setMobile] = useState({ value: '', error: '' });
    const [date, setDate] = useState('');
    const [count, setCount] = useState('');
    const { addVacation } = useVacation();
    const disabled = name.value === '' || name.error !== '' || mobile.error !== '' || department == '' || date === '' || count === '';

    const updateNmae = value => {
        const trimmed = value.trim();
        if (trimmed == '') setName({ value, error: 'Required failed' });
        else setName({ value, error: "" });
    }

    const updateMobile = value => {
        const trimmed = value.trim();
        const valid = RegExp(/^([0-9]{0,})$/).test(trimmed);
        if (valid || trimmed == '') setMobile({ value: trimmed, error: "" });
        else setMobile({ value: trimmed, error: 'Only numbers' });
    }

    const handleConfirm = date => {
        setVisible(false);
        setDate(new Date(date));
    }

    const submit = () => {
        addVacation({ name: name.value, department, mobile: mobile.value, date, count });
        Alert.alert("Alert", "Vacation request sent successfully.", [{
            text: "Ok",
            onPress: canGoBack && goBack
        }]);
    }

    return { disabled, name, department, mobile, date, count, visible, updateNmae, updateMobile, setDepartment, setCount, setVisible, handleConfirm, submit };
}