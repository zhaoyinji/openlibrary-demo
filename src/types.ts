export type AuthUser = {
  id: string
  name: string
  email: string
}

export type ClearAuthData = () => void

export type AuthContextState = {
  authData: AuthUser | null
}

export type AuthContextValue = AuthContextState & {
  clearAuthData: ClearAuthData
  setAuthData: (authData: AuthUser) => void
}
