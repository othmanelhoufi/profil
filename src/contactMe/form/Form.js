
import React, { useState } from 'react';
import useForm from 'react-hook-form';
import './FormStyle.scss';

import Fade from 'react-reveal/Fade';


export default function Form( props ) {

  const [alertController, setAlertControler] = useState({
    messageSent : false
  });

  const { register, handleSubmit, errors } = useForm(); // initialise the hook


  const onSubmit = (data, e) => {

    window.Email.send({
            SecureToken : "83788b8c-03d1-41cb-88aa-4a21cd24ee2b",
            To : props.email,
            From : data.email,
            Subject : "Personal Profil",
            Body : "<h3> Firstname: " + data.firstname + "</h3>"
                  + "<h3> Lastname: " + data.lastname + "<h3>"
                  + "<h3> Email: " + data.email + "<h3><br/>"
                  + "<h3> Message : <h3><br/>" + data.message
          }).then(
            // message => alert( message )
            setAlertControler( {
              messageSent : true
            } )
          );

          e.target.reset(); // standard reset after form submit
  }; // callback when validation pass



  return (


    <form onSubmit={handleSubmit(onSubmit)} className="form">

        <div className="outerContainer">
          <div className="innerContainer">
            <div className="firstnameContainer">
              <div className="inputTitle">Firstname</div>
              <input type="text" name="firstname" placeholder="Annette" ref={register({required: true, pattern: /^[A-Za-z]+$/i})} />
              <div className="errorMessage">{errors.firstname && 'Firstname is required (no white space)'}</div>
            </div>

            <div className="lastnameContainer">
              <div className="inputTitle">Lastname</div>
              <input type="text" name="lastname" placeholder="Cooper" ref={register({required: true, pattern: /^[A-Za-z]+$/i})} />
              <div className="errorMessage">{errors.lastname && 'Lastname is required (no white space)'}</div>
            </div>

            <div className="emailContainer">
              <div className="inputTitle">E-mail</div>
              <input type="email" name="email" placeholder="annette.cooper@example.com" ref={register({required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i})} />
              <div className="errorMessage">{errors.email && 'Valide e-mail is required'}</div>
            </div>
          </div>

          <div className="messageContainer">
            <div className="inputTitle">Message</div>
            <textarea name="message" ref={register({required: true, min: 150})} />
            <div className="errorMessage">{errors.message && 'Message is required'}</div>
          </div>
        </div>

        <div className="submitContainer">
          <input className="button element color-11" type="submit" value={alertController.messageSent ? "SENT" : "SUBMIT"} disabled={alertController.messageSent ? "disabled" : ""}/>
        </div>

    </form>

  );
}
