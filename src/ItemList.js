import React from 'react'
import LinteItem from './LinteItem';

const ItemList = ({  items, handleCheck, handleDelete }) => {
  return (
    <ul>
        {items.map((item) => (
            <LinteItem
                key={item.id}
                item={item}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ))}
    </ul>
  )
}

export default ItemList
