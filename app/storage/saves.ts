import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveUserName(value: string) {
  try {
    await AsyncStorage.setItem('username', value);
    Promise.resolve('Save succeeded');
  } catch (e) {
    Promise.reject(e);
  }
}

export const getUserName = async () => {
  try {
    const result = await AsyncStorage.getItem('username');
    if (result) {
      const stage: string = JSON.parse(result);
      return Promise.resolve(stage);
    }
  } catch (e) {
    return Promise.reject(false);
  }
};
