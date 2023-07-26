import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import StepOne from './components/StepOne';
import StepTwo from './components/stepTwo';
import StepThree from './components/StepThree';
import Button from '../../components/Button';

const UserInformation = () => {
  const [stept, setStept] = useState<number>(0);
  const [fullName, setFullName] = useState<string>('');
  const [idNumber, setIdNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [purposes, setPurposes] = useState<string[]>([]);

  const [error, setError] = useState<onboarding.error>({
    fullName: '',
    idNumber: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    purpose: '',
  });

  const onPressNext = () => {
    if (stept <= 1) {
      setStept(stept + 1);
    }
  };

  const onChangeName = (value: string) => {
    setFullName(value);
    if (error.fullName) {
      setError({...error, fullName: ''});
    }
  };

  const onChangeEmail = (value: string) => {
    setEmail(value);
    if (error.email) {
      setError({...error, email: ''});
    }
  };

  const onChangePhoneNumber = (value: string) => {
    setPhoneNumber(value);
    if (error.phoneNumber) {
      setError({...error, phoneNumber: ''});
    }
  };

  const onChangeDateOfBirth = (value: string) => {
    setDateOfBirth(value);
    if (error.dateOfBirth) {
      setError({...error, dateOfBirth: ''});
    }
  };

  const onChangeID = (value: string) => {
    setIdNumber(value);
    if (error.idNumber) {
      setError({...error, idNumber: ''});
    }
  };

  const onSelectPurPoses = (value: any) => {
    setPurposes(value);
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        key={stept}
        index={stept}
        autoplay={false}
        removeClippedSubviews={true}
        scrollEnabled={false}
        onIndexChanged={value => setStept(value)}>
        <StepOne
          idNumber={idNumber}
          onChangeID={onChangeID}
          fullName={fullName}
          onChangeName={onChangeName}
        />
        <StepTwo
          email={email}
          dateOfBirth={dateOfBirth}
          phoneNumber={phoneNumber}
          onChangeDate={onChangeDateOfBirth}
          onChangeEmail={onChangeEmail}
          onChangePhoneNumber={onChangePhoneNumber}
        />
        <StepThree purposes={purposes} onSelectPurpose={onSelectPurPoses} />
      </Swiper>
      <View style={styles.wrapperButton}>
        <Button text={stept !== 2 ? 'Next' : 'Finish'} onPress={onPressNext} />
      </View>
    </View>
  );
};

export default UserInformation;
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: '#fff',
    width: (2 * width) / 3,
    marginTop: 10,
    height: 40,
    justifyContent: 'center',
  },
  wrapper: {},
  wrapperButton: {
    paddingVertical: 40,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dateOfBirth: {
    opacity: 0.3,
  },
});
