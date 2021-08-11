import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  InteractionManager,
} from 'react-native';
import Header from '../../components/Header';
import Loader from '../../components/Loader';

export default function About() {
  const [isLoaded, setLoaded] = useState(false);
  const screens = [{name: 'About', component: About}];

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
    <ScrollView style={styles.container}>
      {/* <Header screens={screens} /> */}
      <Image
        source={require('../../../assets/about_tile.png')}
        style={styles.img}
      />
      <View style={styles.Row2}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.heading2}>Subtitle 1</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare
          justo sit amet facilisis convallis. Proin fermentum fermentum orci, et
          tincidunt tellus pharetra sed. Morbi lacinia arcu non magna lobortis
          varius. Nulla eget dapibus enim, sit amet egestas mauris. Sed iaculis,
          tellus finibus cursus porttitor, tellus eros fermentum mi, et
          elementum est sem in justo. Nulla facilisi. Morbi fermentum tortor sed
          hendrerit facilisis.
        </Text>
        <Text style={styles.text} />
        <Text style={styles.text}>
          Quisque suscipit odio scelerisque, tempor diam vel, condimentum
          lectus. Aliquam convallis tortor a gravida suscipit. Sed venenatis
          auctor lectus, id fermentum ipsum scelerisque et. Nulla ante arcu,
          vulputate in hendrerit eu, sagittis a odio. Aliquam ac leo massa.
          Donec nisi nisl, bibendum sit amet venenatis sed, aliquam a dui.
          Mauris eget dolor lacus. Fusce aliquam, felis ut rhoncus interdum,
          purus ex tristique erat, ut sagittis odio nibh ultrices nulla. Cras
          turpis libero, blandit eget nulla non, dictum varius magna. Vestibulum
          blandit egestas lectus. Vivamus egestas, nisi in mollis rhoncus, purus
          elit elementum lectus, a tincidunt nisi purus condimentum dolor. Morbi
          placerat enim ac nisl vehicula, non luctus libero semper. Quisque nec
          orci tempus, fermentum ante quis, sollicitudin magna. Nulla sagittis
          pellentesque diam, nec pretium lacus dictum at. Sed auctor porttitor
          ante, eget accumsan sapien finibus ac. Quisque vitae elit et elit
          mollis consectetur eget et nisi.
        </Text>
        <Text style={styles.text} />
        <Text style={styles.text}>
          Mauris vel nibh felis. Donec in urna a nisl volutpat dapibus quis
          ullamcorper neque. Proin justo ex, vulputate sit amet semper sed,
          fringilla id orci. Cras pretium, augue quis tempus gravida, purus erat
          efficitur diam, id malesuada orci dui vel ipsum. Integer tortor justo,
          posuere eget imperdiet vel, molestie fringilla orci. Sed bibendum
          tellus sapien, nec ultricies purus sagittis faucibus. Quisque
          scelerisque leo nec odio placerat, vel sagittis tellus volutpat.
          Quisque nec massa semper, auctor est at, dignissim turpis. Cras
          tincidunt lectus a ullamcorper ullamcorper. Pellentesque placerat
          felis id ultricies sagittis. Nunc id sagittis augue.
        </Text>
        <Text style={styles.text} />
        <Text style={styles.text}>
          Nunc iaculis, metus quis viverra pharetra, elit tellus ornare mauris,
          ut porttitor mauris ipsum at ipsum. Sed auctor nisi a dolor interdum
          semper. Curabitur eget fringilla risus. Morbi id erat magna. Cras
          sodales sodales neque eu sagittis. Aliquam eu laoreet risus. Nam
          dictum neque ut quam pharetra auctor. In nec viverra dui. Aenean
          gravida erat non ligula dictum, sit amet maximus elit laoreet.
        </Text>
        <Text style={styles.text} />
        <Text style={styles.text}>
          Nullam nec tortor lacus. Morbi augue tortor, volutpat eu facilisis ut,
          feugiat a risus. Nunc blandit porta volutpat. Sed at arcu at eros
          vehicula pharetra. Aenean blandit sagittis lacus a pulvinar. Nam
          laoreet posuere orci. Etiam imperdiet facilisis massa a porttitor.
          Duis eu posuere tortor. Nulla facilisi. Aliquam ac lectus tellus.
          Nullam ultricies dui eu nibh pretium rhoncus non sit amet mauris.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  img: {
    width: '100%',
    height: 100,
  },
  Row2: {
    padding: 20,
  },
  heading: {
    color: '#333333',
    fontSize: 18.67,
    fontFamily: "'LEMON MILK Pro FTR',Arial",
    fontStyle: 'normal',
    fontWeight: '500',
  },
  heading2: {
    color: '#333333',
    fontFamily: "'LEMON MILK Pro FTR',Arial",
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  text: {
    color: '#333333',
    fontFamily: "'Helvetica Neue',Arial",
    fontSize: 14.67,
    fontStyle: 'normal',
    fontWeight: '400',
  },
});
