import {createContext, useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';
import ALL_POKEMON from '../queries';

export const BasicInformationContext = createContext({});

export function BasicInformationProvider({children}) {
  const {loading, error, data} = useQuery(ALL_POKEMON);
  const [pokemons, setPokemons] = useState('');
  const [pkmList, setPkmList] = useState([]);

  function mapImage(img) {
    let image;
    img.map((e, inde) => {
      image = JSON.parse(e.sprites).other['official-artwork'].front_default;
    });
    return image;
  }
  function mapType(types) {
    let typeList = [];

    types.forEach(item => {
      typeList.push(item.pokemon_v2_type.name);
    });
    return typeList;
  }
  function mapMajorMove(move) {
    let majorMove;
    move.map((e, inde) => {
      majorMove = e.pokemon_v2_move.name;
    });
    return majorMove;
  }
  function mapStatus(status) {
    let statusNumber = [];
    status.map((e, inde) => {
      statusNumber.push([e.pokemon_v2_stat.name, e.base_stat]);
    });
    console.log(statusNumber);
    return statusNumber;
  }

  useEffect(() => {
    function getPokemons() {
      setPokemons(data.pokemon_v2_pokemon);
    }

    function filterPokemonData() {
      let pkmData = [];

      pokemons.forEach(pkm => {
        let pk = {
          id: pkm.id,
          name: pkm.name,
          weight: pkm.weight,
          height: pkm.height,
          imgUrl: mapImage(pkm.pokemon_v2_pokemonsprites),
          type: mapType(pkm.pokemon_v2_pokemontypes),
          majorMove: mapMajorMove(pkm.pokemon_v2_pokemonmoves),
          stats: mapStatus(pkm.pokemon_v2_pokemonstats),
        };

        pkmData.push(pk);
      });

      return pkmData;
    }
    if (!loading) {
      getPokemons();
    }
    if (pokemons) {
      setPkmList(filterPokemonData());
    }
  }, [data, loading, pokemons]);

  // console.log('13131',pokemons);

  console.log('DATA222', pkmList);

  return (
    <BasicInformationContext.Provider
      value={{
        loading,
        error,
        pokemons,
        pkmList,
      }}>
      {children}
    </BasicInformationContext.Provider>
  );
}
