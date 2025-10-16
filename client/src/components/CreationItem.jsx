import React, { useState } from 'react'
import Markdown from 'react-markdown'

const CreationItem = ({item}) => {

    const [expanded, setExpanded] = useState(false)

  return (
    <div onClick={()=> setExpanded(!expanded)} className='p-4 max-w-5xl text-sm bg-theme-surface-secondary border border-theme rounded-lg cursor-pointer hover:bg-theme-hover transition-colors'>
        <div className='flex justify-between items-center gap-4'>
            <div>
                <h2 className='text-theme-primary'>{item.prompt}</h2>
                <p className='text-theme-muted'>{item.type} - {new Date(item.created_at).toLocaleDateString()}</p>
            </div>
            <button className='bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full'>{item.type}</button>
        </div>
        {
            expanded && (
                <div>
                    {item.type === 'image' ? (
                        <div>
                            <img src={item.content} alt="image" className='mt-3 w-full max-w-md rounded-lg'/>
                        </div>
                    ) : (
                        <div className='mt-3 h-full overflow-y-scroll text-sm text-theme-primary'>
                            <div className='reset-tw'>
                                <Markdown>{item.content}</Markdown>
                            </div>
                        </div>
                    )}
                </div>
            )
        }
    </div>
  )
}

export default CreationItem
