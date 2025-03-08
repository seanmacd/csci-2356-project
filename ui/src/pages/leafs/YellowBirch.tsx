import fox_tree_logo from '../../assets/fox_tree_logo.png'
import './styles.css'
import {Button} from '../../components/Button'

export function YellowBirchLeafPage() {
  return (<div>
  <title>Yellow Birch Game</title>

  <header className="row-auto bg-amber-950"></header>

  <main>
    <div className="box-border size 32 border-2 py-6 px-8 bg-amber-200 text-center text-black text-3xl">Yellow Birch</div>
    <div className="flex justify-center"><img className="fox-tree-logo" src={fox_tree_logo} alt="Temporary Birch Tree Picture" /></div>
    <div className="flex justify-center"><Button/></div>
  </main>

  </div>)
} 