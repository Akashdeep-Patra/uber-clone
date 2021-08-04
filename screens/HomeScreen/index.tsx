import { GOOGLE_API_KEY } from '@env';
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../../components/NavOptions';
interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={{ uri: 'https://links.papareact.com/gzs' }}
        />
        <GooglePlacesAutocomplete
          styles={{
            container:
              { flex: 0 },
            textInput: {
              fontSize: 18,
            },
          }}
          minLength={2}
          onPress={(data, detail = null) => {
            console.log({ data });
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder='Where from?'
          query={{ key: GOOGLE_API_KEY, language: 'en' }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
});
