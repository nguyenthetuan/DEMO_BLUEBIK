import Input from '../../../components/Input';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

interface PropsStepOne {
  onChangeName: (value: string) => void;
  onChangeID: (value: string) => void;
  fullName: string;
  idNumber: string;
}

const StepOne = (props: PropsStepOne) => {
  const {fullName, onChangeName, onChangeID, idNumber} = props;
  return (
    <View style={styles.container}>
      <Input title="User name" value={fullName} onChangeText={onChangeName} />

      <Input
        title="ID number"
        value={idNumber}
        onChangeText={onChangeID}
        keyboardType="number-pad"
        returnKeyType="done"
      />
    </View>
  );
};

export default StepOne;
