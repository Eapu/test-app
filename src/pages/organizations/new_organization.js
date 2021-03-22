import { useForm } from 'react-hook-form'
import {useRouter} from 'next/router'
import Container from '../../../components/container'
import  {Alert} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Amplify, { Auth } from "aws-amplify";

const users = [
  "user1",
  "user2",
  "user3",

];
const OrganizationForm = (props) => {
    const [searchUser, setSearchUser] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const { query } = useRouter();
    const initialValues = {
        users: query.users || 'all'
    }
    const handleChange = event => {
        setSearchUser(event.target.value);
    };

    useEffect(() => {
        const results = users.filter(user => 
            user.toLowerCase().includes(searchUser)
        );
        setSearchResults(results);
    }, [searchUser]);

    useEffect(() => {
    const getUser = async () => {
      try {
        const authenticatedUser = await Auth.currentAuthenticatedUser();
        console.log(Auth.user.attributes.email)
      } catch {
        console.log("The user isn't signed in");
      }
    };

    getUser();
  }, []);
    const { register, handleSubmit,errors } = useForm();
    const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }
    return (
        <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name of Organization</label>
          <input ref={register({required:true, maxLength:20})}
           name="name"
           type="text"
           className="form-control"
           id="name"
           placeholder="Example input" />
           { errors?.name && 
            <Alert variant="danger">
            {errors.name?.type == 'required' && <>name must not be empty</>} 
            {errors.name?.type == 'maxLength' && <> Max length name is 20 characters</>}  
            </Alert>
           }
        </div>
        <div className="form-group">
          <label htmlFor="owner">Owner</label>
          <input readOnly ref={register}
           name="owner" type="text"
           className="form-control"
           id="owner"
           value={Auth.user.attributes.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="users">invite users</label>
          <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input ref={register({required:true, maxLength:20})}
                name="users"
                type="text"
                className="form-control"
                id="users"
                value={searchUser}
                onChange={handleChange}
                placeholder="Search for an user" />
                { errors?.users && 
                    <Alert variant="danger">
                    {errors.users?.type == 'required' && <>users must not be empty</>} 
                    {errors.users?.type == 'maxLength' && <> Max length users is 10 characters</>}  
                    </Alert>
                }
         </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    <ul>
    {searchResults.map(item => (
        <li>{item}</li>
    ))}
    </ul>
      </Container>
    );
}

export default OrganizationForm;





/**
    const results = !searchUser
    ? users
    : users.filter(user =>
        user.toLowerCase().includes(searchUser.toLocaleLowerCase())
      );

 */

 /**
    React.useEffect(() => {
        const results = users.filter(user => 
            user.toLowerCase().includes(searchUser)
        );
        setSearchResults(results);
    }, [searchUser]);

  */