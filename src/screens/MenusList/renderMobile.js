import React from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Share,
  SafeAreaView,
  Platform,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HeaderModal from '../../components/HeaderModal';
import {APP_PLAYSTORE_URL} from '../../config/urls';
// import { SafeAreaView } from 'react-native-safe-area-context';
import primary_regular_font from '../../helper/fonts';
import {heightScale} from '../../helper/ResponsiveFonts';

export default function RenderMobile(props) {
  const {replace, navigate} = props.navigation;

  let {t} = useTranslation();

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
    <SafeAreaView style={styles.container}>
      <HeaderModal title="Menu" {...props} />
      <ScrollView contentContainerStyle={styles.scrollviewStyle}>
        <PrimaryTile
          title={t('texts.id_28')}
          subTitle="United States"
          onPress={() => navigate('Country')}
        />
        <PrimaryTile
          title={t('texts.id_31')}
          subTitle="English"
          onPress={() => navigate('Languages')}
        />
        <PrimaryTile
          title={"Titles' country version"}
          subTitle="United States"
          onPress={() => navigate('Country')}
        />
        <PrimaryTile
          title={"Titles' language version"}
          subTitle="English"
          onPress={() => navigate('Languages')}
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
          <IconButton name="facebook" onPress={() => {}} />
          <IconButton name="twitter" onPress={() => {}} />
          <IconButton name="instagram" onPress={() => {}} />
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
    </SafeAreaView>
  );
}

const PrimaryTile = ({title, subTitle, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.PrimaryTileStyle, styles.row]}>
      <View style={[styles.col, {flex: 3, flexWrap: 'wrap', flexShrink: 1}]}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.PrimaryTileTitleStyle}>
          {title}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.PrimaryTileSubTitleStyle}>
          {subTitle}
        </Text>
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
    paddingHorizontal: 20,
  },

  PrimaryTileStyle: {
    marginTop: heightScale(10),
    alignItems: 'center',
  },
  PrimaryTileTitleStyle: {
    color: '#000000',
    flexShrink: 1,
    flexWrap: 'wrap',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: 20,
    fontStyle: 'normal',
    width: '90%',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  PrimaryTileSubTitleStyle: {
    color: '#333333',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: 18,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  icStyle: {
    opacity: 0.2,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    opacity: 0.1,
    marginVertical: 5,
  },
  IconTileStyle: {
    paddingVertical: 10,
  },
  IconTileTitleStyle: {
    color: '#000000',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: 20,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  IconTileICStyle: {
    width: 40,
  },
  PV10: {
    paddingVertical: 10,
  },
  SecondaryTileStyle: {
    marginTop: heightScale(15),
  },
  SecondaryTileTitleStyle: {
    color: '#000000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: 20,
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
});
