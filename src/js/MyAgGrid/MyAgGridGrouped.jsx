import React, {Component}
  from "react";

import {AgGridReact} from "@ag-grid-community/react";

import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model";
import {RowGroupingModule} from "@ag-grid-enterprise/row-grouping";
import {MenuModule} from "@ag-grid-enterprise/menu";
import {ColumnsToolPanelModule} from "@ag-grid-enterprise/column-tool-panel";
import {FiltersToolPanelModule} from "@ag-grid-enterprise/filter-tool-panel";
import {SetFilterModule} from "@ag-grid-enterprise/set-filter";

import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";


class MyAgGridGrouped extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modules: [
        ClientSideRowModelModule,
        RowGroupingModule,
        MenuModule,
        ColumnsToolPanelModule,
        FiltersToolPanelModule,
        SetFilterModule,
      ],
      defaultColDef: {
        flex: 1,
        minWidth: 150,
        filter: true,
        sortable: true,
        resizable: true,
      },
      columnDefs: [
        {
          headerName: "Country", field: "country", columnGroupShow: "open",
          rowGroup: true,
          hide: true,
        },
        {
          headerName: "City", field: "city", columnGroupShow: "open",
          rowGroup: true,
          hide: true,
          enableValue: true
        },
        {
          headerName: "Title", field: "title", columnGroupShow: "open",
          hide: false,
        },
        {
          headerName: "Title First", field: "title", columnGroupShow: "open",
          hide: false,
          aggFunc: "first2", enableValue: true
        },
        {
          headerName: "Title Last", field: "title", columnGroupShow: "open",
          hide: false,
          aggFunc: "last2", enableValue: true
        },
        {
          headerName: "Population", field: "population", columnGroupShow: "open",
          hide: false,
          aggFunc: "sum", enableValue: true
        },
        {
          headerName: "Rank", field: "rank", columnGroupShow: "open",
          hide: false,
          aggFunc: "count2", enableValue: true
        },
      ],
      aggFuncs: {
        count2: function (values) {
          let n = 0;
          values.forEach(function (value) {
            n += 1;
          });
          return n;
        },
        first2: function (values) {
          for (let i in values) {
            return values[i];
          }
          return "???";
        },
        last2: function (values) {
          let last = "???";
          values.forEach(function (value) {
            last = value
          });
          return last;
        }
      },
      rowData: [
        {country: "USA", city: "New York", title: "Financial Center", population: 10, rank: 3},
        {country: "USA", city: "Los Angeles", title: "City of Angels", population: 11, rank: 4},
        {country: "USA", city: "Washington", title: "Political Center", population: 12, rank: 5},
        {country: "France", city: "Paris", title: "Country Capital", population: 15, rank: 6},
        {country: "France", city: "Leon", title: "Leon", population: 16, rank: 7},
        {country: "Germany", city: "Munich", title: "Financial Center", population: 17, rank: 8}
      ],
      // autoGroupColumnDef: {
      //   headerName: "Athlete",
      //   field: "athlete",
      //   minWidth: 250,
      //   cellRenderer: "agGroupCellRenderer",
      //   cellRendererParams: {footerValueGetter: '"Total (" + x + ")"'},
      // }
    }

    this.onGridReady = this.onGridReady.bind(this);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  render() {
    return (
      <div className="ag-theme-balham" style={{"height": "calc(100vh - 150px)", width: "100%"}}>
        <AgGridReact
          modules={this.state.modules}
          defaultColDef={this.state.defaultColDef}
          columnDefs={this.state.columnDefs}
          autoGroupColumnDef={this.state.autoGroupColumnDef}
          aggFuncs={this.state.aggFuncs}
          rowData={this.state.rowData}
          animateRows={true}
          enableRangeSelection={true}
          style={{"height": "100%", overflow: "hidden"}}
          onGridReady={this.onGridReady}
        >
        </AgGridReact>
      </div>
    );
  }
}

export default MyAgGridGrouped;
