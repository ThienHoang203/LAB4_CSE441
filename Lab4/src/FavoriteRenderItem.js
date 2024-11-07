import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {getProfile} from './store';

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    justifyContent: 'center',
    alignItem: 'center',
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 5,
    borderColor: 'pink',
    borderRadius: '100%',
  },
});

const FavoriteRenderItem = ({contact}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {name, avatar, phone, cell, email} = contact;
  console.log('item+++++++++++++++++++++++++++++++++++++');
  console.log(name);
  console.log(avatar);
  const handlePressFavorite = () => {
    dispatch(getProfile(contact));
    return navigation.navigate('ProfileFavorite');
  };
  return (
    <TouchableOpacity onPress={handlePressFavorite} style={styles.container}>
      <FastImage
        style={styles.image}
        source={{
          uri: avatar,
          priority: FastImage.priority.low,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </TouchableOpacity>
  );
};

export default FavoriteRenderItem;
