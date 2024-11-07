import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 50,
    flex: 1,
  },
  contactInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  details: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 25,
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
  subTitle: {
    color: 'blue',
    fontSize: 14,
    marginTop: 4,
  },
});

const ContactListItem = ({name, avatar, phone}) => {
  return (
    <TouchableOpacity underlayColor={'grey'} style={styles.container}>
      <View style={styles.contactInfo}>
        <Image source={require('./images/man.jpg')} style={styles.avatar} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{phone}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ContactListItem;
