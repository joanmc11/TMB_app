import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Utilitzar aquest context cada cop que necessitem accedir al model
export const ModelContext = createContext();

// Posar aquest component com a component arrel (a dalt de tot de l'arbre)
export const ModelProvider = ({ children }) => {
  // Totes les dades de l'aplicació van aquí
  const [codiLinea, setCodiLinia] = useState(-1);
  const [allParades, setAllParades] = useState([]);
  const [busquedas, setBusquedas] = useState([]);

  const loadBusquedas = async () => {
    const json = await AsyncStorage.getItem("busquedas");
    console.log(json);
    setBusquedas(JSON.parse(json));
  };

  useEffect(() => {
    loadBusquedas();
  }, []);

  const afegeixCerca = async (cerca) => {
    console.log(cerca);

    if (cerca != -1) {
   
      busquedas.map((item, index) => { item.codi == cerca.codi ? busquedas.splice(index, 1) : null });


      const newBusqueda = [...busquedas, cerca];
      setBusquedas(newBusqueda);
      console.log(newBusqueda);
      await AsyncStorage.setItem("busquedas", JSON.stringify(newBusqueda));
    }
  };

  const eliminaCerques = async () => {

    const newBusqueda = [];
    setBusquedas(newBusqueda);
    console.log(newBusqueda);
    await AsyncStorage.setItem("busquedas", JSON.stringify(newBusqueda));

  };



  return (
    <ModelContext.Provider
      value={{
        codiLinea,
        setCodiLinia,
        allParades,
        setAllParades,
        busquedas,
        afegeixCerca,
        eliminaCerques,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};
