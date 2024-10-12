import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button, TextField, Typography, Stack } from '@mui/material'
import AuthContext from 'context/AuthContext'

const LoginPage: React.FC = () => {
  const { setAuthData } = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    if (email && password) {
      setAuthData({ email, id: '1', name: 'John Doe' })
      navigate('/search')
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} mt={2}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default LoginPage
