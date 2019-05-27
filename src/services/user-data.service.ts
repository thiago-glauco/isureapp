import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserDataService {
  usersRef: AngularFireList<User>;
  userRef: AngularFireList<User>;
  user: Observable<any>;

  constructor( private userDB: AngularFireDatabase) {
    this.usersRef = this.userDB.list('/users');
  }

  getUserData(uid: string) {
    this.userRef = this.userDB.list('/users', ref => ref.orderByChild('uid').equalTo(uid).limitToLast(1));
    return  this.userRef.snapshotChanges();
    /*
    this.user.subscribe(
      (user) => console.dir(user)
    )
    console.log("Database Userdata: " );
    console.dir(this.user);*/
  }

  setUserData(Key) {

  }
  createUserData(user: User){
    return this.usersRef.push(user).key;
  }
  
  lastUserLogin(key, lastLogin) {
    this.usersRef.update(key, {lastSignIn: lastLogin});
  }
}