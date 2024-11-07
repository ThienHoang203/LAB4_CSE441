import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FavoriteRenderItem from './FavoriteRenderItem';

export const selectFavorites = array => {
  const newArr = [];
  for (const element of array) {
    if (element.favorite) {
      newArr.push(element);
    }
  }
  return newArr;
};

const renderItem = item => {
  return <FavoriteRenderItem contact={item} />;
};

const keyExtractor = item => item.cell;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'brown',
    borderWidth: 1,
  },
});

const Favorite = () => {
  const {favorites} = useSelector(state => state.favorites);
  console.log('favorite component');
  console.log(favorites);
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={keyExtractor}
        style={styles.list}
      />
    </View>
  );
};

export default Favorite;
