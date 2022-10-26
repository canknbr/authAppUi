import {View, Text, SafeAreaView, ScrollView, Image,TextInput,TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../const/color';
import STYLES from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
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
          <View style={STYLES.inputContainer}>
            <Icon name="lock-outline" size={20} color={COLORS.light} style={STYLES.inputIcon} />
            <TextInput placeholder="Password Correct" style={STYLES.input} secureTextEntry />
          </View>
          <TouchableOpacity style={STYLES.btnPrimary} activeOpacity={0.6} onPress={()=> navigation.navigate('SignIn')}>
            <Text style={{fontSize:22,color:COLORS.white}}>Sign Up</Text>
          </TouchableOpacity>
          
        </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default SignUpScreen