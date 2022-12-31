import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const ScreenWidth = Dimensions.get('window').width;

export default function Card({item}) {
  const navigation = useNavigation();

  const Circle = styled.View`
    /* Layout Properties */
    width: 100px;
    height: 100px;

    /* UI Properties */
    left: 20px;
    border-radius: 50px;
    transform: scaleX(1.2);
    background: #9dfae47a 0% 0% no-repeat padding-box;
    opacity: 1;
  `;

  const CardImage = styled.Image`
    width: 110px;
    height: 93px;

    /* UI Properties */

    background: transparent 0% 0% no-repeat padding-box;
    opacity: 1;
  `;

  const PkmName = styled.Text`
    /* Layout Properties */

    width: 85px;
    height: 21px;

    /* UI Properties */

    text-align: left;
    font: normal normal bold 18px/21px Inter;
    letter-spacing: 0px;
    color: #ffffff;
    opacity: 1;
  `;

  const PkmNumber = styled.View`
    /* Layout Properties */
    top: -15px
    left: 61px;
    width: 49px;
    height: 17px;
    
    /* UI Properties */
    
    background: #FFCB05 0% 0% no-repeat padding-box;
    border-radius: 10px;
    opacity: 1;
    
  `;

  const PkmNumberText = styled.Text`
    /* Layout Properties */

    width: 33px;
    height: 17px;

    /* UI Properties */

    text-align: left;
    font: normal normal normal 14px/17px Inter;
    letter-spacing: 0px;
    color: #21386e;
    opacity: 1;
  `;

  const TypeCard = styled.View`
    width: 114px;
    height: 20px;

    /* UI Properties */

    opacity: 1;
  `;

  function mapImage(img) {
    let srcImage = '';
    img.map((e, inde) => {
      srcImage = (
        <CardImage
          source={{
            uri: JSON.parse(e.sprites).other['official-artwork'].front_default,
          }}
          accessibilityLabel={item.name}
        />
      );
    });

    return srcImage;
  }
  function mapType(types) {
    let typeList = [];

    types.forEach(item => {
      typeList.push(<Text>{item}</Text>);
    });
    return typeList;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Detail');
      }}
      style={styles.card}>
      <PkmNumber>
        <PkmNumberText>#{item.id}</PkmNumberText>
      </PkmNumber>
      <Circle>
        <CardImage
          source={{
            uri: item.imgUrl,
          }}
          accessibilityLabel={item.name}
        />
      </Circle>
      <View>
        <PkmName>{item.name}</PkmName>
      </View>

      <Image source="" />
      <TypeCard>{mapType(item.type)}</TypeCard>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: (ScreenWidth - 40) / 2 - 10,
    height: 250,
    backgroundColor: '#48D0B0',
    padding: 10,

    marginVertical: 12,
    marginHorizontal: 10,
    borderRadius: 15,
    opacity: 1,
  },
  image: {
    width: '93',
    height: '93',
  },
  name: {
    color: '#FFFFFF',
    opacity: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
