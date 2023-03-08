import { useState, useEffect,  } from 'react';

import { Routes, Route } from 'react-router-dom';
///////PAGES///////////////////
import List from '../pages/List';
import Athletes from '../pages/Atheletes';
import About from '../pages/About';
import Locations from '../pages/Locations';
import Lockdown from '../pages/Lockdown';
import ShowList from '../pages/ShowList';
import Homepage from '../pages/Homepage';

function Main(props) {

    const [people, setPeople] = useState(null);
    const API_URL = 'http://localhost:4000/api/contact/';
    //const API_URL = 'https://dih-api.adaptable.app/api/people';

const getData = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPeople(data);
    } catch (error) {
        console.log(error)
    }
}

const createPeople = async (person) => {
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers:{
                'content-type': 'Application/json'
            }, 
            body: JSON.stringify(person)
    }); 
    getData();

    } catch (error) {
        
    }
}

const deletePeople = async (id) => {
    try {
        await fetch(API_URL + id, {
            method: 'DELETE'
        });
        getData();
    } catch (error) {
        console.log(error);
      
    }
}

const updatePeople = async (updatedPeople, id) => {
    try {
        await fetch(API_URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(updatedPeople)
        });
        
        getData();

    } catch (error) {
        console.log(error)
        // TODO: add additional logic to alert a user 
        // in case something goes wrong
    }
}

useEffect(() => {
    getData();
}, []);

    return(

<main>

<Routes>
    <Route path="/" element={
        <Homepage 
        createPeople={createPeople} 
        />
    } />
    
    <Route path="/about-me" element={
        <Lockdown 
        />
    } />
    
    <Route path="/athletes" element={
        <Athletes 
        />
    } />
    
    <Route path="/about-us" element={
        <About 
        />
    } />
    
    <Route path="/locations" element={
        <Locations 
        />
    } />
    
    <Route path="/people" element={
        <List            
            people={people} 
            createPeople={createPeople} 
        />
    } />
    
    <Route path="/people/:id" element={
        <ShowList 
            people={people}
            deletePeople={deletePeople}
            updatePeople={updatePeople} 
        />
    } />
</Routes>
</main>

    )
};

export default Main;