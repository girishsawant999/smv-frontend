import Login from 'components/containers/login';
import React from 'react';
import Head from 'components/common/Head';

LoginMain.propTypes = {};

function LoginMain() {
	return (
		<>
			<Head title="Login" desc="LoginPage of Stamp My Visa" />
			<Login
				show={true}
				onClose={() => {
					null;
				}}
			/>
		</>
	);
}

export default LoginMain;
