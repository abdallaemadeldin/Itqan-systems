import React, { useState, createContext, useContext } from "react"

export const VacationContext = createContext();

export const VacationProvider = (props) => {
    const [vacations, setVacations] = useState([]);
    const [temp, setTemp] = useState([]);

    const addVacation = data => {
        setTemp(st => [...st, data]);
        setVacations(st => [...st, data]);
    }

    const deleteVacation = name => {
        setTemp(st => st.filter((e) => e.name !== name));
        setVacations(st => st.filter((e) => e.name !== name));
    }

    const search = key => {
        if (!key) setVacations([...temp]);
        setVacations(st => st.filter(e => e.name.toLowerCase().includes(key.toLowerCase())));
    }

    const contextValue = { vacations, addVacation, deleteVacation, search }

    return (
        <VacationContext.Provider value={contextValue}>
            {props.children}
        </VacationContext.Provider>
    );
}

export const useVacation = () => useContext(VacationContext);