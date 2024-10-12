import { type ReactNode } from 'react'
import styled from '@mui/material/styles/styled'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import TopBanner from 'components/TopBanner'

type MainLayoutProps = {
  children: ReactNode
}

export const Main = styled('main')`
  flex-grow: 1;
  overflow: auto;
`

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <Box height={'100vh'} width="100%">
    <Stack height={'100%'} width="100%" overflow="hidden">
      <header>
        <TopBanner />
      </header>
      <Main>{children}</Main>
    </Stack>
  </Box>
)

export default MainLayout
