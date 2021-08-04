import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
interface NavOptionsProps {}

const data = [
  {
    id: '1',
    title: 'Get a ride',
    image: 'http://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '2',
    title: 'Order food',
    image: 'http://links.papareact.com/28w',
    screen: 'EatScreen',
  },
];

const NavOptions = (props: NavOptionsProps) => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={({ id }) => id}
      renderItem={({ item: { title, image, screen } }) => (
        <TouchableOpacity
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-lg`}
          onPress={() => navigation.navigate(screen)}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: 'contain' }}
              source={{ uri: image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name='arrowright'
              color='white'
              type='antdesign'
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  container: {},
});
