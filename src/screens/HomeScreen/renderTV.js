import React,{ useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Dimensions,
    FlatList,
    Pressable,
    Image
 } from 'react-native'
 
 import TVHeader from '../../components/TV/TVHeader'
 import TVTopBar from '../../components/TV/TVTopBar'
 import TVSideBar from '../../components/TV/TVSideBar'
 import TVTileView from '../../components/TV/TVTileView'
 import TVMovieListItem from '../../components/TV/TVMovieListItem'
 import TVSearchListItem from '../../components/TV/TVSearchListItem'
 import TVSortByModal from '../../components/TV/TVSortByModal'
 import TVLikedByModal from '../../components/TV/TVLikedByModal'
 import TVStreamingModal from '../../components/TV/TVStreamingModal'
 import TVAgesModal from '../../components/TV/TVAgesModal'
 import TVReleaseModal from '../../components/TV/TVReleaseModal'
 import TVCountryModal from '../../components/TV/TVCountryModal'
 import TVGenreModal from '../../components/TV/TVGenreModal'
 import TVPriceModal from '../../components/TV/TVPriceModal'
 import TVProvidersModal from '../../components/TV/TVProvidersModal'
 import TVIncludeModal from '../../components/TV/TVIncludeModal'
 import TVKeyboard from '../../components/NumberButtons/';
 import MoviesJSON from '../../components/TV/movies.json'
 import primary_regular_font from '../../helper/fonts';
 import AppImages from '../../assets'

 import colors from '../../helper/colors';
 const {width, height} = Dimensions.get('window')
import StyleConfig from '../../helper/StyleConfig';
import strings from '../../helper/strings';
import { ScrollView } from 'react-native-gesture-handler';
import Const from '../../helper/constants'
import TVCardDetail from '../../components/TV/TVCardDetail';
let [NONE,SEARCH, MY_LIST, MOVIES, TV_SHOW, SHORTS, DIRECTOR, ACTOR , PROFILE, MENU] =
[-1, 0,1,2,3,4,5,6,7,8]
// let [ABOUT_US, ADVERTISE, COLLABORATE, JOBS, TERMS_OF_USE, PRIVACY_POLICY ] = [11, 12, 13, 14, 15, 16]
let [COUNTRY_LANGUAGE,MOBILE_APP,INVITE_FRIEND, ABOUT_US, ADVERTISE, COLLABORATE, JOBS, TERMS_OF_USE, PRIVACY_POLICY] = [9,10,11, 12, 13, 14, 15, 16, 17]

let [NOTIFICATION, FRIENDS, PREFERANCE, MY_PROVIDER, ACCOUNT, LANGUAGE] = [21, 22, 23, 24, 25, 26]
let [NON, SORT_BY, LIKEDBY,STRREAMING ,RELEASE, GENRE, COUNTRY, AGES, PRICE,INCLUDES,PROVIDERS] = 
   [-1, 0, 1, 2, 3, 4, 5, 6, 7,8,9];

const ADVERTISE_DATA = Const.ABOUT_US.map((item)=> item.id == 2 ? ({...item, data: strings.advertise}) : item)
const COLLABORATE_DATA = Const.ABOUT_US.map((item)=> item.id == 2 ? ({...item, data: strings.collaborate}) : item)
const JOBS_DATA = Const.ABOUT_US.map((item)=> item.id == 2 ? ({...item, data: strings.jobs}) : item)
const TERMS_OF_USE_DATA = Const.ABOUT_US.map((item)=> item.id == 2 ? ({...item, data: strings.terms_of_use}) : item)
const PRIVACY_POLICY_DATA = Const.ABOUT_US.map((item)=> item.id == 2 ? ({...item, data: strings.privacy_policy}) : item)

const buttons = [
  ['a', 'b', 'c', 'd','e','f'],

  ['g', 'h', 'i', 'j','k','l'],

  ['m', 'n', 'o', 'p','q','r'],

  ['s', 't', 'u', 'v','w','x'],

  ['y', 'z', '1', '2', '3','4'],

  ['5', '6', '7','8','9','0'],
  
  [AppImages.next_bk, AppImages.next_bk, AppImages.space, AppImages.delete, AppImages.delete_all]
];
const posts_json = MoviesJSON.data.children.map(child => child.data);

const RenderTV = ({posts, modalVisible, selectedImage, ...props})=>{
    const [selected, setSelected] = useState(MY_LIST)
    const [selectedItem, setSelectedItem] = useState(posts? posts[0] : null)
    const [showSelected, setShowSelected] = useState(NONE)
    const sidebar = useRef();
    const header = useRef();
    const [text, setText] = useState('');
    let _tvEventHandler 
    

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

    useEffect(() => {
   //   _enableTVEventHandler()
      // componentWillUnmount
      return () => {
         // Your code here
        //  if (this._tvEventHandler) {
        //   this._tvEventHandler.disable();
        //   delete this._tvEventHandler;
        // }
      }
    }, []);

    onTileViewFocus=()=>{
        // sidebar.current.setResetFocus()
        header?.current?.setResetFocus()
    }

    onSideBarFocus=(val)=>{
      console.log("onSideBarFocus-")
      sidebar?.current?.setChangeFocus(val)
      
  }
  const oncloseModal=(val)=> {
    setShowSelected(NONE)
    onSideBarFocus(val)
  }

  function _handleEvent(value){
    console.debug('value',value);

  }
    // console.log({selected, ADVERTISE_DATA})
    return (
      <View style={{backgroundColor:colors.white}}>
      
      <TVHeader  style={{height:500}} {...props} ref={header} selected={selected} onChangeSelected={(val)=> {
        setSelected(val)
        if(val == MENU){
          setShowSelected(ABOUT_US)
          // sidebar.current.setResetFocus()
        }
        } } />
     {/* <ScrollView> */}
      <View hasTVPreferredFocus={true} style={{flexDirection:'column',marginHorizontal:20,backgroundColor:colors.white}}>
      <TVTopBar  ref={sidebar} headerSelected={selected} hasTVPreferredFocus={true} {...props}  onChangeSelected={(val)=> setShowSelected(val) }/>

          {/* { selected != SEARCH && 
          <TVTopBar ref={sidebar} headerSelected={selected} hasTVPreferredFocus={true} {...props}  onChangeSelected={(val)=> setShowSelected(val) }/>
          } */}
          {selected == SEARCH && 
          <View style={{flexDirection: 'row'}}>
            <View style={{ width: StyleConfig.resWidth(600), margin:40,height:'56%'}}>
              <View style={{flexDirection:'row',backgroundColor: colors.lightGrey, borderRadius:8,  minHeight:80,minWidth:60,marginBottom:20}}>
              <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex:0.1,alignSelf:'center'}} >
                     <Image style={{marginStart:10,height:30,width:30,}} source={AppImages.icSearch} />
                  </View>
                    <TextInput 
                      placeholder={strings.search}
                      placeholderTextColor={colors.black}
                      keyboardType={strings.email_address}
                      style={{backgroundColor:colors.lightGrey, flex:0.8,alignSelf:'center',fontSize:34,fontFamily:primary_regular_font.primary_regular_font,fontWeight:'700'}}
                      onChangeText={text => setText(text)}
                    />
                    <View style={{marginStart:10,flex:0.1,alignSelf:'center'}} >
                    <Image style={{marginEnd:10,height:40,width:40,justifyContent:'flex-end'}} source={AppImages.micro} />

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
                  contentContainerStyle={{paddingBottom:1000}}
                  hasTVPreferredFocus={true}
                  data={posts_json}
                  numColumns={5}
                  keyExtractor={(item, index) => `item${index}`}
                  renderItem = {({item}) => (
                    <TVSearchListItem
                      item={item}
                      onFocusedItem={(item)=> setSelectedItem(item)}
                      {...props} />
                  )}
                /> 
          </View>}
          {selected == MY_LIST && 
            <View  style={{flex:1,backgroundColor: colors.white }} hasTVPreferredFocus={true}>

              {/* <TVTileView type={selected} onFocus={onTileViewFocus} item={selectedItem} hasTVPreferredFocus={true} /> */}
              <View hasTVPreferredFocus={true} style={{backgroundColor:'white', height: StyleConfig.resHeight(900)}}>
                <View style={{flexDirection:'row', marginVertical:10,}} >
        <Text style={{fontSize:30,
        
        fontWeight:'800'}} >Ranking of best movies</Text>

<Text style={{fontSize:30,
        fontWeight:'200'}}>  12,348  results </Text>
        </View>
                 <FlatList
                   hasTVPreferredFocus={true}
                   contentContainerStyle={{paddingBottom:50}}
                   keyExtractor={(item, index) => `item${index}`}
                  numColumns={5}
                  data={posts}
                  renderItem = {({item}) => (
                    <TVMovieListItem item={item} {...props}  type = "movie" selected={MY_LIST} />
                  )}
                  />
              </View>
            </View> }
          
            {selected == MOVIES && 
            <View style={[{flex:1,backgroundColor: colors.white}]} hasTVPreferredFocus={true}>
              {/* <TVTileView type={selected} onFocus={onTileViewFocus} item={selectedItem} hasTVPreferredFocus={true} /> */}
              <View hasTVPreferredFocus={true} style={{backgroundColor: colors.white, height: StyleConfig.resHeight(900)}}>
                
                  <FlatList
                   hasTVPreferredFocus={true}
                   contentContainerStyle={{paddingBottom:50}}
                   keyExtractor={(item, index) => `item${index}`}
                  numColumns={5}
                  data={posts}
                  renderItem = {({item}) => (
                    <TVMovieListItem item={item} {...props}  type = "movie" selected={MY_LIST} />
                  )}
                  />
              </View>
            </View> }

            {selected == TV_SHOW && 
            <View style={[{flex:1}]} hasTVPreferredFocus={true}>
              {/* <TVTileView type={selected} onFocus={onTileViewFocus} item={selectedItem} hasTVPreferredFocus={true} /> */}
              <View hasTVPreferredFocus={true} style={{height: StyleConfig.resHeight( 900)}}>
                {/* <FlatList 
                  hasTVPreferredFocus={true}
                  data={posts}
                  numColumns={5}
                  contentContainerStyle={{paddingBottom:50}}
                  keyExtractor={(item, index) => `item${index}`}
                  renderItem = {({item}) => (
                    <TVMovieListItem
                      item={item} 
                      onFocusedItem={(item)=> setSelectedItem(item)}
                      {...props} />
                  )}
                />  */}
                <FlatList
                   hasTVPreferredFocus={true}
                   contentContainerStyle={{paddingBottom:50}}
                   keyExtractor={(item, index) => `item${index}`}
                  numColumns={5}
                  data={posts}
                  renderItem = {({item}) => (
                    <TVMovieListItem item={item} {...props}  type = "movie" selected={MY_LIST} />
                  )}
                  />
              </View>
            </View> }

            {selected == MENU && showSelected == ABOUT_US && 
            <View hasTVPreferredFocus={true}  >
              <TVSideBar onChangeSelected={(val)=> setShowSelected(val) }/>
              {/* <FlatList 
                data={Const.ABOUT_US}
                keyExtractor={(item, index) => `item${index}`}
                renderItem={({item})=>{
                  return <Pressable style={{flexDirection: 'row'}}><>{item.type == "image" ? <Image source={{uri: item.data}} resizeMode={'stretch'} style={styles.aboutUsImg} /> : 
                  <Text style={item.type == "title" ? styles.aboutUsTitle : item.type == "subtitle" ? styles.aboutUsSubTitle: styles.aboutUsDetail}>{item.data}</Text>}</></Pressable>
                }}
              /> */}
            </View> }

            {selected == MENU && showSelected == COUNTRY_LANGUAGE && 
            <View hasTVPreferredFocus={true}>
              <Text>dadsdsd</Text>
              {/* <TVSideBar onChangeSelected={(val)=> setShowSelected(val) }/> */}
              {/* <FlatList 
                data={Const.ABOUT_US}
                keyExtractor={(item, index) => `item${index}`}
                renderItem={({item})=>{
                  return <Pressable style={{flexDirection: 'row'}}><>{item.type == "image" ? <Image source={{uri: item.data}} resizeMode={'stretch'} style={styles.aboutUsImg} /> 
                  : 
                  <Text style={item.type == "title" ? styles.aboutUsTitle : item.type == "subtitle" ? styles.aboutUsSubTitle: styles.aboutUsDetail}>{item.data}</Text>}</></Pressable>
                }}
              /> */}
            </View> }

            {selected == MENU && showSelected == ADVERTISE && 
            <View hasTVPreferredFocus={true}>
              <FlatList 
                data={ADVERTISE_DATA}
                keyExtractor={(item, index) => `item${index}`}
                renderItem={({item})=>{
                  return <Pressable style={{flexDirection: 'row'}}><>{item.type == "image" ? <Image source={{uri: item.data}} resizeMode={'stretch'} style={styles.aboutUsImg} /> : 
                  <Text style={item.type == "title" ? styles.aboutUsTitle : item.type == "subtitle" ? styles.aboutUsSubTitle: styles.aboutUsDetail}>{item.data}</Text>}</></Pressable>
                }}
              />
            </View> }

            {selected == MENU && showSelected == COLLABORATE && 
            <View hasTVPreferredFocus={true}>
              <FlatList 
                data={COLLABORATE_DATA}
                keyExtractor={(item, index) => `item${index}`}
                renderItem={({item})=>{
                  return <Pressable style={{flexDirection: 'row'}}><>{item.type == "image" ? <Image source={{uri: item.data}} resizeMode={'stretch'} style={styles.aboutUsImg} /> : 
                  <Text style={item.type == "title" ? styles.aboutUsTitle : item.type == "subtitle" ? styles.aboutUsSubTitle: styles.aboutUsDetail}>{item.data}</Text>}</></Pressable>
                }}
              />
            </View> }
            
            {selected == MENU && showSelected == JOBS && 
            <View hasTVPreferredFocus={true}>
              <FlatList 
                data={JOBS_DATA}
                keyExtractor={(item, index) => `item${index}`}
                renderItem={({item})=>{
                  return <Pressable style={{flexDirection: 'row'}}><>{item.type == "image" ? <Image source={{uri: item.data}} resizeMode={'stretch'} style={styles.aboutUsImg} /> : 
                  <Text style={item.type == "title" ? styles.aboutUsTitle : item.type == "subtitle" ? styles.aboutUsSubTitle: styles.aboutUsDetail}>{item.data}</Text>}</></Pressable>
                }}
              />
            </View> }

            {selected == MENU && showSelected == TERMS_OF_USE && 
            <View hasTVPreferredFocus={true}>
              <FlatList 
                data={TERMS_OF_USE_DATA}
                keyExtractor={(item, index) => `item${index}`}
                renderItem={({item})=>{
                  return <Pressable style={{flexDirection: 'row'}}><>{item.type == "image" ? <Image source={{uri: item.data}} resizeMode={'stretch'} style={styles.aboutUsImg} /> : 
                  <Text style={item.type == "title" ? styles.aboutUsTitle : item.type == "subtitle" ? styles.aboutUsSubTitle: styles.aboutUsDetail}>{item.data}</Text>}</></Pressable>
                }}
              />
            </View> }

            {selected == MENU && showSelected == PRIVACY_POLICY && 
            <View hasTVPreferredFocus={true}>
              <FlatList 
                data={PRIVACY_POLICY_DATA}
                keyExtractor={(item, index) => `item${index}`}
                renderItem={({item})=>{
                  return <Pressable style={{flexDirection: 'row'}}><>{item.type == "image" ? <Image source={{uri: item.data}} resizeMode={'stretch'} style={styles.aboutUsImg} /> : 
                  <Text style={item.type == "title" ? styles.aboutUsTitle : item.type == "subtitle" ? styles.aboutUsSubTitle: styles.aboutUsDetail}>{item.data}</Text>}</></Pressable>
                }}
              />
            </View> }
  


            {selected == PROFILE &&  showSelected == ACCOUNT &&
            <View hasTVPreferredFocus={true}>
              <View style={{flex:1, backgroundColor:'red'}}>
                </View>
             
            </View> }
        </View>
        <TVSortByModal visible={showSelected== SORT_BY} oncloseModal={()=> oncloseModal(SORT_BY)} onclose={()=> oncloseModal(SORT_BY)}  />
        <TVLikedByModal visible={showSelected== LIKEDBY} oncloseModal={()=> oncloseModal(LIKEDBY)} onclose={()=> oncloseModal(LIKEDBY)}  />
        <TVStreamingModal visible={showSelected== STRREAMING} oncloseModal={()=> oncloseModal(STRREAMING)} onclose={()=> oncloseModal(STRREAMING)}  />
        <TVAgesModal visible={showSelected== AGES} oncloseModal={()=> oncloseModal(AGES)} onclose={()=> oncloseModal(AGES)}  />
        <TVReleaseModal visible={showSelected== RELEASE} oncloseModal={()=> oncloseModal(RELEASE)} onclose={()=> oncloseModal(RELEASE)}  />
        <TVCountryModal visible={showSelected== COUNTRY} oncloseModal={()=> oncloseModal(COUNTRY)} onclose={()=> oncloseModal(COUNTRY)}  />
        <TVGenreModal visible={showSelected== GENRE} oncloseModal={()=> oncloseModal(GENRE)} onclose={()=> oncloseModal(GENRE)}  />
        <TVPriceModal visible={showSelected== PRICE} oncloseModal={()=> oncloseModal(PRICE)} onclose={()=> oncloseModal(PRICE)}  />
        <TVProvidersModal visible={showSelected== PROVIDERS} oncloseModal={()=> oncloseModal(PROVIDERS)} onclose={()=> oncloseModal(PROVIDERS)}  />
        <TVIncludeModal visible={showSelected== INCLUDES} oncloseModal={()=> oncloseModal(INCLUDES)} onclose={()=> oncloseModal(INCLUDES)}  />
        {/* </ScrollView>  */}
      </View>
      
      
    )
}

export default RenderTV;


const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.black,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    aboutUsImg:{
      height:300,
      width: StyleConfig.width - StyleConfig.resWidth(250),
      borderRadius:20,
      marginTop: 20
    },
    aboutUsTitle:{
      fontSize: 40,
      fontWeight: 'bold',
      lineHeight: 62,
      color: colors.black33,
      marginTop:30,
      width: StyleConfig.width - StyleConfig.resWidth(250),
    },
    aboutUsSubTitle:{
      fontSize: 26,
      fontWeight: 'bold',
      lineHeight: 42,
      color: colors.black33,
      marginVertical:8,
      width: StyleConfig.width - StyleConfig.resWidth(250),
    },
    aboutUsDetail:{
      fontSize: 26,
      fontWeight: '400',
      lineHeight: 30,
      color: colors.black33,
      marginVertical:8, 
      width: StyleConfig.width - StyleConfig.resWidth(250),
    },

    });