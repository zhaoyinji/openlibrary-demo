import { useContext } from 'react'
import styled from '@mui/material/styles/styled'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import LogoutIcon from '@mui/icons-material/Logout'

import AuthContext from 'context/AuthContext'

export const TopBannerWrapper = styled(Stack)`
  box-shadow: 0px 1px 5px 0px #1126920d;
  background: ${({ theme }) => theme.palette.background.paper};
  height: 56px;
  justify-content: center;
`

const LogoWrapper = styled(Box)`
  position: relative;
  display: flex;
  overflow: hidden;
  max-height: 50px;

  & img {
    max-width: 100%;
    max-height: 50px;
    display: block;
    cursor: pointer;
  }

  font-size: 24px;
  font-weight: 500;
  align-items: center;
  gap: 10px;
`

const TopBanner: React.FC = () => {
  const { authData, clearAuthData } = useContext(AuthContext)

  const handleLogout = (): void => {
    clearAuthData()
  }

  return (
    <TopBannerWrapper sx={{ flexGrow: 1 }}>
      <Grid container paddingX={2}>
        <Grid item flexGrow={1} alignSelf={'center'}>
          <Stack>
            <LogoWrapper>Book Search</LogoWrapper>
          </Stack>
        </Grid>
        <Grid item textAlign={'right'} alignItems="center" display="flex">
          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            {authData && (
              <IconButton
                data-testid="logout-button"
                onClick={handleLogout}
                color="inherit"
                aria-label="Logout"
              >
                <LogoutIcon />
              </IconButton>
            )}
          </Stack>
        </Grid>
      </Grid>
    </TopBannerWrapper>
  )
}

export default TopBanner
