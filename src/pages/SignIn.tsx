import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Dimensions,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { useTheme } from "react-native-paper";
import { useAuth } from "../components/AuthContext";
import { useNavigation } from "@react-navigation/native";

import Users from "../model/Users";

const SignIn: React.FC = () => {
  // const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { signed, user, loading, signIn, signOut } = useAuth();

  console.log(signed);
  // console.log(user);

  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  const textInputChange = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val: string) => {
    if (val.trim().length >= 6) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val: string) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandle = (email: string, password: string) => {
    console.log(email, password);

    if (data.email.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Dados Incorretos!",
        "O usuário ou senha não pode estar vazio.",
        [{ text: "Fechar" }]
      );
      return;
    }

    let params = {
      email: email,
      password: password,
    };

    try {
      signIn(params);
      Keyboard.dismiss();
    } catch (error) {
      alert("Ops, parece que algo deu errado");
      Keyboard.dismiss();
    }
  };

  function handleSignIn() {
    signIn(data);
  }
  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      {/* <View style={styles.header}>
            <Text style={styles.text_header}>Bem Vindo!</Text>
        </View> */}
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../../src/assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}
        >
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Seu email"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Informe seu melhor email.</Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}
        >
          Senha
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Sua Senha"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>A senha deve ter 6 caracteres.</Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: "#009387", marginTop: 15 }}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>

        <View style={styles.button}>
            
          <TouchableOpacity
            style={styles.signIn}
            // onPress={handleSignIn}
            onPress={() => {
              loginHandle(data.email, data.password);
            }}
          >
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <Text style={[styles.textSign, { color: "#fff" }]}>Entrar</Text>
              )}
              {/* <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Entrar</Text> */}
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signIn} onPress={() => {}}>
            <LinearGradient
              colors={["#e03838", "#d61010"]}
              style={[
                styles.signIn,
                {
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Google
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("UsersScreen")}
            style={[
              styles.signIn,
              {
                borderColor: "#009387",
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#009387",
                },
              ]}
            >
              Cadastrar-se
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignIn;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  header: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  // header: {
  //     flex: 1,
  //     justifyContent: 'flex-end',
  //     paddingHorizontal: 20,
  //     paddingBottom: 50
  // },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
