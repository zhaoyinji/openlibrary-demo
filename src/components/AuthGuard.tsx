import { useContext, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

import AuthContext from 'context/AuthContext'

type AuthGuardProps = {
  component: ReactNode
}

const AuthGuard: React.FC<AuthGuardProps> = ({ component }) => {
  const { authData } = useContext(AuthContext)

  return authData ? <>{component}</> : <Navigate to="/login" replace />
}

export default AuthGuard
