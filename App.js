import React,{useState} from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';




let tempo = null;
let ss = 0
let mm = 0
let hh = 0

export default function AppCronometro() {
    const [inicia,setInicia] = useState('Iniciar');
    const [linpar,setLinpar] = useState('Reiniciar');
    const [numero,setNumero] = useState(0)
    const [ultimoresultado,setUltimoresultado] = useState(null)



 function vai(){
  if(tempo !== null){
     clearInterval(tempo);
    
     tempo = null;
     
     setInicia('Iniciar')

   
  }else{
    tempo = setInterval(() => {
         ss++;   

      if(ss == 60){

         ss = 0;
         mm++;
      }
      if(mm == 60){
       mm = 0
       hh++;
        
    

      }
   
      let formatacao = (hh < 0 ? "0" + hh : hh) + ':' +(mm < 0 ? '0' + mm : mm) + ':' + (ss < 0 ? '0' + ss: ss)  
       
     
   
     
      setNumero(formatacao)
     
     
    },100)

    
    setInicia('Pausar')
    setUltimoresultado(null)
   
  }
  


    
 }
 function Clear(){
   if(tempo !== null){
        
      clearInterval(tempo)
      
      tempo = null
    
   }
   setUltimoresultado(numero)
   setNumero(0)
   ss = 0;
   mm = 0;
   hh = 0;
   setInicia('Iniciar')

}

 




 return (
   <View style={Estilos.Conteiner}>

       <View style={Estilos.ConteinerTitulodoApp}>
          <Text style={Estilos.TitulodoApp}>Cronometro App</Text>
       </View>

       <Image source={require('./src/crono.png')} style={Estilos.Imagem}/>

       <Text style={Estilos.TextoTimer}>{numero}</Text>
     
     <View style={Estilos.conteinerBotoes}>
      <TouchableOpacity onPress={() => vai()} style={Estilos.botoes}>
         <Text style={Estilos.textoBotoes}>{inicia}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Clear()} style={Estilos.botoes}>
         <Text style={Estilos.textoBotoes}>{linpar}</Text>
      </TouchableOpacity>   
     </View> 
     
       <View style={Estilos.ultimoTempo}>
          <Text style={Estilos.ultimoTempoTexto}>{ultimoresultado ? 'Ultimo Tempo:' + ultimoresultado : ''} </Text>

       </View>


   </View>

  );
}

const Estilos = StyleSheet.create({
   ConteinerTitulodoApp:{
      marginBottom: 50
      ,

   },
    TitulodoApp:{
      fontSize: 25,
      fontStyle: 'italic',
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#fff'
   },
   Conteiner: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00aeef'
   },
   Imagem: {
      width: 250,
      height: 300
   },
   TextoTimer:{
      marginTop: -150,
      fontSize: 45,
      fontWeight: 'bold',
      color: 'white'
   },
   conteinerBotoes: {
      flexDirection: 'row', 
      marginTop: 130
   },
   botoes:{
     flex: 1,
     justifyContent:'center',
     alignItems: 'center',
     margin: 17,
     backgroundColor: '#fff',
     height: 45,
     borderRadius: 5

   },
   textoBotoes:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00aeef',
        textAlign: 'center',

   },
   ultimoTempo:{
      marginTop: 40,

   },
   ultimoTempoTexto: {
      fontSize: 25,
      color: '#fff',
      fontStyle: 'italic'

   }


})
