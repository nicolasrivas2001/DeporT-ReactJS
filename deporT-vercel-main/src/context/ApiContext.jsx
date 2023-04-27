import { createContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, query, collection, where } from 'firebase/firestore';
import { apiSports } from './contextHelper';

export const UseApiContext = createContext();

export const ApiContext = ({ children }) => {
    const firebaseConfig = {
        apiKey: "AIzaSyAkQxRXhDXoNOnqp5R1_ekjHazLVfVAuIs",
        authDomain: "deport-831e7.firebaseapp.com",
        projectId: "deport-831e7",
        storageBucket: "deport-831e7.appspot.com",
        messagingSenderId: "233030132572",
        appId: "1:233030132572:web:b57c900c39eadd0b149799"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // EJEMPLOS =>

    const [dataApi,setDataApi]=useState([])
    const [dataApiBasquet,setDataApiBasquet]=useState([])
    const [noticias,setNoticias]=useState([])
    const [periodistas,setPeriodistas]=useState([])

    useEffect(()=>{
        // BASQUET LEAGUES=>
        //     NBA. ID=>12
        //     WNBA. ID=>5

        // SI LLAMAMOS A BASQUET DEBEMOS PASAR LA FECHA => FORMATO => "2023-01-27"
        apiSports(setDataApi,"futbol");
        const fechaActual = new Date();
        let diaActual = fechaActual.getDate()
        let mesActual = fechaActual.getMonth() + 1; 
        let anioActual = fechaActual.getFullYear()
       
        if(diaActual<10){
            diaActual="0"+diaActual
        }
        if(mesActual<10){
            mesActual="0"+mesActual
        }
        apiSports(setDataApiBasquet,"basquet",`${anioActual}-${mesActual}-${diaActual}`,"12","2022-2023");

        searchCollections("noticias").then(i=>{
            if(noticias.length===0){
                setNoticias(i)
            }
        })
        searchCollections("periodista").then(i=>{
            if(periodistas.length===0){
                setPeriodistas(i)
            }
        })
    },[])

    // EJEMPLOS <=

    const searchCollections = async (nameCollection) => {
        // LLAMADA SIMPLE PARA OBTENER TODOS LOS DATOS SOBRE CIERTAS COLECCIONES DE LA BASE DE DATOS.
        const collectionsData = await getDocs(query(collection(db, nameCollection)));
        const collections = collectionsData.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return collections;
    };

    const collectionByParam = async (nameCollection, param, type) => {
        // REVISAR EN LA DOCUMENTACION DE FIREBASE COMO LLAMAR DOCUMENTOS CON PARAMETRO WHERE. USAR "param" Y "type".
        const collectionsData = await getDocs(query(collection(db, nameCollection), where()));
        const collections = collectionsData.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        });
        return collections;
    };


    return (
        <UseApiContext.Provider value={{ searchCollections, collectionByParam, dataApi, dataApiBasquet, noticias, periodistas}}>
            {children}
        </UseApiContext.Provider>
    );
};

