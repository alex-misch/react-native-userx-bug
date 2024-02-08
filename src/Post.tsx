import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  onPress?: () => void;
};

export function Post({onPress}: Props) {
  const [width] = React.useState(Math.round(Dimensions.get('screen').width));

  return (
    <View style={styles.post}>
      <Text style={styles.title}>Post</Text>
      <View>
        <ScrollView horizontal>{generatePhotos(4, width, 400)}</ScrollView>
        <View style={styles.buttonContainer} pointerEvents="box-none">
          <Button title="+1000 views" onPress={onPress} />
        </View>
      </View>
    </View>
  );
}

function generatePhotos(
  amount: number,
  width: number,
  height: number,
): JSX.Element[] {
  const startFrom = Math.floor(Math.random() * 20) + 10;
  return Array.from({length: amount}, (_, index) => {
    const uri = `https://loremflickr.com/${width}/${height}?random=${
      startFrom + index
    }`;
    return <Image style={{width, height}} key={uri} source={{uri}} />;
  });
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 8,
    marginLeft: 8,
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 16,
    textAlign: 'center',
  },
  caption: {
    textAlign: 'center',
    marginTop: 4,
  },
  post: {
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 10,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  buttonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});
