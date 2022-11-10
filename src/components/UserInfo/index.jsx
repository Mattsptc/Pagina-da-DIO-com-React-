import React from 'react'
import { COntainer, NameText, Progress, UserPicture} from './style'

const UserInfo = (nome, image, percentual) => {
  return (
    <COntainer>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <Progress percentual={percentual}/>
        </div>
    </COntainer>
    
  )
}

export { UserInfo }