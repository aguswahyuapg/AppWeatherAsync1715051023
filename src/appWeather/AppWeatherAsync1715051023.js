import React from 'react';
import { AppRegistry, StyleSheet, Text, Button, TextInput, View, Image, ActivityIndicator, Modal } from 'react-native';

const iconTemp = require('./img/thermometer.png');
const iconWind = require('./img/wind.png');
const iconMain = require('./img/sun.png');
const iconDesc = require('./img/sunny.png');
const iconSunrise = require('./img/sunrise.png');
const iconSunset = require('./img/sunset.png');
const iconPressure = require('./img/pressure.png');
const iconHumidity = require('./img/humidity.png');
const iconSeaLvl = require('./img/sea.png');
const iconGndLvl = require('./img/grass.png');

export default class RamalanCuaca extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      city:'',
      showLoading: true,
      forecast:{
        main: '-',
        description: '-',
        temp: 0,
        sunrise: 0,
        sunset: 0,
        pressure: 0,
        humidity: 0,
        sealvl: 0,
        gndLvl: 0,
        speed: 0,
      }
    };
  }

  componentWillMount(){
    setTimeout(()=>{
      this.setState({
        showLoading: false
      })
    },
    3000)
  }

  async getWeather(){

  try {
 
    let response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q='
      +this.state.city+ 
      '&appid=1f8832c25af97be0a04338b322a503ab&units=metric'

    );

    let responseJson = await response.json();
    return this.setState({
      forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp,
          sunrise: responseJson.sys.sunrise,
          sunset: responseJson.sys.sunset,
          pressure: responseJson.main.pressure,
          humidity: responseJson.main.humidity,
          seaLvl: responseJson.main.sea_level,
          gndLvl: responseJson.main.grnd_level,
          speed: responseJson.wind.speed
      }
    });
  } catch (error){
    console.error(error)
  }
}


  render() {
    return (

    <View style={styles.containerMain}>

      <View style={styles.boxHeader}>
          <Text style={{ textAlign: 'center', padding: 45, fontSize: 25, color: '#E8F5E9'}} >PRAKIRAAN CUACA</Text>
      </View>

      <View style={styles.boxPencarian}>
          <Text style={{ textAlign: 'center', padding: 1, fontSize: 20 , color: '#E8F5E9'}}>MASUKAN NAMA KOTA</Text>
          
          <View style={styles.textBoxStyle}>
          <TextInput 
              style={{ height: 40, fontSize: 20 }}
              placeholder="Masukan Nama Kota"
              onChangeText={( city )=> this.setState({ city })}
          />
          </View>

          <View style={styles.buttonStyle}>
            <Button
                        style={{ width: 170 }}
                        onPress={()=> this.getWeather()}
                        title="LIHAT CUACA"
                        accessibilityLabel="Click to search city"
                    />
          </View>
      </View>

      
      <View style={styles.isiTengah}>
      {/* temperature */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconTemp} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Temp : {this.state.forecast.temp} 'C</Text>
            </View>
          </View>
        </View>

        {/* Kecepatan Angin */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconWind} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Wind Speed: {this.state.forecast.speed}</Text>
            </View>
          </View>
        </View>

         {/* Matahari Main */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconMain} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Main : {this.state.forecast.main}</Text>
            </View>
          </View>
        </View>

         {/* Main Description */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconDesc} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Main Desc : {this.state.forecast.description}</Text>
            </View>
          </View>
        </View>

        {/* Sunrise */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconSunrise} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Sunrise : {this.state.forecast.sunrise}</Text>
            </View>
          </View>
        </View>

         {/* Sunset */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconSunset} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Sunset : {this.state.forecast.sunset}</Text>
            </View>
          </View>
        </View>

        {/* Presure */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconPressure} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Pressure : {this.state.forecast.pressure}</Text>
            </View>
          </View>
        </View>

        {/* humidity */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconHumidity} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Humidity : {this.state.forecast.humidity} % </Text>
            </View>
          </View>
        </View>

        {/* Sea Level */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconSeaLvl} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Sea Level : {this.state.forecast.seaLvl}</Text>
            </View>
          </View>
        </View>

        {/* Ground Level */}
        <View style={styles.boxItem}>
          <View style={styles.BoxItemInner}>
            <Image source={iconGndLvl} style={styles.boxIcon} />
            <View style={styles.boxItemValue}>
              <Text style = {{padding: 2, fontSize: 16}} >Ground Level : {this.state.forecast.gndLvl}</Text>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.boxFotter}>
          <Text 
          style={{ textAlign: 'center', padding: 3, fontSize: 15, color: 'white' }}>
          COPYRIGHT© AGUSWAHYU.COM
          </Text>
          <Text 
          style={{ textAlign: 'center', padding: 1, fontSize: 12, color: 'white' }}>
          Pembuatan Web Streaming, Template & Plugin Wordpress, Serta Source Code Premium
          </Text>
      </View>
</View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#C8E6C9',
    flex: 1,
    flexDirection: 'column'
  },
  boxFotter: {
    height: '10%',
    backgroundColor: '#1B5E20',
  },
  boxHeader: {
    height: '15%',
    backgroundColor: '#1B5E20',
  },
  
  boxPencarian: {
    //flex: 0.7,
    height: '20%',
    backgroundColor: '#1B5E20',
    margin: 10
  },
  isiTengah: {
    //flex: 1,
    height: '55%',
    //backgroundColor: '#81C784',
    //marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    //justifyContent: 'space-around',
    //alignItems: 'center',
    flexDirection: 'row',
    flexWrap: "wrap",
    //padding: 5
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center'
  },
  textBoxStyle: {
    //flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    backgroundColor: '#C8E6C9'
  },
  boxItem: {
    width: '50%',
    height: '20%',
    padding: 5,
  },
  BoxItemInner: {
    flex: 1,
    backgroundColor: '#A5D6A7',
    flexDirection: 'row',
    flexWrap: "wrap",
    borderColor: 'black',
    borderWidth: 1
  },
  boxIcon: {
    width: '35%',
    height: '100%',
    backgroundColor: '#FFF8E1',
    justifyContent: 'center', 
  },
  boxItemValue: {
    width: '65%',
    height: '100%',
    justifyContent: 'center', 
  },
  containerLoading:{
    padding: '50%',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});