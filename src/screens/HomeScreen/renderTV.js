import React, {useState, useRef, useEffect, } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  FlatList,
  Pressable,
  Image,
  Platform,
} from 'react-native';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/core';
import i18next from 'i18next';

import TVHeader from '../../components/TV/TVHeader';
import TVTopBar from '../../components/TV/TVTopBar';
import TVSideBar from '../../components/TV/TVSideBar';
import TVCountryLanguage from '../../components/TV/TVCountryLanguage';
import TVSIdeBarFlatList from '../../components/TV/TVSIdeBarFlatList';
import TVTileView from '../../components/TV/TVTileView';
import TVMovieListItem from '../../components/TV/TVMovieListItem';
import TVSearchListItem from '../../components/TV/TVSearchListItem';
import TVSortByModal from '../../components/TV/TVSortByModal';
import TVLikedByModal from '../../components/TV/TVLikedByModal';
import TVStreamingModal from '../../components/TV/TVStreamingModal';
import TVAgesModal from '../../components/TV/TVAgesModal';
import TVReleaseModal from '../../components/TV/TVReleaseModal';
import TVCountryModal from '../../components/TV/TVCountryModal';
import TVGenreModal from '../../components/TV/TVGenreModal';
import TVPriceModal from '../../components/TV/TVPriceModal';
import TVProvidersModal from '../../components/TV/TVProvidersModal';
import TVIncludeModal from '../../components/TV/TVIncludeModal';
import TVKeyboard from '../../components/NumberButtons/';
import MoviesJSON from '../../components/TV/movies.json';
import primary_regular_font from '../../helper/fonts';
import AppImages from '../../assets';

import colors from '../../helper/colors';
const {width, height} = Dimensions.get('window');
import StyleConfig from '../../helper/StyleConfig';
import strings from '../../helper/strings';
import {ScrollView, State} from 'react-native-gesture-handler';
import Const from '../../helper/constants';
import TVCardDetail from '../../components/TV/TVCardDetail';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getTranslateFile} from '../../network/requests';
import transConstants from '../../helper/transConstants';
import {useTranslation} from 'react-i18next';
import {runTimeTranslations} from '../../i18n';
import {HEIGHT, WIDTH} from '../../helper/globalFunctions';
import TVCountyList from '../../components/TV/TVCountyList';
import {endPoints} from '../../network/endPoints';
import Movies from '../Movies';
import TVShow from '../TVShow';

let [
  NONE,
  SEARCH,
  MY_LIST,
  MOVIES,
  TV_SHOW,
  SHORTS,
  DIRECTOR,
  ACTOR,
  PROFILE,
  MENU,
] = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
// let [ABOUT_US, ADVERTISE, COLLABORATE, JOBS, TERMS_OF_USE, PRIVACY_POLICY ] = [11, 12, 13, 14, 15, 16]
let [
  COUNTRY_LANGUAGE,
  MOBILE_APP,
  INVITE_FRIEND,
  ABOUT_US,
  ADVERTISE,
  COLLABORATE,
  JOBS,
  TERMS_OF_USE,
  PRIVACY_POLICY,
] = [9, 10, 11, 12, 13, 14, 15, 16, 17];

let [NOTIFICATION, FRIENDS, PREFERANCE, MY_PROVIDER, ACCOUNT, LANGUAGE] = [
  21, 22, 23, 24, 25, 26,
];
let [
  SORT_BY,
  LIKEDBY,
  STRREAMING,
  RELEASE,
  GENRE,
  COUNTRY,
  AGES,
  PRICE,
  INCLUDES,
  PROVIDERS,
] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ADVERTISE_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.advertise} : item,
);
const COLLABORATE_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.collaborate} : item,
);
const JOBS_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.jobs} : item,
);
const TERMS_OF_USE_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.terms_of_use} : item,
);
const PRIVACY_POLICY_DATA = Const.ABOUT_US.map((item) =>
  item.id == 2 ? {...item, data: strings.privacy_policy} : item,
);
const MENU_DATA = [
  // {
  //   key: COUNTRY_LANGUAGE,
  //   title: strings.country_language,
  // },
  // {
  //   key: MOBILE_APP,
  //   title: 'texts.id_16',
  // },
  // {
  //   key: INVITE_FRIEND,
  //   title: 'texts.id_18',
  // },
  // {
  //   key: ABOUT_US,
  //   title: strings.about_us,
  // },
  // {
  //   key: ADVERTISE,
  //   title: strings.advertise,
  // },
  {
    key: COLLABORATE,
    title: strings.collaborate,
  },
  {
    key: JOBS,
    title: strings.jobs,
  },
  {
    key: TERMS_OF_USE,
    title: strings.terms_of_use,
  },
  {
    key: PRIVACY_POLICY,
    title: strings.privacy_policy,
  },
];
const buttons = [
  [
    {id: 1, value: 'a'},
    {id: 2, value: 'b'},
    {id: 3, value: 'c'},
    {id: 4, value: 'd'},
    {id: 5, value: 'e'},
    {id: 6, value: 'f'},
  ],
  [
    {id: 7, value: 'g'},
    {id: 8, value: 'h'},
    {id: 9, value: 'i'},
    {id: 10, value: 'j'},
    {id: 11, value: 'k'},
    {id: 12, value: 'l'},
  ],
  [
    {id: 13, value: 'm'},
    {id: 14, value: 'n'},
    {id: 15, value: 'o'},
    {id: 16, value: 'p'},
    {id: 18, value: 'q'},
    {id: 19, value: 'r'},
  ],
  [
    {id: 20, value: 's'},
    {id: 21, value: 't'},
    {id: 22, value: 'u'},
    {id: 23, value: 'v'},
    {id: 24, value: 'w'},
    {id: 25, value: 'x'},
  ],
  [
    {id: 26, value: 'y'},
    {id: 27, value: 'z'},
    {id: 28, value: '1'},
    {id: 29, value: '2'},
    {id: 30, value: '3'},
    {id: 31, value: '4'},
  ],
  [
    {id: 33, value: '5'},
    {id: 34, value: '6'},
    {id: 35, value: '7'},
    {id: 36, value: '8'},
    {id: 37, value: '9'},
    {id: 38, value: '0'},
  ],
  [
    {id: 39, value: AppImages.back_bk},
    {id: 40, value: AppImages.next_bk},
    {id: 41, value: AppImages.space},
    {id: 42, value: AppImages.delete},
    {id: 43, value: AppImages.delete_all},
    
  ],

  // ['g', 'h', 'i', 'j', 'k', 'l'],

  // ['m', 'n', 'o', 'p', 'q', 'r'],

  // ['s', 't', 'u', 'v', 'w', 'x'],

  // ['y', 'z', '1', '2', '3', '4'],

  // ['5', '6', '7', '8', '9', '0'],
  // [
  //   AppImages.back_bk,
  //   AppImages.next_bk,
  //   AppImages.space,
  //   AppImages.delete,
  //   AppImages.delete_all,
  // ],
];
const posts_json = MoviesJSON.data.children.map((child) => child.data);

const RenderTV = ({posts, modalVisible, selectedImage, ...props}) => {
  const {t, i18n} = useTranslation();

  let onEndReachedCalledDuringMomentum = false;
  const [topSelected, setTopSelected] = useState(0);
  const [page, setPage] = useState(1);
  const [tvShortsPage, setTvShortsPage] = useState(1);
  const [tvShowPage, setTvShowsPage] = useState(1);

  const [language, setLanguage] = useState('en');

  const [selected, setSelected] = useState(MOVIES);
  const [movies, setMovies] = useState([]);
  const [moviesSearch, setMoviesSearch] = useState([]);

  const [tvShoes, setTVShoes] = useState([]);
  const [shorts, setTVShorts] = useState([]);
  const [provider, setProviders] = useState('');
  const [generes, setGeneras] = useState('');

  const [selectedItem, setSelectedItem] = useState(posts ? posts[0] : null);
  const [showSelected, setShowSelected] = useState(NONE);
  const sidebar = useRef();
  const header = useRef();
  // const [text, setText] = useState('sadad');
  const [text, onChangeText] = React.useState(null);
  let _tvEventHandler;
  // console.log('onChangeSelected', selected);

  // const _enableTVEventHandler =()=> {
  //   this._tvEventHandler = new TVEventHandler();
  //   this._tvEventHandler.enable(this, function (cmp, evt) {
  //     if(evt.eventType != "blur" && lastPerformed != "blur"){
  //       console.log("_enableTVEventHandler=>",evt.eventType, evt)
  //       if (evt && evt.eventType === 'right') {
  //         posts.length && setSelectedItem(posts[0])
  //       } else if (evt && evt.eventType === 'up') {
  //         console.log("up")
  //         sidebar?.current?.setResetFocus()
  //         header?.current?.setChangeFocus(0)
  //       } else if (evt && evt.eventType === 'left') {
  //         console.log("left")
  //       } else if (evt && evt.eventType === 'down') {
  //         console.log("down")
  //         posts.length && setSelectedItem(posts[0])
  //       } else if (evt && evt.eventType === 'playPause') {
  //         console.log(evt.eventType)
  //       }

  //     }

  //     lastPerformed = evt.eventType

  //   });
  // }
  useFocusEffect(() => {
    let lng = i18n.language;
    console.log('CountryDataaasasassadadfasaffq', lng);
   
  });
  useEffect(() => {
    //   _enableTVEventHandler()
    // componentWillUnmount
    console.log('propsssss', props);
    props.getTranslateFile(
      (res) => {
        console.log('Response from translate api', res);
        getMovies();

        runTimeTranslations(res, res?.language);

      },
      (err) => {
        console.log('Error from translate file', err);
      },
    );
    return () => {
      // Your code here
      //  if (this._tvEventHandler) {
      //   this._tvEventHandler.disable();
      //   delete this._tvEventHandler;
      // }
    };
  }, []);
  const getMovies = (lan,sort,provdersId,generes,age,price,offset,t_country,t_lang) =>{
    
    let provider = provdersId ? provdersId : '';
    let sort_id = sort ? sort : '';
    let generes_code = generes ? generes : '';
    let ages = age ? age : '';
    let prices = price ? price : '';
    let offset_page = offset ? 1 : page;
    let title_country = t_country ? t_country : '';
    let title_lang = t_lang ? t_lang : '';


let url = 'device=tv&type=m&output=ove&offset='+offset_page+provider+prices+'&t_lang='+language+sort_id+generes_code+ages+'&limit=' + 20
    axios
    .get(endPoints.TITLE_BASE_URL+endPoints.title+url,{
      headers: {
        't_lang': title_lang,
        't_country' : title_country,
      }
    })
    .then(function (response) {
      // handle success
      // setAboutUsData(response.data.data.static_pages);
      
      if(response.data.data.length > 0){
      setMovies(response.data.data)

      setMovies(page === 1 ? response.data.data : [...movies, ...response.data.data])
      setMoviesSearch(response.data.data)
      // getTVShows('',sort_id,provider,generes_code,ages,prices);
      // getShorts('',sort_id,provider,generes_code,ages,prices);
      console.log(response);
      setPage(page+1);
      }else{
      setMovies([])
      setPage(1);

      }

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  const getTVShows = (lan,sort,provdersId,generes,age,price) =>{
    let provider = provdersId ? provdersId : '';
    let sort_id = sort ? sort : '';
    let generes_code = generes ? generes : '';
    let ages = age ? age : '';
    let prices = price ? price : '';

let url = 'device=tv&type=t&output=ove&offset='+tvShowPage+provider+prices+'&t_lang='+language+sort_id+generes_code+ages+'&limit=' + 20
    axios
    .get(endPoints.TITLE_BASE_URL+endPoints.title+url,{
      headers: {
        't_lang': lan ? lan : language
      }
    })
    .then(function (response) {
      // handle success
      // setAboutUsData(response.data.data.static_pages);
      if(response.data.data.length > 0){
        // page === 1 ? response.data.data : [...movies, ...response.data.data]
      setTVShoes(tvShowPage === 1 ? response.data.data : [...tvShoes, ...response.data.data])
      setTvShowsPage(tvShowPage+1);

      console.log(response);
      }else{
      setTVShoes([])
      setTvShowsPage(1);

      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  const getShorts =  (lan,sort,provdersId,generes,age,price) =>{
    let provider = provdersId ? provdersId : '';
    let sort_id = sort ? sort : '';
    let generes_code = generes ? generes : '';
    let ages = age ? age : '';
    let prices = price ? price : '';

let url = 'device=tv&type=s&output=ove&offset='+tvShortsPage+provider+prices+'&t_lang='+language+sort_id+generes_code+ages+'&limit=' + 20
    axios
    .get(endPoints.TITLE_BASE_URL+endPoints.title+url,{
      headers: {
        't_lang': lan ? lan : language
      }
    })
    .then(function (response) {
      // handle success
      // setAboutUsData(response.data.data.static_pages);
      if(response.data.data.length > 0){
        setTVShorts(tvShortsPage === 1 ? response.data.data : [...shorts, ...response.data.data])
        setTvShortsPage(tvShortsPage+1)

        console.log(response);
        }else{
          setTVShorts([])
        setTvShortsPage(1)

        }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }


  const getSearch = () =>{
    axios
    .get('http://18.119.119.183:3003/titles?device=tv&&output=bas&limit='+20+'&title='+text)
    .then(function (response) {
      // handle success
      // setAboutUsData(response.data.data.static_pages);
      setMoviesSearch(response.data.data)
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  onTileViewFocus = () => {
    // sidebar.current.setResetFocus()
    header?.current?.setResetFocus();
  };

  onSideBarFocus = (val) => {
    // console.log("onSideBarFocus-")
    sidebar?.current?.setChangeFocus(val);
  };
  const oncloseModal = (val) => {
    // console.log("home-",props);
    // console.log("state-",state);

    setShowSelected(NONE);
    onSideBarFocus(val);
  };

  const onPressClick = (val,type) => {
    let sort = '';
    let where = '';
    let gener = '';
    let age = '';
    let price = '';
    let offset = 1;
    let t_country= '';
    let t_lang= '';

    // setPage(0);

    if(val === SORT_BY){
      // console.log(SORT_BY);
      if(type.id === 0){
        sort = '&sort=r';
      }else if(type.id === 1){
        sort = '&sort=m';
      }else if(type.id === 2){
        sort = '&sort=f';
      }else if(type.id === 3){
        sort = '&sort=p';
      }
      // sort '&genre='+code;
      // sort = type.id == 0 ? 'r' :'m'
    }else if(val === STRREAMING){
      where  = provider;
      where += '&provider='+type.provider_id;
      setProviders(where)
    }else if(val === RELEASE){
      console.log(RELEASE);

    }else if(val === GENRE){
      let [temp, code] = type.split('_');
      console.log(code);
      gener = generes;
      gener += '&genre='+code;
      setGeneras(gener);
    }else if(val === COUNTRY){
      let [temp, code] = type[0].split('_');
      t_country = type[1];
      t_lang = code
      console.log(code);
    }else if(val === AGES){
      age= '&age='+type.ages;
      console.log(AGES);
    }else if(val === PRICE){
      let [temp,prices] = type.name.split('$');
      // price =temp;
      price = '&price='+prices;
      console.log(prices);
    }
    
   
    setTopSelected(val);
    getMovies('',sort,where,gener,age,price,offset,t_country,t_lang);
    console.debug(' onPressClick value>>>>>dasfgasdbgvsfd', val);
  };

  function _handleEvent(value) {
    console.debug('value)))))00000', value);
    let data = '';
    if (value == 45) {
      //right arrw search api
      // data = text.slice(0, -1);
     } else if (value == 33) {
      data = text.slice(0, -1);
    } else if (value == 29) {
      let str = text;
      str = str.substring(0, str.length - 1);
      data = str;
    } else if (value == 30) {
      data = text;
      data = '';
    } else if (value == 12) {
      data = text == null ? value : text + '\n';
    } else if (value == 13) {
      data = text.slice(0, -1);
    } else if (value == 31) {
      data = null;
    } else {
      data = text == null ? value : text + value;
    }
    onChangeText(data);
    if(data.length >= 3){
      getSearch()
    }
  }
  const loadMoreRandomData = () =>{
    onEndReachedCalledDuringMomentum = false;
    console.log('called');
    // this.setState({page:this.state.page+1},
    //   ()=>
    if(selected === MOVIES){
      getMovies()
    }
    if(selected === SHORTS){
      getShorts()
    }
    if(selected === TV_SHOW){
      getTVShows()
    }
  
  //  )
  }
  
  // console.log({selected, ADVERTISE_DATA})
  return (
    <View style={{backgroundColor: colors.white}}>
      <TVHeader
        style={{height: 400}}
        {...props}
        ref={header}
        selected={selected}
        onChangeSelected={(val) => {
          let lng = i18n.language;
          console.log('CountryDataaasasassadadfasaffq', lng);
          if(val ==2 ){
          setPage(1);
            setLanguage(language);
            getMovies(lng);
          }
          setSelected(val);
          if(val === SHORTS){
          setTvShortsPage(1)

            getShorts();
          }
          if(val === TV_SHOW){
          setTvShowsPage(1);
            getTVShows();
          }
          if (val == MENU) {
            // setShowSelected(ADVERTISE);
            sidebar.current.setResetFocus()
          }
        }}
      />
      <View
        hasTVPreferredFocus={true}
        style={{
          flexDirection: 'column',
          backgroundColor: colors.white,
        }}>
        <TVTopBar
          topSelected={topSelected}
          selected={showSelected == SORT_BY}
          ref={sidebar}
          headerSelected={selected}
          {...props}
          onChangeSelected={(val) => {
            console.log('onChangeSelected', val);
            setShowSelected(val);
          }}
        />

        {/* { selected != SEARCH &&
          <TVTopBar ref={sidebar} headerSelected={selected} hasTVPreferredFocus={true} {...props}  onChangeSelected={(val)=> setShowSelected(val) }/>
          } */}
        {selected == SEARCH && (
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: StyleConfig.resWidth(500),
                marginTop: isAndroid() ? 30 : 100,
                marginRight: 20,
                marginLeft: 10,
              }}>
              {/* <View style={{flexDirection:'row',marginBottom:10}} >
                  <View style={styles.title}>

                        <Text style={styles.titleText}>Title</Text>
                  </View>
                  <View style={styles.artist}>
                  <Text style={{fontSize: isAndroid() ? 14: 28,fontWeight:'400',color:colors.black}}>Artist</Text>

                  </View>
                  <View style={styles.artist}>
                  <Text style={{fontSize: isAndroid() ? 14: 28,fontWeight:'400',color:colors.black}}>User</Text>
                  </View>
              </View> */}

              <View style={styles.tetxInputLayout}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 0.1, alignSelf: 'center'}}>
                    <Image style={styles.search} source={AppImages.icSearch} />
                  </View>
                  {/* <TextInput
                      placeholder={strings.search}
                      placeholderTextColor={colors.black}
                      keyboardType={strings.email_address}
                      style={{backgroundColor:colors.lightGrey, flex:0.8,alignSelf:'center',fontSize:34,fontFamily:primary_regular_font.primary_regular_font,fontWeight:'700'}}
                      onChangeText={text => setText(text)}
                    /> */}
                  <TextInput
                    onSelectionChange={(event) =>
                      console.log(
                        'onSelectionChange',
                        event.nativeEvent.selection,
                      )
                    }
                    placeholderTextColor={colors.black}
                    placeholder={t('texts.id_20')}
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    value={text}
                  />
                  <View
                    style={{marginStart: 10, flex: 0.1, alignSelf: 'center'}}>
                    <Image style={styles.mic} source={AppImages.micro} />
                  </View>
                </View>
              </View>

              <TVKeyboard
                //  onFocusedItem={(item)=> setSelectedItem(item)}
                hasTVPreferredFocus={true}
                onBtnPress={_handleEvent}
                buttons={buttons}
                {...props}
              />
            </View>

            <FlatList
              contentContainerStyle={{paddingBottom: 1000}}
              hasTVPreferredFocus={true}
              data={moviesSearch}
              numColumns={4}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => (
                <TVSearchListItem
                  item={item}
                  onFocusedItem={(item) => setSelectedItem(item)}
                  {...props}
                />
              )}
            />
          </View>
        )}
        {selected == MY_LIST && (
          <View hasTVPreferredFocus={true}>
            {/* <TVTileView type={selected} onFocus={onTileViewFocus} item={selectedItem} hasTVPreferredFocus={true} /> */}
            <View
              hasTVPreferredFocus={true}
              style={{height: StyleConfig.resHeight(900), borderWidth: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: isAndroid() ? 5 : 10,
                  backgroundColor: colors.white,
                  marginHorizontal: 10,
                  justifyContent: 'center',
                  alignContent: 'center',
                }}>
                <Text 
                        ellipsizeMode="tail"

                numberOfLines={1} style={styles.ranking}>
                  {t('texts.id_78')}
                </Text>
                <Text numberOfLines={1}
                        ellipsizeMode="tail"

                 style={styles.result}>
                  {' '}
                  12,348 {t('texts.id_91')}{' '}
                </Text>
              </View>
              <FlatList
                hasTVPreferredFocus={true}
                //  contentContainerStyle={{paddingBottom:50}}
                keyExtractor={(item, index) => `item${index}`}
                numColumns={5}
                data={posts}
                renderItem={({item}) => (
                  <TVMovieListItem
                    item={item}
                    {...props}
                    type="movie"
                    selected={MY_LIST}
                  />
                )}
              />
            </View>
          </View>
        )}

        {selected == MOVIES && (
          <View
            style={[{flex: 1, backgroundColor: colors.white}]}
            hasTVPreferredFocus={true}>
            {/* <TVTileView type={selected} onFocus={onTileViewFocus} item={selectedItem} hasTVPreferredFocus={true} /> */}
            <View
              hasTVPreferredFocus={true}
              style={{
                backgroundColor: colors.white,
                height: StyleConfig.resHeight(900),
              }}>
              <View
                style={{
                  // borderWidth:1,
                  flexDirection: 'row',
                marginTop: StyleConfig.resHeight(20),
                  // marginVertical: ,
                  backgroundColor: colors.white,
                  marginHorizontal: StyleConfig.resWidth(20),
                }}>
                <Text numberOfLines={1} style={styles.ranking}>
                  {t('texts.id_78')}
                </Text>
                <Text numberOfLines={1} style={styles.result}>
                  {' '}
                  12,348 {t('texts.id_91')}{' '}
                </Text>
              </View>
              <FlatList
                style={{marginStart: 10}}
                hasTVPreferredFocus={true}
                // contentContainerStyle={{paddingBottom: 50}}
                keyExtractor={(item, index) => `item${index}`}
                numColumns={5}
                extraData={movies}
                data={movies}
                renderItem={({item}) => (
                  <TVMovieListItem
                    item={item}
                    {...props}
                    type="movie"
                    selected={MOVIES}
                  />
                )}
                // keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={0.5}
                onMomentumScrollBegin = {() => {onEndReachedCalledDuringMomentum = false;}}
                onEndReached ={() => loadMoreRandomData('test string')}
              />
            </View>
          </View>
        )}

        {selected == TV_SHOW && (
          <View
            style={[{flex: 1, backgroundColor: colors.white}]}
            hasTVPreferredFocus={true}>
            {/* <TVTileView type={selected} onFocus={onTileViewFocus} item={selectedItem} hasTVPreferredFocus={true} /> */}
            <View
              hasTVPreferredFocus={true}
              style={{
                backgroundColor: colors.white,
                height: StyleConfig.resHeight(900),
              }}>
              <View
                style={{
                  // borderWidth:1,
                  flexDirection: 'row',
                marginTop: StyleConfig.resHeight(20),
                  // marginVertical: ,
                  backgroundColor: colors.white,
                  marginHorizontal: StyleConfig.resWidth(20),
                }}>
                <Text numberOfLines={1} style={styles.ranking}>
                  {t('texts.id_78')}
                </Text>
                <Text numberOfLines={1} style={styles.result}>
                  {' '}
                  12,348 {t('texts.id_91')}{' '}
                </Text>
              </View>
              <FlatList
                style={{marginStart: 10}}
                hasTVPreferredFocus={true}
                contentContainerStyle={{paddingBottom: 50}}
                keyExtractor={(item, index) => `item${index}`}
                numColumns={5}
                data={tvShoes}
                renderItem={({item}) => (
                  <TVMovieListItem
                    item={item}
                    {...props}
                    type="movie"
                    selected={TV_SHOW}
                  />
                )}
                onEndReachedThreshold={0.5}
                onMomentumScrollBegin = {() => {onEndReachedCalledDuringMomentum = false;}}
                onEndReached ={() => loadMoreRandomData('test string')}
              />
            </View>
          </View>
        )}
        {selected == SHORTS && (
          <View
            style={[{flex: 1, backgroundColor: colors.white}]}
            hasTVPreferredFocus={true}>
            {/* <TVTileView type={selected} onFocus={onTileViewFocus} item={selectedItem} hasTVPreferredFocus={true} /> */}
            <View
              hasTVPreferredFocus={true}
              style={{
                backgroundColor: colors.white,
                height: StyleConfig.resHeight(900),
              }}>
              <View
                style={{
                  // borderWidth:1,
                  flexDirection: 'row',
                marginTop: StyleConfig.resHeight(20),
                  // marginVertical: ,
                  backgroundColor: colors.white,
                  marginHorizontal: StyleConfig.resWidth(20),
                }}>
                <Text numberOfLines={1} style={styles.ranking}>
                  {t('texts.id_78')}
                </Text>
                <Text numberOfLines={1} style={styles.result}>
                  {' '}
                  12,348 {t('texts.id_91')}{' '}
                </Text>
              </View>
              <FlatList
                style={{marginStart: 10}}
                hasTVPreferredFocus={true}
                contentContainerStyle={{paddingBottom: 50}}
                keyExtractor={(item, index) => `item${index}`}
                numColumns={5}
                data={shorts}
                renderItem={({item}) => (
                  <TVMovieListItem
                    item={item}
                    {...props}
                    type="movie"
                    selected={SHORTS}
                  />
                )}
                onEndReachedThreshold={0.5}
                onMomentumScrollBegin = {() => {onEndReachedCalledDuringMomentum = false;}}
                onEndReached ={() => loadMoreRandomData('test string')}
              />
            </View>
          </View>
        )}
        {selected == MENU && (
          <View
            style={[{flex: 1, backgroundColor: colors.white}]}
            hasTVPreferredFocus={true}>
            {/* <TVTileView type={selected} onFocus={onTileViewFocus} item={selectedItem} hasTVPreferredFocus={true} /> */}
            <View
              hasTVPreferredFocus={true}
              style={{
                flexDirection:'row',
                backgroundColor: colors.white,
                height: StyleConfig.resHeight(900),
              }}>
                 <FlatList
                style={{marginStart: 10}}
                hasTVPreferredFocus={true}
                contentContainerStyle={{paddingBottom: 50}}
                keyExtractor={(item, index) => `item${index}`}
                // numColumns={5}
                data={MENU_DATA}
                renderItem={({item}) => (
                  <TVSIdeBarFlatList
                    item={item}
                    {...props}
                    type="movie"
                    selected={MENU}
                    onChangeSelected={(val) => {
                      console.log('onChangeSelected', val);
                      setShowSelected(val);
                    }}
                  />
                )}
                onEndReachedThreshold={0.5}
                onMomentumScrollBegin = {() => {onEndReachedCalledDuringMomentum = false;}}
                onEndReached ={() => loadMoreRandomData('test string')}
              />
              <View
                style={{
                  borderWidth:1,
                  // flexDirection: 'row',
                marginTop: StyleConfig.resHeight(20),
                  // marginVertical: ,
                  backgroundColor: colors.white,
                  marginHorizontal: StyleConfig.resWidth(20),
                }}>
                  
                  {selected == MENU && showSelected == COLLABORATE && (
          // <View  >
             <FlatList
                style={{marginStart: 10}}
                hasTVPreferredFocus={true}
                contentContainerStyle={{paddingBottom: 50}}
                keyExtractor={(item, index) => `item${index}`}
                // numColumns={5}
                data={MENU_DATA}
                renderItem={({item}) => (
                  <TVSIdeBarFlatList
                    item={item}
                    {...props}
                    type="movie"
                    selected={MENU}
                    onChangeSelected={(val) => {
                      console.log('onChangeSelected', val);
                      setShowSelected(val);
                    }}
                  />
                )}
                onEndReachedThreshold={0.5}
                onMomentumScrollBegin = {() => {onEndReachedCalledDuringMomentum = false;}}
                onEndReached ={() => loadMoreRandomData('test string')}
              />
            
        )}
         {selected == MENU && showSelected == JOBS && (
          <View>
            <FlatList
              data={JOBS_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
        {selected == MENU && showSelected == TERMS_OF_USE && (
          <View>
            <FlatList
              data={TERMS_OF_USE_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}

        {selected == MENU && showSelected == PRIVACY_POLICY && (
          <View>
            <FlatList
              data={PRIVACY_POLICY_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}

                {/* <Text numberOfLines={1} style={styles.ranking}>
                  {t('texts.id_78')}
                </Text>
                <Text numberOfLines={1} style={styles.result}>
                  {' '}
                  12,348 {t('texts.id_91')}{' '}
                </Text> */}
              </View>
             
            </View>
          </View>
        )}

        {/* {selected == MENU && (
          <View  style={{flexDirection:'row'}}>
            {selected == MENU && showSelected == ADVERTISE && (
          <View >
            <FlatList
              data={ADVERTISE_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}
          </View> 
        )} */}

        {/* {selected == MENU && showSelected == ADVERTISE && (
          <View>
            <FlatList
              data={ADVERTISE_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )} */}

        {/* {selected == MENU && showSelected == COLLABORATE && (
          <View >
            <FlatList
              data={COLLABORATE_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )} */}

        {/* {selected == MENU && showSelected == JOBS && (
          <View>
            <FlatList
              data={JOBS_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )} */}

        {/* {selected == MENU && showSelected == TERMS_OF_USE && (
          <View>
            <FlatList
              data={TERMS_OF_USE_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )} */}

        {/* {selected == MENU && showSelected == PRIVACY_POLICY && (
          <View>
            <FlatList
              data={PRIVACY_POLICY_DATA}
              keyExtractor={(item, index) => `item${index}`}
              renderItem={({item}) => {
                return (
                  <Pressable style={{flexDirection: 'row'}}>
                    <>
                      {item.type == 'image' ? (
                        <Image
                          source={{uri: item.data}}
                          resizeMode={'stretch'}
                          style={styles.aboutUsImg}
                        />
                      ) : (
                        <Text
                          style={
                            item.type == 'title'
                              ? styles.aboutUsTitle
                              : item.type == 'subtitle'
                              ? styles.aboutUsSubTitle
                              : styles.aboutUsDetail
                          }>
                          {item.data}
                        </Text>
                      )}
                    </>
                  </Pressable>
                );
              }}
            />
          </View>
        )}

        {selected == PROFILE && showSelected == ACCOUNT && (
          <View hasTVPreferredFocus={true}>
            <View style={{flex: 1, backgroundColor: 'red'}} />
          </View>
        )} */}
      </View>
      <TVSortByModal
        keySort={SORT_BY}
        action={onPressClick}
        selected={true}
        visible={showSelected == SORT_BY}
        oncloseModal={() => oncloseModal(SORT_BY)}
        onclose={() => oncloseModal(SORT_BY)}
      />
      <TVLikedByModal
        keySort={LIKEDBY}
        action={onPressClick}
        selected={true}
        visible={showSelected == LIKEDBY}
        oncloseModal={() => oncloseModal(LIKEDBY)}
        onclose={() => oncloseModal(LIKEDBY)}
      />
      <TVStreamingModal
        action={onPressClick}
        keySort={STRREAMING}
        visible={showSelected == STRREAMING}
        oncloseModal={() => oncloseModal(STRREAMING)}
        onclose={() => oncloseModal(STRREAMING)}
      />
      <TVAgesModal
        action={onPressClick}
        keySort={AGES}
        visible={showSelected == AGES}
        oncloseModal={() => oncloseModal(AGES)}
        onclose={() => oncloseModal(AGES)}
      />
      <TVReleaseModal
        action={onPressClick}
        keySort={RELEASE}
        visible={showSelected == RELEASE}
        oncloseModal={() => oncloseModal(RELEASE)}
        onclose={() => oncloseModal(RELEASE)}
      />
      <TVCountryModal
        action={onPressClick}
        keySort={COUNTRY}
        visible={showSelected == COUNTRY}
        oncloseModal={() => oncloseModal(COUNTRY)}
        onclose={() => oncloseModal(COUNTRY)}
      />
      <TVGenreModal
        action={onPressClick}
        keySort={GENRE}
        visible={showSelected == GENRE}
        oncloseModal={() => oncloseModal(GENRE)}
        onclose={() => oncloseModal(GENRE)}
      />
      <TVPriceModal
        action={onPressClick}
        keySort={PRICE}
        visible={showSelected == PRICE}
        oncloseModal={() => oncloseModal(PRICE)}
        onclose={() => oncloseModal(PRICE)}
      />
      <TVProvidersModal
        action={onPressClick}
        keySort={PROVIDERS}
        visible={showSelected == PROVIDERS}
        oncloseModal={() => oncloseModal(PROVIDERS)}
        onclose={() => oncloseModal(PROVIDERS)}
      />
      {/* <TVIncludeModal visible={showSelected== INCLUDES} oncloseModal={()=> oncloseModal(INCLUDES)} onclose={()=> oncloseModal(INCLUDES)}  /> */}
      {/* </ScrollView>  */}
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getTranslateFile,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(RenderTV);

const isAndroid = () => {
  return Platform.OS == 'android';
};

const styles = StyleSheet.create({
  artistText: {
    fontSize: isAndroid() ? 18 : 28,
    fontWeight: '400',
    color: colors.black,
  },
  titleText: {
    fontSize: isAndroid() ? 18 : 28,
    fontWeight: '700',
    color: colors.tomatoRed,
  },
  title: {
    flex: 0.34,
    backgroundColor: colors.lightGrey,
    borderTopLeftRadius: isAndroid() ? 5 : 20,
    borderTopRightRadius: isAndroid() ? 5 : 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: colors.tomatoRed,
  },
  artist: {
    flex: 0.34,
    // height:40,
    // marginTop:30,
    backgroundColor: '#999999',
    marginHorizontal: isAndroid() ? 5 : 10,
    borderTopLeftRadius: isAndroid() ? 5 : 20,
    borderTopRightRadius: isAndroid() ? 5 : 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tetxInputLayout: {
    flexDirection: 'row',
    backgroundColor: colors.lightGrey,
    borderRadius: 8,
    minHeight: isAndroid() ? 40 : 80,
    minWidth: 60,
    marginBottom: isAndroid() ? 10 : 10,
  },
  mic: {
    marginEnd: 10,
    height: isAndroid() ? 20 : 40,
    width: isAndroid() ? 20 : 40,
    justifyContent: 'flex-end',
  },
  search: {
    marginStart: 10,
    height: isAndroid() ? 12 : 30,
    width: isAndroid() ? 12 : 30,
  },
  textInput: {
    color: colors.black,
    backgroundColor: colors.lightGrey,
    flex: 0.8,
    alignSelf: 'center',
    fontSize: isAndroid() ? 16 : 34,
    fontFamily: primary_regular_font.primary_regular_font,
    fontWeight: isAndroid() ? '400' : '400',
  },
  ranking: {
    width: StyleConfig.resWidth(250),
    marginStart: StyleConfig.resWidth(14),
    fontFamily: primary_regular_font.primary_regular_font,
    color: colors.black,
    fontSize: StyleConfig.resWidth(32),
    fontWeight: '700',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_bold_font,
      },
    }),
  },
  result: {
    width: StyleConfig.resWidth(250),
    fontFamily: primary_regular_font.primary_regular_font,
    color: colors.black,
    fontSize: StyleConfig.resWidth(32),
    fontWeight: '400',
    ...Platform.select({
      android: {
        fontFamily: primary_regular_font.primary_regular_font,
      },
    }),
  },
  container: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  aboutUsImg: {
    height: 300,
    width: StyleConfig.width - StyleConfig.resWidth(250),
    borderRadius: 20,
    marginTop: 20,
  },
  aboutUsTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    lineHeight: 62,
    color: colors.black33,
    marginTop: 30,
    width: StyleConfig.width - StyleConfig.resWidth(250),
  },
  aboutUsSubTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 42,
    color: colors.black33,
    marginVertical: 8,
    width: StyleConfig.width - StyleConfig.resWidth(250),
  },
  aboutUsDetail: {
    fontSize: 26,
    fontWeight: '400',
    lineHeight: 30,
    color: colors.black33,
    marginVertical: 8,
    width: StyleConfig.width - StyleConfig.resWidth(250),
  },
});
