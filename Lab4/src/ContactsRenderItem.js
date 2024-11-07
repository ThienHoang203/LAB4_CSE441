import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {getProfile} from './store';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    flex: 1,
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    paddingHorizontal: 5,
    paddingVertical: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: '50%',
  },
  detailContainer: {
    flex: 4,
    paddingLeft: 15,
  },
  name: {
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 5,
  },
  phone: {
    color: '#3030FC',
    fontWeight: '650',
    fontSize: 15,
  },
});

const ContactsRenderItem = ({contact}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {name, avatar, phone, cell, email, favorite} = contact;

  const handlePressContact = () => {
    const profile = {
      name,
      avatar,
      phone,
      cell,
      email,
      favorite,
    };
    dispatch(getProfile(profile));
    return navigation.navigate('Profile');
  };
  return (
    <TouchableOpacity
      style={styles.contactContainer}
      onPress={handlePressContact}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: avatar,
            priority: FastImage.priority.low,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactsRenderItem;
