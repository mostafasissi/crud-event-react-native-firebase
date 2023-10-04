import React, { useState } from 'react';
import { Modal , View  ,StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import AddEvent from './AddEvent';
export default function AddEventPopup() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View  style={styles.container}>
        <FeatherIcon
          name="plus" 
          style = {styles.plusIcon}          
          onPress={handleOpenModal}
          />

      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={handleCloseModal}
        style = {styles.modal }
      >
         <View style={styles.modalContainer}>
            <AddEvent />
        </View>
      </Modal>
    </View>
  );
  

  
}
const styles = StyleSheet.create({
  container: {
      position : 'absolute' , 
      bottom : 30 ,
      right : 30 
  },
  plusIcon : {  
    fontSize : 40 , 
    color : '#fff',
    backgroundColor : '#0080bf',
    borderRadius : 20 ,
    elevation: 5
  }, 
  
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
   modalContainer: {
     marginTop : 100,
    width: '80%', // Vous pouvez ajuster la largeur en fonction de vos besoins
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center', // Centrer verticalement et horizontalement
    alignSelf: 'center', // Centrer horizontalement
    elevation: 5

  },
 
})
