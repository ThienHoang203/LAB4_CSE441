import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContacts, fetchContactsReducers, getFavorites} from './store';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import ContactsRenderItem from './ContactsRenderItem';
import {selectFavorites} from './Favorite';

const keyExtractor = phone => phone;

const renderContacts = contact => {
  return <ContactsRenderItem contact={contact} />;
};

const Contacts = () => {
  const {contacts} = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchContacts()
      .then(response => {
        dispatch(fetchContactsReducers(response));
        dispatch(getFavorites(selectFavorites(response)));
      })
      .catch(e => {
        console.log(e);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={contacts}
        renderItem={({item}) => renderContacts(item)}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default Contacts;
