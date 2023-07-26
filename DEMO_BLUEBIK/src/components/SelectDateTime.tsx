import moment from 'moment';
import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Colors} from '../assets/Colors';
import CommonText from './Text';

interface Props {
  value: Date;
  onChangeDate: (value: any) => void;
  title: string;
}
const DateTimePicker = (Props: Props) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(Props.value);
  const openDatePicker = () => {
    setOpen(true);
  };
  const hideDatePicker = () => {
    setOpen(false);
  };
  return (
    <>
      <CommonText text={Props.title} styles={styles.title} />
      <TouchableOpacity style={styles.wrapperInput} onPress={openDatePicker}>
        <Text style={styles.dateOfBirth}>
          {date ? moment(date).format('DD/MM/YYYY') : 'Date Of Birthday'}
        </Text>
      </TouchableOpacity>
      <DatePicker
        date={new Date()}
        locale="vi"
        modal
        mode={'date'}
        onCancel={hideDatePicker}
        onConfirm={value => {
          setDate(value);
          Props.onChangeDate(value);
          hideDatePicker();
        }}
        open={open}
      />
    </>
  );
};

export default DateTimePicker;
const styles = StyleSheet.create({
  dateOfBirth: {
    opacity: 0.3,
  },
  wrapperInput: {
    height: 48,
    width: Dimensions.get('screen').width - 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.desc,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
