import React from 'react';
import RemoveBuilding from './RemoveBuilding';

function searchMatch(searchString, filterString) {
	return searchString.toLowerCase().includes(filterString.toLowerCase())
}

function BuilingList(props) {

	const { data, filterText, selectedUpdate, removeBuilding } = props;

	const buildingList = data.filter(x => (searchMatch(x.name, filterText) || searchMatch(x.code, filterText)))
		.map(directory => {
			return (
				<tr key={directory.id} onClick={() => selectedUpdate(directory.id)}>
					<td>{directory.code}</td>
					<td>{directory.name}</td>
					<td><RemoveBuilding removeBuilding={() => removeBuilding(directory.id)}/></td>
				</tr>
			);
		});


	return (
		<>{buildingList}</>
	)
}

export default BuilingList;
