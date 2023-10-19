import { Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image, PermissionsAndroid } from "react-native";
import { useMutation } from '@apollo/client';
import styled from 'styled-components/native';
import { useNavigation } from "@react-navigation/native";

import { colors } from "../../constants/Colors";
import { useEffect, useRef, useState } from "react";
import { LOGIN_MUTATION } from "../../api/mutations";
import Logo from "../../assets/logo.png";
import { UserLogin } from "../../types/interfaces";
import Input from "../../components/input";
import LoadComponent from "../../components/Load";
import { StackParamList } from "../../routers/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { saveUserName } from "../../storage/saves";
import { LinearGradient } from "expo-linear-gradient";

type navigateProps = NativeStackNavigationProp<StackParamList, 'LoginScreen'>;

export default function () {
  const [userLogin, setUserLogin] = useState<UserLogin>();
  const [user, setUser] = useState('rtr01');
  const [password, setPassword] = useState('rtr01');
  const [success, setSuccess] = useState<any>(null);
  const Navigation = useNavigation<navigateProps>();

  const [loginByMail, { data, loading, error }] = useMutation(LOGIN_MUTATION, { fetchPolicy: 'no-cache' });

  const handleLogin = async () => {
    const email = user;
    const secret = password;

    try {
      const response = await loginByMail({
        variables: { email, secret },
      });

      saveUserName(response.data.loginByMail.user_name).then(data => {
        setSuccess({
          message: "Usuário encontrado: " + response.data.loginByMail.user_name
        });


        setTimeout(() => {
          Navigation.navigate("MainScreen");
        }, 2000);
      }).catch(error => {
        console.log(error);
      });
    } catch (error) {
      console.error(error);
    }
  };

  async function requestStoragePermission() {
    console.log("Teste");
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Permissão de armazenamento',
          message: 'Este aplicativo precisa de permissão para acessar o armazenamento.',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permissão concedida.');
      } else {
        console.log('Permissão negada.');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    requestStoragePermission();
  }, []);

  if (loading) {
    return <LoadComponent />
  }

  return (
    <Container colors={[colors.purple, colors.cyan]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}>

        <Image source={Logo} style={styles.logo} resizeMode="contain" />

        <Input label="Email ou Login" value={user} action={(text) => setUser(text)} password={false} />
        <Input label="Senha" value={password} action={(text) => setPassword(text)} password={true} />

        <TouchableOpacity onPress={handleLogin} style={styles.button} activeOpacity={0.6}>
          <Text style={styles.txtButton}>
            LOGIN
          </Text>
        </TouchableOpacity>
        {error && <Text style={{ color: '#fff' }}>Erro: {error.message}</Text>}
        {success && <Text style={{ color: '#fff' }}>{success.message}</Text>}
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 100,
    marginVertical: 70,
  },

  title: {
    fontSize: 25,
    fontWeight: '500',
    color: colors.title
  },

  input: {
    width: '100%',
    height: 50,
    textAlign: 'left',
    fontSize: 20,
    marginVertical: 20,
    color: colors.buttonPrimary,
    backgroundColor: colors.white,
    borderRadius: 5,
  },

  inputSelect: {
    borderBottomWidth: 1,
    borderColor: colors.buttonPrimary,
  },

  button: {
    backgroundColor: colors.purple,
    width: '100%',
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  txtButton: {
    color: colors.text,
    fontSize: 20,
  }

});

const Container = styled(LinearGradient)`
	flex: 1;
	padding: 20px;
`;

const Label = styled.Text`
	color: ${colors.text};
	font-size: 18px;
`;
