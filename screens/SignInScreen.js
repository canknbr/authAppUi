import {View, Text, SafeAreaView, ScrollView, Image,TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../const/color';
import STYLES from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20,}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            LOREM
          </Text>
          <Text
            style={{fontSize: 20, fontWeight: 'bold', color: COLORS.secondary}}>
            Ipsum
          </Text>
        </View>
        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome back,
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: COLORS.light,
              marginTop: 4,
            }}>
            Sign in to continue
          </Text>
        </View>
          
          <View style={{marginTop: 50}}>
            <View style={STYLES.inputContainer}>
              <Icon name="mail-outline" size={20} color={COLORS.light} style={STYLES.inputIcon} />
              <TextInput placeholder="Email" style={STYLES.input} autoCapitalize="none" autoCorrect={false} />
            </View>
            <View style={STYLES.inputContainer}>
              <Icon name="lock-outline" size={20} color={COLORS.light} style={STYLES.inputIcon} />
              <TextInput placeholder="Password" style={STYLES.input} secureTextEntry />
            </View>
            <TouchableOpacity style={STYLES.btnPrimary} activeOpacity={0.6} onPress={()=> navigation.navigate('SignUp')}>
              <Text style={{fontSize:22,color:COLORS.white}}>Sign In</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row",marginTop:20,justifyContent:"center",alignItems:"center"}}>
              <View style={STYLES.line}></View>
              <Text style={{color:COLORS.light,marginHorizontal:10}}>OR</Text>
              <View style={STYLES.line}></View>
            </View>
            <View style={{flexDirection:"row",marginTop:20,justifyContent:"center"}}>
              <TouchableOpacity style={STYLES.btnSecondary} activeOpacity={0.6}>
                <Text style={{color:COLORS.light,fontSize:18}}>Sign In with Facebook</Text>
                <Image source={require('../assests/facebook.png')} style={STYLES.btnImage} />
              </TouchableOpacity>
              <View style={{width:10}}></View>
              <TouchableOpacity style={STYLES.btnSecondary} activeOpacity={0.6}>
                <Text style={{color:COLORS.light,fontSize:18}}>Sign In with Google</Text>
                <Image source={require('../assests/google.png')} style={STYLES.btnImage} />
              </TouchableOpacity>
              </View>
              <View style={{flexDirection:"row",marginTop:20,justifyContent:"center"}}>
                <Text style={{color:COLORS.light}}>Don't have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                  <Text style={{color:COLORS.secondary,fontWeight:"bold",marginLeft:5}}>Sign Up</Text>
                </TouchableOpacity>
                </View>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
