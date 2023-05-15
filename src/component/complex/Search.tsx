import React from 'react'
import Button from '../simple/Button'

type SearchProps = {
    btntitle:string
    text:string
    generic:() => void
    onChangeGeneric:(data:string) => void



}

const Search = ({btntitle, text, generic, onChangeGeneric}: SearchProps) => {
  return (
        <div className='relative'>

        <Button 
        title={btntitle} 
        generic={generic} 
        styles='absolute px-4 bg-blue-500 right-0'/>

        <input   placeholder={text} className='' type='text'
        onChange={(evt) => onChangeGeneric(evt.target.value)}/>
        </div>
  )
}

export default Search