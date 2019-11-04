import React from 'react';

/*
Captured building ID to look-up the additional information for the building
Return additional details of the building to be rendered on the screen for the user
*/

function ViewBuilding(props) {
	const { building } = props;

	if (building === undefined) {
		return (
			<div>
				<p>
					<i>Click on a name to view more information</i>
				</p>
			</div>
		);
	}
	else {
		return (
			<div>
				<p>
					Code: {building.code}
				</p>
				<p>
					Name: {building.name}
				</p>
				{building.coordinates !== undefined &&
					<p>
						Latitude: {building.coordinates.latitude} Longitude: {building.coordinates.longitude}
					</p>
				}
				{building.address !== undefined &&
					<p>
						Address: {building.address}
					</p>
				}
			</div>
		);
	}
}
export default ViewBuilding;
