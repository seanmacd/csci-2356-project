import {Circle} from '@phosphor-icons/react'

type DifficultyProps = {
  difficulty : number
}

export function Difficulty({difficulty} : DifficultyProps){
  if (difficulty === 1){
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Circle size={16} weight='fill' color='green'/>
        <span>Easy</span>
      </div>
    )
  } else if (difficulty === 2){
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Circle size={16} weight='fill' color='yellow'/>
        <Circle size={16} weight='fill' color='yellow'/>
        <span>Medium</span>
      </div>
    )
  } else if (difficulty === 3){
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Circle size={16} weight='fill' color='red'/>
        <Circle size={16} weight='fill' color='red'/>
        <Circle size={16} weight='fill' color='red'/>
        <span>Hard</span>
      </div>
    )
  }
}