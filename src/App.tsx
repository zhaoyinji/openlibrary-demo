import { Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import AuthGuard from 'components/AuthGuard'
import MainLayout from 'layout/MainLayout'
import LoginPage from 'pages/LoginPage'
import SearchPage from 'pages/SearchPage'
import { AuthProvider } from './context/AuthProvider'

const App: React.FC = () => (
  <RecoilRoot>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="search"
          element={
            <AuthGuard
              component={
                <MainLayout>
                  <SearchPage />
                </MainLayout>
              }
            />
          }
        />
      </Routes>
    </AuthProvider>
  </RecoilRoot>
)

export default App
