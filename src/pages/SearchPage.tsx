import { useCallback, useEffect, useState } from 'react'
import { debounce } from 'lodash'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const SearchPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [rows, setRows] = useState([])
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
  })
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(false)

  const handleSearch = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      const results = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${
          paginationModel.page * paginationModel.pageSize
        }&maxResults=${paginationModel.pageSize}&key=${
          process.env.REACT_APP_GOOGLE_API_KEY
        }`,
      )

      const data = await results.json()
      setRows(
        data.items.map((item: any) => ({
          ...item.volumeInfo,
          id: item.id,
          author: item.volumeInfo.authors?.join(', '),
        })),
      )
      setTotalCount(data.totalItems)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }, [paginationModel, search])

  useEffect(() => {
    if (paginationModel.page || search) {
      void handleSearch()
    }
  }, [paginationModel, search])

  const columns = [
    { field: 'title', headerName: 'Title', flex: 1 },
    { field: 'author', headerName: 'Author', width: 300 },
    { field: 'publishedDate', headerName: 'Published at', width: 120 },
  ]

  const handleInputChange = useCallback(
    debounce((value) => {
      setSearch(value)
      setPaginationModel({
        page: 0,
        pageSize: 10,
      })
    }, 1000),
    [],
  )

  console.log(rows)

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
        Search Books
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 720,
          width: '80%',
        }}
        spacing={2}
      >
        <TextField
          label="Search"
          onChange={(e) => {
            handleInputChange(e.target.value)
          }}
          sx={{
            width: '100%',
          }}
        />
        <DataGrid
          rows={rows}
          loading={loading}
          columns={columns}
          rowCount={totalCount}
          pageSizeOptions={[5]}
          paginationModel={paginationModel}
          paginationMode="server"
          onPaginationModelChange={setPaginationModel}
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
      </Stack>
    </Box>
  )
}

export default SearchPage
