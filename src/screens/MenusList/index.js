import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Share,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HeaderModal from '../../components/HeaderModal';
import {APP_PLAYSTORE_URL} from '../../config/urls';

export default function MenusList(props) {
  const {replace} = props.navigation;

  const inviteFriend = () => {
    Share.share(
      {
        url: APP_PLAYSTORE_URL,
        title: 'Best Movie App',
        message: 'Best Movie App',
      },
      {dialogTitle: 'Best Movie App', subject: 'Best'},
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollviewStyle}>
        <PrimaryTile
          title="Country"
          subTitle="United States"
          onPress={() => replace('Language')}
        />
        <PrimaryTile
          title="Language"
          subTitle="English"
          onPress={() => replace('Language')}
        />
        <View style={styles.divider} />
        <IconTile title="TV app" iconName="tv" iconSize={20} />
        <IconTile title="Mobile app" iconName="mobile" iconSize={32} />
        <IconTile
          title="Invite friends"
          iconName="share"
          iconSize={18}
          onPress={inviteFriend}
        />
        <View style={styles.divider} />
        <View style={[styles.row, styles.PV10]}>
          <IconButton name="facebook" />
          <IconButton name="twitter" />
          <IconButton name="instagram" />
        </View>
        <View style={styles.divider} />
        <SecondaryTile title="About" onPress={() => replace('About')} />
        <SecondaryTile title="Advertise" onPress={() => replace('About')} />
        <SecondaryTile title="Collaborate" onPress={() => replace('About')} />
        <SecondaryTile title="Jobs" onPress={() => replace('About')} />
        <SecondaryTile title="Contact us" onPress={() => replace('About')} />
        <SecondaryTile title="Terms of use" onPress={() => replace('About')} />
        <SecondaryTile
          title="Privacy policy"
          onPress={() => replace('About')}
        />
      </ScrollView>
    </View>
  );
}

const PrimaryTile = ({title, subTitle, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.PrimaryTileStyle, styles.row]}>
      <View style={[styles.col, {flex: 3}]}>
        <Text style={styles.PrimaryTileTitleStyle}>{title}</Text>
        <Text style={styles.PrimaryTileSubTitleStyle}>{subTitle}</Text>
      </View>
      <FontAwesomeIcon name="chevron-right" style={styles.icStyle} size={20} />
    </View>
  </TouchableOpacity>
);

const SecondaryTile = ({title, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.SecondaryTileStyle}>
      <Text style={styles.SecondaryTileTitleStyle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const IconTile = ({title, iconName, iconSize, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.IconTileStyle, styles.row]}>
      <View style={[styles.itemCenter, {width: 25, marginRight: 5}]}>
        <FontAwesomeIcon name={iconName} size={iconSize} />
      </View>
      <Text style={styles.IconTileTitleStyle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const IconButton = (props, onPress) => (
  <TouchableOpacity onPress={onPress}>
    <FontAwesomeIcon style={styles.socialIc} size={20} {...props} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  itemCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIc: {
    marginRight: 31,
  },
  scrollviewStyle: {
    paddingHorizontal: 10,
  },

  PrimaryTileStyle: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  PrimaryTileTitleStyle: {
    color: '#000000',
    fontFamily: "'VAG Rounded Next',Arial",
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  PrimaryTileSubTitleStyle: {
    color: '#333333',
    fontFamily: "'VAG Rounded Next',Arial",
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  icStyle: {
    opacity: 0.2,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    opacity: 0.2,
    marginVertical: 5,
  },
  IconTileStyle: {
    paddingVertical: 10,
  },
  IconTileTitleStyle: {
    color: '#000000',
    fontFamily: "'VAG Rounded Next',Arial",
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  IconTileICStyle: {
    width: 40,
  },
  PV10: {
    paddingVertical: 10,
  },
  SecondaryTileStyle: {
    paddingVertical: 10,
  },
  SecondaryTileTitleStyle: {
    color: '#000000',
    fontFamily: "'VAG Rounded Next',Arial",
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
