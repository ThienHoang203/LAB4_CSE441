import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite} from './store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#0000FF',
  },
  image: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: '100%',
    marginBottom: 20,
  },
  topName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  headingPhone: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  iconHeading: {
    marginRight: 5,
    fontSize: 15,
  },
  bottomContainer: {
    flex: 5,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  detailContainer: {
    flex: 3,
    width: '100%',
    borderBottomColor: '#ccc',
    borderBottomWidth: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  iconBottom: {
    fontSize: 24,
    marginLeft: 15,
    marginRight: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  detail: {
    color: '#402EFF',
    fontWeight: '650',
    fontSize: 16,
  },
  starContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  star: {
    // borderColor: 'red',
    // borderWidth: 1,
    height: 30,
    width: 30,
    fontSize: 24,
  },
});

const ProfileContact = () => {
  const {profile} = useSelector(state => state.profile);
  const {name, avatar, email, cell, phone, favorite} = profile;
  const [pressed, setPressed] = useState(favorite);
  const dispatch = useDispatch();

  const handleOnPressIcon = ({pressedIcon, oldProfile}) => {
    if (pressedIcon) {
      const updateProfile = {
        id: oldProfile.id,
        name: oldProfile.name,
        avatar: oldProfile.avatar,
        phone: oldProfile.phone,
        cell: oldProfile.cell,
        email: oldProfile.email,
        favorite: true,
      };
      dispatch(addFavorite(updateProfile));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <FastImage
          style={styles.image}
          source={{
            uri: avatar,
            priority: FastImage.priority.low,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.topName}>{name}</Text>
        <View style={styles.headingContainer}>
          <Icon
            name="phone"
            color={'white'}
            // size={15}
            style={styles.iconHeading}
          />

          <Text style={styles.headingPhone}>{phone}</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.detailContainer}>
          <Icon
            name="email"
            color={'black'}
            size={20}
            style={styles.iconBottom}
          />

          <View>
            <Text style={styles.title}>Email</Text>
            <Text style={styles.detail}>{email}</Text>
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Icon
            name="phone"
            color={'black'}
            size={20}
            style={styles.iconBottom}
          />

          <View>
            <Text style={styles.title}>Work</Text>
            <Text style={styles.detail}>{phone}</Text>
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Icon
            name="cellphone"
            color={'black'}
            size={20}
            style={styles.iconBottom}
          />

          <View>
            <Text style={styles.title}>Personal</Text>
            <Text style={styles.detail}>{cell}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.starContainer}
          onPress={() => {
            setPressed(!pressed);
            handleOnPressIcon({pressedIcon: !pressed, oldProfile: profile});
          }}>
          <Icon
            name={pressed ? 'star-check' : 'star-check-outline'}
            color={'black'}
            size={20}
            style={styles.star}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileContact;
