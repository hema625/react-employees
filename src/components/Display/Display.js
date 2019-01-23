import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Nav from '../Navbar/Navbar';
import './Display.css';

class Display extends React.Component {
    state = {
        submitted: false
    }
    handleEdit = (id) =>{
        this.props.history.push('/display/'+ id + '/edit');
    }
    handleDelete = (id) =>{
        fetch('http://localhost:8080/api/employees/' + id,{
            method : 'DELETE',
            data : null
        }).then(res=>{
            this.props.fun(id);
        })
        .catch(err=>console.log("Error in Display",err));
    }
    render() {
        const columns = [
            {
                Header: () =>
                    <div style={{ fontWeight: "Bold"}}>ID</div>,
                accessor : "id",
                width : 70
            },
            {
                Header: () =>
                <div style={{ fontWeight: "Bold"}}>Name</div>,
            accessor: 'name',
            style : {
                textAlign : "center"
            }
          },
          {
            Header: () =>
                <div style={{ fontWeight: "Bold"}}>Code</div>,
            accessor: 'code',
            width : 80
          },
          {
            Header: () =>
                <div style={{ fontWeight: "Bold"}}>Profession</div>,
            accessor: 'profession',
            style : {
                textAlign : "center"
            }
          },
          {
            Header: () =>
                <div style={{ fontWeight: "Bold"}}>Color</div>,
            accessor: 'color',
             Cell: ({ value }) => '',
            style : {
                textAlign : "center",
                padding : "14px",
                margin : "10px 0px",
                border: "1px transparent black",
            },
            getProps: (state, rowInfo, column) => {
                if(rowInfo) {
                return {
                    style: {
                        background: rowInfo.row.color,
                    }
                }
            }
                    return {};
            },
            width : 100,
            maxWidth : 100,
            minWidth : 100,
            sortable : false,
            filterable : false
          },
          {
            Header: () =>
                <div style={{ fontWeight: "Bold"}}>City</div>,
            accessor: 'city',
            style : {
                textAlign : "center"
            }
          },
          {
            Header: () =>
                <div style={{ fontWeight: "Bold"}}>Branch</div>,
            accessor: 'branch',
            style : {
                textAlign : "center"
            }
          },
          {
            Header: () =>
                <div style={{ fontWeight: "Bold"}}>Assigned</div>,
            accessor : 'assigned',
            Cell: ({ value }) => String(value),
            width : 80
          },
          {
            Header: () =>
            <div style={{ fontWeight: "Bold"}}>Actions</div>,
              Cell : props => {
                  return(
                      <div>
                  <button className = "btn btn-info style" onClick = {()=>{this.handleEdit(props.original.id)}} >Edit</button> 
                  <button className = "btn btn-info style" onClick = {()=>{this.handleDelete(props.original.id)}} >Delete</button>
                      </div>
                        )
              },
              sortable : false,
              filterable : false,
          }   
        ]
        const filterCaseInsensitive = (filter, row) => {
            const id = filter.pivotId || filter.id;
            if (row[id] !== null && typeof row[id] === 'string') {
                return (
                    row[id] !== undefined ?
                        String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase()) : true
                )
            }
            else if (row[id] !== null && (typeof row[id] === 'number'||typeof row[id] === 'boolean')) {
                return (
                    row[id] !== undefined ?
                        String(row[id]).startsWith(filter.value) : true
                )
            }
            else {
                return (
                    String(row[filter.id]) === filter.value
                )
            }
        }
        return(
            <div>
                <Nav/>
                    <h2 className="heading">Employee Details</h2>
                    <div className="viewemployee">
                        <ReactTable
                            data={this.props.all}
                            columns={columns}
                            filterable
                            defaultFilterMethod={filterCaseInsensitive}
                            defaultPageSize = {8}
                            pageSizeOptions = {[8,16]}
                            noDataText = {"Please Enter the Employee Details!"}
                        />
                    </div>
            </div>
        )
    }
}

export default Display;

