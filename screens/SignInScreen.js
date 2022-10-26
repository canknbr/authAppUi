import { View, Text,SafeAreaView ,ScrollView,TextInput} from 'react-native'
import React from 'react'
import COLORS from '../const/color'
import STYLES from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
const SignInScreen = () => {
  return (
    <SafeAreaView style={{flex:1,marginHorizontal:20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection:"row",marginTop:40}}>
            <Text style={{fontWeight:"bold",fontSize:22,color:COLORS.dark}}>LOREM</Text>
            <Text style={{fontSize:20,fontWeight:"bold",color:COLORS.secondary}}>Ipsum</Text>
        </View>
        <View style={{marginTop:70}}>
            <Text style={{fontSize:27,fontWeight:"bold",color:COLORS.dark}}>Welcome back,</Text>
            <Text style={{fontSize:18,fontWeight:"400",color:COLORS.light,marginTop:4}}>Sign in to continue</Text>
        </View>
        <View style={{marginTop:50}}>
            <View style={STYLES.inputContainer}>
                <Text style={STYLES.inputIcon}>{myIcon}</Text>
                <TextInput style={STYLES.input} placeholder="Phone Number" />
                </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignInScreen