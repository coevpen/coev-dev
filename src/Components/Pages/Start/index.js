import React from 'react';
import MePhoto from '../../../assets/mypic.jpg';

function Start(){
    return(
        <div class="aboutMe">
            <img class="mePhoto" src={MePhoto} alt="me"/>
            <div class="aboutMeTitle">
                <strong class="name">Courtney Evins</strong>
                <br/>
                <span class="subtitle">Full Stack Web Developer</span>
            </div>
        </div>
    );

}

export default Start;