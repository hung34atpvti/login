export interface IUser {
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;
}

export class User implements IUser{
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;

  constructor(id: string, username: string, password: string, firstName: string, lastName: string, token: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.token = token;
  }

  // constructor(user?: object) {
  //   for (const key in user) {
  //     if (user.hasOwnProperty(key)) {
  //       this[key] = user[key];
  //     }
  //   }
  // }
}
