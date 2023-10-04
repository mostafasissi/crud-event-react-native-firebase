import {View, StyleSheet , TextInput ,TouchableOpacity , Button  } from 'react-native';
import React, { useState ,useEffect} from 'react';
import { Picker  } from '@react-native-picker/picker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createDocument } from '../service/eventService';

export default function AddEvent() {

  // event title 
  const [title, setTitle] = useState('');
  // event address 
  const [address, setAddress] = useState('');
  // event type  
  const [eventType, setEventType] = useState(null);
  const eventOptions = [
    { label: 'Conference', value: 'conference' },
    { label: 'Seminar', value: 'seminar' },
    { label: 'Workshop', value: 'workshop' },
    { label: 'Webinar', value: 'webinar' },
    { label: 'Trade Show', value: 'tradeshow' },
    { label: 'Symposium', value: 'symposium' },
    // Ajoutez d'autres catégories d'événements professionnels ici
  ];
  // event date 
  const [dateTimePickerVisible, setDateTimePickerVisible] = useState(false);
  const [dateOrTimeValue, setDateOrTimeValue] = useState(new Date());
  const [placeholderText, setPlaceholderText] = useState('');
  // Utilisez useEffect pour mettre à jour le placeholder lors du montage initial
  useEffect(() => {
    const formattedDate = dateOrTimeValue.toLocaleDateString();
    setPlaceholderText(formattedDate);
  }, []);

  // event description 
  const [description, setDescription] = useState('');

  const handleSubmit = async () =>{
    console.log('Données de l\'événement :',
      {
        title,
        address,
        eventType,
        dateOrTimeValue,
        description
      });

     const id = await createDocument('events' ,    {
        title,
        address,
        eventType,
        eventTime : dateOrTimeValue,
        description, 
        organizer : "èndefdjh",
      } )

      console.log(id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>

        <View style={styles.input}>
          <FeatherIcon name="calendar" size={20} color="gray" style={styles.icon} />
          <TextInput
            value={title}
            onChangeText={text => setTitle(text)}
            style={styles.inputText}
            placeholder="Event Title"
            autoCapitalize='none'
            autoCorrect={false} />
        </View>
        <View style={styles.input}>
          <FeatherIcon name="map-pin" size={20} color="gray" style={styles.icon} />
          <TextInput
            value={address}
            onChangeText={text => setAddress(text)}
            style={styles.inputText}
            placeholder="Event Address "
            autoCapitalize='none'
            autoCorrect={false} />
        </View>
        <View style={styles.input}>
          <FeatherIcon name="clock" size={20} color="gray" style={styles.icon} />

          <View style={styles.inputText}>
            <TouchableOpacity
              onPress={() => setDateTimePickerVisible(!dateTimePickerVisible)}
            >
              <TextInput
                label='Shift Starts At'
                placeholder={dateOrTimeValue.toLocaleDateString()}
                editable={false}
                value={dateOrTimeValue.toLocaleDateString()}
              />
            </TouchableOpacity>

            {dateTimePickerVisible &&
              (<DateTimePicker
                mode={"datetime"} // THIS DOES NOT WORK ON ANDROID. IT DISPLAYS ONLY A DATE PICKER.
                display='default' // Android Only  
                is24Hour={false} // Android Only 
                value={dateOrTimeValue}

                onChange={(event, value) => {
                  setDateTimePickerVisible(!dateTimePickerVisible);
                  setDateOrTimeValue(value);
                  if (event.type === "set") {
                    const formattedDate = value.toLocaleDateString();
                    setPlaceholderText(formattedDate);
                  }

                }}
              />)}
          </View>
        </View>
        <View style={styles.selectInput}>
          <Picker
            selectedValue={eventType}
            onValueChange={(itemValue, itemIndex) => setEventType(itemValue)}
          >
            {eventOptions.map((option, index) => (
              <Picker.Item
                style={styles.pickerItem}
                key={index}
                label={option.label}
                value={option.value}
              />
            ))}
          </Picker>
        </View>
        <View style={styles.input}>
          <TextInput
            value={description}
            onChangeText={text => setDescription(text)}
            style={styles.inputText}
            placeholder="Description  ..... "
            numberOfLines={4}
            multiline={true}
            autoCapitalize='none'
            autoCorrect={false} />
        </View>
        <Button title="Share Event" onPress={handleSubmit} color = '#0080bf' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  
  inputContainer: {
    marginTop: 0,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    width: 280,
  },
  selectInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  pickerItem: {
    color: 'gray',
  },
  icon: {
    color: 'gray',
  },
  inputText: {
    flex: 1,
    marginLeft: 10,
    color: 'gray',
  },
 
});
