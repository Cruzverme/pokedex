import React, {useContext} from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';
import {BasicInformationContext} from '../../contexts/BasicInformationContext';
import {style, InformationTitle} from './styles';

export default function Home() {
  const {loading, error, pkmList} = useContext(BasicInformationContext);

  return (
    <View style={style.container}>
      <Header/>
      <InformationTitle>
        More than 250 Pokemons for you to choose your favorite
      </InformationTitle>
      <TextInput style={{width: '100%', backgroundColor: 'red'}} />
      {loading && <Text>Loading Pokemons.......</Text>}
      {error && <Text>Error!! {error.message} </Text>}
      {pkmList && (
        <FlatList
          data={pkmList}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Card item={item} />}
          numColumns={2}
        />
      )}
    </View>
  );
}
