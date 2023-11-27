import React from 'react'
import "./usertable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource2";

const UserTable = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className="cellAction">
                        <div className="dltButton"> Delete</div>
                    </div>
                );
            },
        },
    ];
    return (

        <div className="datatable">

            <div className="datatableTitle">
                All Users
            </div>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                className='datagridUserTable'
            />
        </div>
    )
}

export default UserTable
