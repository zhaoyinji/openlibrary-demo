import { createContext } from 'react'

import { type AuthContextState, type AuthContextValue } from 'types'

const initialAuthContextState: AuthContextState = {
  authData: null,
}

const initialAuthContextValue: AuthContextValue = {
  ...initialAuthContextState,
  clearAuthData: (): void => {},
  setAuthData: (): void => {},
}

const AuthContext = createContext<AuthContextValue>(initialAuthContextValue)

export default AuthContext
