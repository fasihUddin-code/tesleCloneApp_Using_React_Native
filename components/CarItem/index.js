import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './style'
import StyledButton from '../StyledButton'

const CarItem = (props) => {


  const { name, tagline, taglineCTA, image } = props.car;


  return (

    <ImageBackground
      source={image}
      style={{ uri: styles.image }}
    >
      <View style={styles.carContainer}>


        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}
            {' '}
            <Text style={styles.subtitleCTA}>
              {taglineCTA}
            </Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>

          <StyledButton
            type="primary"
            content={"Custom Order"}
            onPress={() => {
              console.warn("Custom Order was pressed");
            }}

          />

          <StyledButton
            type="secondary"
            content={"Existing Inventory"}
            onPress={() => {
              console.warn("Existing Inventory was pressed");
            }}

          />
        </View>




      </View>
    </ImageBackground>
  )
}

export default CarItem