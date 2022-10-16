import React, {useState} from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function Contacs() {
  const [contacts, setContacts]= useState([]);
  const [contact, setContact]= useState({name: '',number: ''});
  const handleChangeName=(text)=>{
    setContact({...contact, name: text})
  };
  const handleChangeNumber=(text)=>{
    setContact({...contact, number: text})
  };
  const submitContact=()=>{
    setContacts([...contacts, contact])
    console.log(contacts);
    setContact({name: '',number: ''});
  };
  return (
    <View style={{ padding: 80,}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        Kontak
      </Text>
      <TextInput 
        style={{
          borderwidth: 1,
          bordercolor: 'black',
          height: 50,
          paddingBottom: 20
        }}
        placeholder='Nama'
        onChangeText={(text)=>handleChangeName(text)}
        value={contact.name}
      />
      <TextInput 
        style={{
          borderwidth: 1,
          bordercolor: 'black',
          height: 50,
          paddingBottom: 20
        }}
        placeholder='Nomor'
        onChangeText={(text)=>handleChangeNumber(text)}
        value={contact.number}
      />
      <View>
      <Button title='Tambahkan Kontak' onPress={()=>submitContact()}/>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          marginBottom: 20,
          marginTop: 50,
        }}
      >Kontak Anda
      </Text>
      {contacts.map((contact)=>{
        if(
          contact.name == '' || 
          contact.number == '' || 
          contact.number == undefined)
          {
            return;
          }
        return (
          <View 
            style={{
              borderwidth: 1,
              bordercolor: 'black',
              height: 30,
              paddingBottom: 10,
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Text>{contact.name}</Text>
            <Text>{contact.number}</Text>
          </View>
        );
      })}
    </View>
  );
}
