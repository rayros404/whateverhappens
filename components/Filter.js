import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material"
import { useState } from "react"

const Filter = () => {
  const [filter, setFilter] = useState('')
  const handleChange = (event) => {
    setFilter(event.target.value)
  }
  console.log(filter)

  return (
    <Box sx={{minWidth:250}}>
      <FormControl fullWidth>
        <InputLabel id="filter-label">Sort By</InputLabel>
        <Select
          labelId="filter-label"
          id="sort-by"
          value={filter}
          label="Sort-By"
          onChange={handleChange}
        >
          <MenuItem value="Featured">Featured</MenuItem>
          <MenuItem value="Sale">Sale</MenuItem>
          <MenuItem value="A-Z">Alphabetically: A-Z</MenuItem>
          <MenuItem value="Z-A">Alphabetically: Z-A</MenuItem>
          <MenuItem value="low-high">Price: Low to High</MenuItem>
          <MenuItem value="high-low">Price: High to Low</MenuItem>
          <MenuItem value="old-new">Date: Old to New</MenuItem>
          <MenuItem value="new-old">Date: New to Old</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}

export default Filter