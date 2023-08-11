import {Component} from "react";

const person = {
    name: 'Alert',
    surname: 'Muller',
    adress: {
        country: 'Germany',
        city: 'Dortmund',
        street: 'Kaiser'
    },
    profiles: ['twiter', 'google', 'telegram'],
    showProfiles: ()  => {
        person.profiles.forEach(
            (profile) =>  console.log(profile)
     )
    }
}

export default class PersonComponent extends Component{
    render() {
        return (
        <>
            <div> {person.name} </div>
            <div> {person.surname} </div>
            <div> {person.adress.country} </div>
            <div> {person.adress.city} </div>
            <div> {person.adress.street} </div>
            <div> {person.showProfiles()} </div>
        </>
        )
    }
}