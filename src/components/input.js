import React, { memo, forwardRef } from 'react';
import { StyleSheet, View, TextInput, TextInputProps, Text } from 'react-native';

const Input = forwardRef((props: TextInputProps, ref) => {
    const { error, containerStyle, multiline, inputStyle, onChangeText, onFocus } = props;

    const style = StyleSheet.create({
        container: {
            width: '85%',
            minHeight: multiline ? 100 : 50,
            justifyContent: multiline ? 'flex-start' : 'center',
            alignSelf: 'center',
            marginTop: '2%',
        },
        inputHolder: {
            width: '100%',
            backgroundColor: '#fff',
            flexDirection: 'row',
            borderRadius: 4,
            justifyContent: multiline ? 'flex-start' : 'center',
            paddingVertical: multiline ? '2%' : null,
        },
        input: {
            flex: 1,
            height: multiline ? 100 : 50,
            color: '#000',
            fontSize: 14,
            textAlign: 'left'
        },
        errorStyle: {
            fontSize: 11,
            color: 'red',
            alignSelf: 'flex-start',
        }
    });

    return (
        <>
            <View style={[style.container, containerStyle]}>
                <View style={[style.inputHolder, inputStyle]}>
                    <TextInput
                        ref={ref}
                        {...props}
                        placeholderTextColor={props.placeholderTextColor || '#000'}
                        selectionColor={"#0004"}
                        onChangeText={onChangeText}
                        onFocus={onFocus}
                        autoCorrect={false}
                        style={[style.input, props.containerStyle?.color && { color: props.containerStyle.color }]}
                    />
                </View>
                {error != '' && <Text style={style.errorStyle}>{error}</Text>}
            </View>
        </>
    );

})

export default memo(Input);