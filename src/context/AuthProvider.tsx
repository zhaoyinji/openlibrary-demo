import { type ReactElement, useState, useMemo } from 'react'

import AuthContext from './AuthContext'
import { type AuthUser } from 'types'

type AuthProviderProps = {
  children: ReactElement
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthUser | null>(null)

  const clearAuthData = (): void => {
    setAuthData(null)
  }

  const memoizedAuthContextValue = useMemo(
    () => ({
      authData,
      setAuthData,
      clearAuthData,
    }),
    [authData],
  )

  return (
    <AuthContext.Provider value={memoizedAuthContextValue}>
      {children}
    </AuthContext.Provider>
  )
}
