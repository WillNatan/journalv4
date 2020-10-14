import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';

const Label = ({title}) =>(
    <Text style={styles.title}>
        {title}
    </Text>
)

const FormGroup = (props) => {
    return ( 
        <View style={styles.formGroup}>
            <Label title='This is a label'/>
            <TextInput placeholder="This is a placeholder" style={styles.inputText}/>
        </View>
     );
}

const styles = StyleSheet.create({
    formGroup:{
        marginTop:10,
        marginBottom:10
    },
    inputText:{
        backgroundColor:"#FFF",
        height:50,
        borderBottomWidth:3,
        borderBottomColor:"#DCDCDC",
        padding:10
    },
    title:{
        marginBottom:10,
        color: "#FFF",
        fontWeight:"bold"
    }
})

export default FormGroup;

