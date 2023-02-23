import React from "react";
import {Alert, StyleSheet, Text, Pressable, View, Modal as ContainerModal} from 'react-native';
import {CenteredView, ModalView} from './styles'


interface ModalProps{
  modalVisible: boolean
  setModalVisible: () => void
}

export function Modal({modalVisible, setModalVisible}:ModalProps ) {
  return (
      <ContainerModal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        // onRequestClose={() => {
        //   Alert.alert('Modal has been closed.');
        //   setModalVisible();
        // }}
        >
        <CenteredView>
          <ModalView>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              // onPress={() => setModalVisible(!modalVisible)}
              >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </ModalView>
        </CenteredView>
      </ContainerModal>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});