import Trip from 'components/containers/trip';
import React from 'react';
import Head from 'components/common/Head';

function TripMain() {
	return (
		<>
			<Head title="My Trip" desc="Information about my trip" />
			<Trip />;
		</>
	);
}

export default TripMain;
