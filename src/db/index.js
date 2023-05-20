import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('addres.db')

export const initUser = () => {
  const promise = new Promise ((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL)',
        [],
        () => { resolve() },
        (_, err) => { reject(err) })
    })
  })
  return promise
}
export const initDarkMode = () => {
  const promise = new Promise ((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql('CREATE TABLE IF NOT EXISTS darkmode (id INTEGER PRIMARY KEY NOT NULL, mode TEXT NOT NULL)',
        [],
        () => { resolve() },
        (_, err) => { reject(err) })
    })
  })
  return promise
}
export const insertMode = (mode) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO darkmode (mode) VALUES (?);',
        [mode],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
  return promise
}
export const insertUser = (email, password) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO user (email, password) VALUES (?, ?);',
        [email, password],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
  return promise
}
export const deleteUser = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM user',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),
      )
    })
  })
  return promise
}

export const fetchUser = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM user',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),       
      )
    })
  })
  return promise
}
export const fetchMode = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM darkmode',
        [],
        (_, result) => resolve(result),
        (_, err) => reject(err),       
      )
    })
  })
  return promise
}