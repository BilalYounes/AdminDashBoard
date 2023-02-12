import EditUser from '../../Components/EditUser/EditUser'
import Nav from '../../Components/Navigation/Nav'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './new.scss'

const New = ({inputs,title}) => {
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContiner">
        <Nav />
        <EditUser inputs={inputs} title={title}/>
        </div>
    </div>
  )
}

export default New