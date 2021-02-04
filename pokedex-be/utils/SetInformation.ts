module.exports = async function SetInfomation(
  attributes: any,
  caseUsed: number
) {
  let information;
  switch (caseUsed) {
    case 1:
      const setData = attributes.data.map(
        (item: any, index: any) =>
          (information = {
            id: attributes.data[index]._id,
            username: attributes.data[index].username,
            password: attributes.data[index].password,
            pokemons: attributes.pokemon.filter((pokemonId: any) => {
              for (let i = 0; i < item.pokemon_id.length; i++) {
                if (pokemonId.cards.id === item.pokemon_id[i]) {
                  return pokemonId.cards.details;
                }
              }
            }),
          })
      );
      return information;
    case 2:
      information = {
        id: attributes.data._id,
        username: attributes.data.username,
        password: attributes.data.password,
        pokemons: attributes.pokemon.filter((pokemonId: any) => {
          for (let i = 0; i < attributes.data.pokemon_id.length; i++) {
            if (pokemonId.cards.id === attributes.data.pokemon_id[i]) {
              return pokemonId.cards.details;
            }
          }
        }),
      };
      return information;
  }
};
