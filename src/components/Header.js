import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';

import topo from '../../assets/pokemon_logo.png';

const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

export default function Header({ imagem = topo, altura = ALTURA_PADRAO }) {
  const estilos = funcaoEstilos(altura);
  const navigation = useNavigation();

  return <>
    <ContainerView>
        <Image source={imagem} style={estilos.topo} />
    </ContainerView>
    

    <TouchableOpacity 
      onPress={() => { navigation.goBack() }}
      style={estilos.botaoVoltar}>
      <Text>"OI"</Text>
    </TouchableOpacity>
  </>
}

const ContainerView = styled.View`
width: 100%;
height: 75px;
background: #21386E 0% 0% no-repeat padding-box;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
`;

const funcaoEstilos = (altura) => StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: 'blue'
  },
  topo: {
    width: 122,
    height: 45,
    left: "15%",
  },
  gradiente: {
    position: 'absolute',
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  botaoVoltar: {
    position: 'absolute',
    padding: 17,
  },
  voltar: {
    width: 24,
    height: 24,
  },
});