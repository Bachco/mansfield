import React from 'react'
import parse from 'html-react-parser'

interface ContentProps {
    content: string;
    contentClasses?: string;
}

const Content:React.FC<ContentProps> = ({content, contentClasses}) => {
  return (
    <div className={`text-[#959ba9] ${contentClasses}`}>
        {content && parse(content)}
    </div>
  )
}

export default Content