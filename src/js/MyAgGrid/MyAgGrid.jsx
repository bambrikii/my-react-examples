import React, {Component}
from "react";

import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import "ag-grid-community/dist/styles/ag-theme-balham.css";


class MyAgGrid extends Component {

  constructor(props) {
    super(props);
    let callCount = 0;
    this.state = {
      defaultColDef: {
	flex: 1,
	minWidth: 100,
	filter: true,
	sortable: true,
	resizable: true,
      },
      columnDefs: [
	{
	  headerName: "Total",
	  colId: "total",
	  cellClass: 'number-cell total-col',
	  aggFunc: "sum",
	  valueFormatter: (val) => {
	    return  "[" + val.value + "]";
	  },
	  valueGetter: function (params) {
	    var q1 = params.getValue('price');
	    var q2 = params.getValue('count');
	    var result = q1 * q2;
	    console.log('Total Value Getter (' + callCount + ', ' + params.column.getId() + '): ' + [q1, q2].join(', ') + ' = ' + result);
	    callCount++;
	    return result;
	  },
	  rowGroupIndex: 0,
	  pivotIndex: 4,
	},
	{headerName: "Origin", field: "origin",
	  children: [
	    {headerName: "Country", field: "country", columnGroupShow: "open"},
	    {headerName: "Make", field: "make", columnGroupShow: "open"},
	    {headerName: "Model", field: "model", columnGroupShow: "open"},
	  ]
	},
	{headerName: "Price", field: "price", },
	{headerName: "Count", field: "count"},
      ],
      rowData: [
	{country: "us", make: "Toyota", model: "Celica", price: 35000, count: 10},
	{country: "us", make: "Toyota", model: "Celica", price: 35000, count: 11},
	{country: "us", make: "Toyota", model: "Celica", price: 35000, count: 12},
	{country: "us", make: "Ford", model: "Mondeo", price: 32000, count: 13},
	{country: "us", make: "Porsche", model: "Boxter", price: 72000, count: 14}
      ]
    }
    this.onGridReady = this.onGridReady.bind(this);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.addAggFunc('fn1', myCustomAggFunc);
    function myCustomAggFunc(values) {
      var sum = 0;
      console.log("myCustomAggFunc");
      values.forEach(function (value) {
	sum += value;
      });
      return sum;
    }
  }
  render() {
    return (
	    <div className="ag-theme-balham" style={ {'height': 'calc(100vh - 150px)', width: '100%'} }>
		<AgGridReact
		    defaultColDef={this.state.defaultColDef}
		    columnDefs={this.state.columnDefs}
		    rowData={this.state.rowData}
		    animateRows={true}
		    enableRangeSelection={true}
		    style={ {'height': '100%', overflow: 'hidden'} }
		    onGridReady={this.onGridReady}
		    >
		</AgGridReact>
	    </div>
	    );
  }
}

export default MyAgGrid;
