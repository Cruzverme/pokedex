import {gql} from '@apollo/client';

const ALL_POKEMON = gql`
  query {
    pokemon_v2_pokemon(limit: 4) {
      id
      name
      weight
      height
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemonmoves(
        where: {level: {_gte: 48}}
        distinct_on: move_id
      ) {
        pokemon_v2_move {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemoncolor {
          name
        }
      }
    }
  }
`;

export default ALL_POKEMON;