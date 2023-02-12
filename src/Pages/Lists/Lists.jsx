import { Link } from 'react-router-dom'
import DataTable from '../../Components/DataTable/DataTable'
import Nav from '../../Components/Navigation/Nav'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './lists.scss'

const Lists = ({type}) => {
  return (
    <div className='List'>
      
      <Sidebar/>
      <div className="listContiner">
        <Nav/>
        
        <DataTable type ={type}/>
      </div>
    </div>
  )
}

export default Lists