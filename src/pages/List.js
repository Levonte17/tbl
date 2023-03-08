import { Link } from 'react-router-dom';
import { useState } from 'react';

function Index(props) {

    const [ newForm, setNewForm ] = useState({
        name: '',
        title: '',
        message: '',
        createdAt: '',
    });
    
    const loaded = () => {
        return props.people.map(person => (
            <div className="person" key={person._id}>
                <h2>
                    <Link to={`/people/${person._id}`}>
                        {person.name}
                    </Link>
                </h2>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading ...</h1>;
    };

    const handleChange = (e) => {
        setNewForm({
            ...newForm,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newForm.image) delete newForm.image
        props.createPeople(newForm); // lifting up state
        setNewForm({
            name: '',
            title: '',
            message: '',
        });
    };

    return (
        <section>
    <br/><br/>
            { props.people ? loaded() : loading() }
            <form onSubmit={handleSubmit}>
                <label>Name:
                <br/>
                    <input 
                        type="text"
                        value={newForm.name} 
                        onChange={handleChange}
                        placeholder="LeVonte Larry"
                        name="name"
                    />
                </label>
                <br/><br/>
                <label>Phone Number:
                <br/>
                    <input 
                        type="text"
                        value={newForm.title} 
                        onChange={handleChange}
                        placeholder="(123) 123-1234"
                        name="title"
                        />
                </label>
                <br/><br/>
                <label>Message:
                <br/>
                    <input 
                        className='message'
                        type="text"
                        value={newForm.message} 
                        onChange={handleChange}
                        placeholder="Write a message"
                        name="message"
                        />
                </label>
                    <br/><br/>
                <input className="inp" type="submit" value="Finish" />
            </form>
        </section>
    )
    
}

export default Index;