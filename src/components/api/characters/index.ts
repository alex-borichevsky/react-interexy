import $api from "../api";

export const getCharacter = async () => {
    try {
      let {data} = await $api.get('/character');
      return data;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }


  