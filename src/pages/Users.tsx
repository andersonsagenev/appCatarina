import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform, TextInput, TouchableOpacity, ActivityIndicator, Alert, Keyboard } from 'react-native';
import StatusBarPage from '../components/StatusBarPage';
import Menu from '../components/Menu';

import { useTheme } from "react-native-paper";

import * as Animatable from "react-native-animatable";
import { Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const UsersScreen = () => {

    const { colors } = useTheme();
    const [loading, setLoading] = useState(false);

    const [data, setData] = React.useState({
        email: "",
        name: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChangeName = (val: string) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                name: val,
                check_textInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                name: val,
                check_textInputChange: false,
                isValidUser: false,
            });
        }
    };

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


  const registerHandle = (name: string, email: string, password: string) => {
    console.log(name, email, password);

    if (data.name.length == 0 || data.email.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Dados Incorretos!",
        "Os campos são de preenchimento obrigatórios.",
        [{ text: "Fechar" }]
      );
      return;
    }

    let params = {
      name: name,
      email: email,
      password: password,
    };

    try {
     // signIn(params);
      Keyboard.dismiss();
    } catch (error) {
      alert("Ops, parece que algo deu errado");
      Keyboard.dismiss();
    }
  };


    return (
        <View style={styles.container}>
            <StatusBarPage
                barStyle="ligth-content"
                backgroundColor="#000" />

            <Menu />

            <Text style={styles.title}>
                Cadastrar novo mito
            </Text>

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
                    Nome
                </Text>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Seu Nome"
                        placeholderTextColor="#666666"
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChangeName(val)}
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
                        <Text style={styles.errorMsg}>Informe seu nome.</Text>
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
                    Email
                </Text>
                <View style={styles.action}>
                    <FontAwesome name="envelope" color={colors.text} size={20} />
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

            
        <View style={styles.button}>

        <TouchableOpacity
            style={styles.signIn}
            // onPress={handleSignIn}
            onPress={() => {
                registerHandle(data.name, data.email, data.password);
            }}
          >
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              {loading ? (
                <ActivityIndicator color="#121212" size={24} />
              ) : (
                <Text style={[styles.textSign, { color: "#fff" }]}>Cadastrar</Text>
              )}
              {/* <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Entrar</Text> */}
            </LinearGradient>
            
          </TouchableOpacity>
        </View>

            </Animatable.View>

        </View>
    );
};

export default UsersScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f38218'
    },
    title: {
        marginTop: Platform.OS === "ios" ? 35 + '%' : 20 + '%',
        marginLeft: 20,
        fontSize: 33,
        fontWeight: 'bold',
        color: '#FFF'
    },
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
