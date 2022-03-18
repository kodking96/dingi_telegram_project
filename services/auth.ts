import {Strategy} from 'passport-google-oauth20';

import { use, serializeUser, deserializeUser } from 'passport';

import config from '../config/defaults';
import User, { UserDocument } from '../model/User';
import {DocumentDefinition, FilterQuery} from "mongoose"

const clientID = config.clientID as string;
const clientSecret = config.clientSecret as string;

use(new Strategy({
    clientID:     clientID,
    clientSecret: clientSecret,
    passReqToCallback: true,
    callbackURL: "http://localhost:5000/google/callback"
  },
  async (request: any, accessToken: any, refreshToken: any, profile: any, done: any) => {
    const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
          email: profile.emails[0].value
    }
    console.log(newUser);

    let dbUser = new User(newUser);
    
/*
    try {
      await dbUser.save();
    }
    catch (e) {
      
    }*/

    done(null, newUser)
  }
));


serializeUser(function(user: any, done: any) {
 done(null, user);
})

deserializeUser(function(user: any, done: any) {
 done(null, user);
})