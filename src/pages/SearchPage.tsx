// generate a search page with MUI input, result will be shown in MUI data grid
import { useState } from 'react'
import { Box, TextField, Button, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (): Promise<void> => {
    // TODO: fetch search results from Open Library API
    const results = await fetch(
      `https://openlibrary.org/search.json?q=${searchTerm}`,
    )

    const data = await results.json()
    setSearchResults(data.docs)
  }

  const columns = [
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'author_name', headerName: 'Author', width: 150 },
    { field: 'cover_i', headerName: 'Cover', width: 100 },
  ]

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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <TextField
          label="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
        />
        <Button
          variant="contained"
          onClick={() => {
            void handleSearch
          }}
        >
          Search
        </Button>
        <DataGrid rows={searchResults} columns={columns} checkboxSelection />
      </Box>
    </Box>
  )
}

export default SearchPage
