import Input from '../../../components/Input';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import SelectDateTime from '../../../components/SelectDateTime';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

interface PropsStepTwo {
  onChangeEmail: (value: string) => void;
  onChangePhoneNumber: (value: string) => void;
  onChangeDate: (value: string) => void;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date;
}

const StepTwo = (props: PropsStepTwo) => {
  const {
    email,
    onChangeEmail,
    onChangePhoneNumber,
    phoneNumber,
    dateOfBirth,
    onChangeDate,
  } = props;
  return (
    <View style={styles.container}>
      <Input title="Email" value={email} onChangeText={onChangeEmail} />
      <Input
        title="Phone number"
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        keyboardType="number-pad"
        returnKeyType="done"
      />
      <SelectDateTime
        onChangeDate={onChangeDate}
        title="Date of Birthday"
        value={dateOfBirth}
      />
    </View>
  );
};

export default StepTwo;
