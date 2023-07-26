import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {Fonts} from '../../../assets/Fonts';
import {Colors} from '../../../assets/Colors';

interface PropsStepThree {
  purposes: [];
  onSelectPurpose: (value: any) => void;
}

const StepThree = (props: PropsStepThree) => {
  const {onSelectPurpose} = props;

  const options = [
    {id: '1', title: 'Money transfer'},
    {id: '2', title: 'Bill payment'},
    {id: '3', title: 'Loan'},
    {id: '4', title: 'Investment'},
    {id: '5', title: 'Saving'},
  ];

  const [selectedItems, setSelectedItems] = useState(props.purposes || []);
  const renderItem = ({item}) => {
    const isSelected = selectedItems.includes(item.id);
    const handleToggleCheckbox = () => {
      setSelectedItems((prevSelectedItems: any) => {
        if (isSelected) {
          onSelectPurpose(
            prevSelectedItems.filter((id: any) => id !== item.id),
          );
          return prevSelectedItems.filter((id: any) => id !== item.id);
        } else {
          onSelectPurpose([...prevSelectedItems, item.id]);
          return [...prevSelectedItems, item.id];
        }
      });
    };

    return (
      <View style={styles.wrapSelectButton}>
        <TouchableOpacity
          onPress={handleToggleCheckbox}
          style={isSelected ? styles.btnActiveColor : styles.btnChoose}
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListConentContainer}
      />
    </View>
  );
};

export default StepThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Fonts.fontSize[12],
  },
  title: {
    marginLeft: Fonts.fontSize[6],
    fontSize: Fonts.fontSize[16],
  },
  topTitle: {
    marginBottom: 12,
    fontSize: Fonts.fontSize[18],
    fontWeight: '800',
  },
  error: {
    color: Colors.errorInput,
    lineHeight: Fonts.fontSize[20],
    marginTop: Fonts.fontSize[12],
  },
  btnChoose: {
    height: Fonts.fontSize[20],
    width: Fonts.fontSize[20],
    borderRadius: Fonts.fontSize[20],
    borderColor: Colors.black,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  btnActiveColor: {
    height: Fonts.fontSize[20],
    width: Fonts.fontSize[20],
    borderRadius: Fonts.fontSize[10],
    borderColor: '#000',
    borderWidth: 1,
    backgroundColor: Colors.blue,
  },
  wrapSelectButton: {
    flexDirection: 'row',
    marginBottom: Fonts.fontSize[10],
  },
  flatListConentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
