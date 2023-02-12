import './dataTable.scss'
import { DataGrid } from '@mui/x-data-grid';
import {userRows} from '../../data'
import {userColumns} from '../../data'
import { Link } from 'react-router-dom';

const DataTable = ({type}) => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
              return (
                <div className={'cellAction'}>
        <Link to={`${type}`} >

                  <div className="viewButton">View</div>
                  </Link>
                  <div className="deleteButton">Delete</div>

                </div>
              );
            },
          },
    ]
  return (
    <div className='datatable'>
      <div className="newbutton">
        Add New 
        <Link to={`/${type}/new`} className="adduser">
         Add 
        </Link>
      </div>
      <DataGrid  className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        size="medium"
      />
    </div>
  )
}

export default DataTable