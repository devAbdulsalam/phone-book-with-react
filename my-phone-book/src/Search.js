import React from 'react'

const Search = () => {
    let items = getlocalStorage();
    let value = searchbar.value.toLowerCase()
    items = items.filter(function (item){
        if (item.phone.includes(value) || item.firstName.toLowerCase().includes(value) || item.lastName.toLowerCase().includes(value)){
            return item
        }
    })
    displaycontact(items)
  return (
    <div>Search</div>
  )
}

export default Search