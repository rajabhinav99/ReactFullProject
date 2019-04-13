import React from 'react'

const UserContext = React.createContext('AbHiNaV')

const UserProvider = UserContext.Provider

const UserConsumer = UserContext.Consumer


export default {UserProvider, UserConsumer}