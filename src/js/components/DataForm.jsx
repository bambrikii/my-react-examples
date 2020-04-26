import React, { Component } from "react";

import xml1 from '../../data/xml1.xml';

class DataForm extends Component {
  render() {
    function func1(cell, index) {
      <tr>
	  <td>
	      <div>div1</div>
	  </td>
      </tr>
    }
    console.log(xml1.nodes);
    return (
	    <div>
		Table:
		<table>
		    <tbody>
			<tr>
			    <th>Index</th>
			    <th>To</th>
			    <th>From</th>
			    <th>Heading</th>
			    <th>Body</th>
			</tr>
			{xml1.notes.note
				  .map((value, index) => {
				    return <tr key={"data-form-" + index}>
					<td>{index}</td>
					<td>{value.to}</td>
					<td>{value.from}</td>
					<td>{value.heading}</td>
					<td>{value.body}</td>
				    </tr>
				  })}
		    </tbody>
		</table>
	    </div>
	    )
  }
}

export default DataForm