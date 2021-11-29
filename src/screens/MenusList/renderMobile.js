/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Share,
  SafeAreaView,
  Platform,
  Image,
  Modal,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import {Text} from '../../components/EnhanchedComponents';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import HeaderModal from '../../components/HeaderModal';
import {APP_PLAYSTORE_URL} from '../../config/urls';
// import { SafeAreaView } from 'react-native-safe-area-context';
import primary_regular_font from '../../helper/fonts';
import {
  fontScale,
  height,
  heightScale,
  widthScale,
} from '../../helper/ResponsiveFonts';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default function RenderMobile(props) {
  const {replace, navigate} = props.navigation;
  const [visible, setVisible] = useState(false);

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
    <View style={styles.container}>
      <HeaderModal title="Menu" {...props} />
      <ScrollView
        contentContainerStyle={styles.scrollviewStyle}
        bounces={false}>
        <PrimaryTile
          title={t('texts.id_28')}
          subTitle="United States"
          onPress={() => navigate('Country')}
          style={{marginTop: 0}}
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
        <View style={[styles.divider, {marginTop: heightScale(12)}]} />
        <IconTile
          title="TV app"
          iconPath={require('../../../assets/Icons/tv_ic.png')}
          iconSize={20}
          style={{marginTop: heightScale(12)}}
          onPress={() => setVisible(true)}
        />
        <IconTile
          title="Mobile app"
          iconPath={require('../../../assets/Icons/mobile_ic.png')}
          iconSize={18}
        />
        <IconTile
          title="Invite friends"
          iconPath={require('../../../assets/Icons/share_ic.png')}
          iconSize={19}
          onPress={inviteFriend}
        />
        <View style={[styles.divider, {marginTop: heightScale(9)}]} />
        <View style={[styles.row, {marginTop: heightScale(13)}]}>
          <IconButton
            name="facebook"
            onPress={() => {}}
            style={{width: widthScale(20)}}
          />
          <IconButton
            name="twitter"
            onPress={() => {}}
            style={{width: widthScale(20)}}
          />
          <IconButton
            name="instagram"
            onPress={() => {}}
            style={{width: widthScale(24)}}
          />
        </View>
        <View style={[styles.divider, {marginTop: heightScale(14)}]} />
        <SecondaryTile
          title="About"
          onPress={() => replace('About')}
          style={{marginTop: heightScale(13)}}
        />
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
      <TVPlatformScreenModal
        isVisible={visible}
        onHide={() => setVisible(false)}
      />
    </View>
  );
}

const TVPlatformScreenModal = ({isVisible, onHide}) => {
  const CELL_COUNT = 5;
  const [value, setValue] = useState('12345');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [codeFieldProps, getCellOnLayout] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      statusBarTranslucent={true}
      animationType="none">
      <TouchableWithoutFeedback onPress={onHide}>
        <View style={[styles.shadowView]} />
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView
        style={styles.ModalWrapper}
        behavior="padding"
        keyboardVerticalOffset={0}>
        <View style={[styles.Modal]}>
          <View style={styles.modalTitleContainer}>
            <Text style={styles.modalTitle}>
              Connect TV app to your account
            </Text>
          </View>
          <View style={styles.modalSection}>
            <Text style={styles.modalSectionText}>
              1. Download the Best-Movies TV app on your TV using Google TV,
              Apple TV or Amazon Fire TV.
            </Text>
            <Text />
            <Text />
            <Text style={styles.modalSectionText}>
              2. Open the TV app, go to Log in, and obtain your 5-character
              code.
            </Text>
            <Text />
            <Text />
            <Text style={styles.modalSectionText}>
              3. Enter the 5-characted code below:
            </Text>
          </View>
          <View style={styles.codeFieldContainer}>
            <CodeField
              ref={ref}
              {...codeFieldProps}
              rootStyle={styles.codeFieldRoot}
              cellCount={CELL_COUNT}
              value={value}
              onChangeText={setValue}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <View style={styles.optBox}>
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayout(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                  <View style={styles.line} />
                </View>
              )}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const PrimaryTile = ({title, subTitle, onPress, style}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.PrimaryTileStyle, styles.row, style]}>
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

const SecondaryTile = ({title, onPress, style}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.SecondaryTileStyle, style]}>
      <Text style={styles.SecondaryTileTitleStyle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const IconTile = ({title, iconPath, iconSize, onPress, style}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.IconTileStyle, styles.row, style]}>
      <View
        style={[
          styles.itemCenter,
          {marginRight: widthScale(8), marginLeft: heightScale(1)},
        ]}>
        {/* <FontAwesomeIcon name={iconName} size={iconSize} /> */}
        <Image
          source={iconPath}
          resizeMode="contain"
          style={{width: widthScale(iconSize), height: widthScale(iconSize)}}
        />
      </View>
      <Text style={styles.IconTileTitleStyle}>{title}</Text>
    </View>
  </TouchableOpacity>
);

const IconButton = (props, onPress, style) => (
  <TouchableOpacity style={[styles.socialIc, style]} onPress={onPress}>
    <FontAwesomeIcon size={props.size || widthScale(20)} {...props} />
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
    marginRight: widthScale(31),
    height: heightScale(20),
  },
  scrollviewStyle: {
    paddingHorizontal: widthScale(20),
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
    fontSize: fontScale(18),
    fontStyle: 'normal',
    width: '90%',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  PrimaryTileSubTitleStyle: {
    color: '#333333',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(16),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  icStyle: {
    opacity: 0.2,
  },
  divider: {
    height: heightScale(3),
    width: '100%',
    backgroundColor: 'gray',
    opacity: 0.1,
    marginVertical: 5,
  },
  IconTileStyle: {
    position: 'relative',
    marginTop: heightScale(14),
    height: heightScale(27),
    alignItems: 'center',
  },
  IconTileTitleStyle: {
    color: '#000000',
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(18),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
    position: 'absolute',
    left: 27,
  },
  IconTileICStyle: {
    width: 40,
  },
  PV10: {
    paddingVertical: 10,
  },
  SecondaryTileStyle: {
    marginTop: heightScale(15),
    height: heightScale(27),
  },
  SecondaryTileTitleStyle: {
    color: '#000000',
    fontFamily: primary_regular_font.primary_regular_font,
    fontSize: fontScale(18),
    fontStyle: 'normal',
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  shadowView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.2,
    backgroundColor: '#000',
  },
  ModalWrapper: {
    marginTop: 'auto',
  },
  Modal: {
    backgroundColor: '#fff',
    height: heightScale(447),
    paddingHorizontal: widthScale(10),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingVertical: 10,
    elevation: 10,
  },
  modalTitleContainer: {
    width: widthScale(355),
    height: heightScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightScale(20),
  },
  modalTitle: {
    fontFamily: primary_regular_font.primary_bold_font,
    fontSize: fontScale(22),
    color: '#ff3300',
    ...(Platform.OS === 'ios' && {
      fontWeight: '700',
    }),
  },
  modalSection: {
    width: widthScale(335),
    height: heightScale(267),
    marginTop: heightScale(5),
    justifyContent: 'center',
  },
  modalSectionText: {
    color: '#000',
    fontSize: fontScale(20),
    fontFamily: primary_regular_font.primary_regular_font,
    ...(Platform.OS === 'ios' && {
      fontWeight: '400',
    }),
  },
  codeFieldContainer: {},
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  optBox: {
    width: widthScale(54),
    height: heightScale(55),
    backgroundColor: '#ff3300',
    marginRight: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    fontSize: fontScale(20),
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
  },
  line: {
    // position: 'absolute',
    width: 15,
    height: 1,
    backgroundColor: '#fff',
  },
  focusCell: {
    borderColor: '#000',
  },
});
