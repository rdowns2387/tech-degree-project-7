import React from 'react';

const Image = props =>(
	<li>
		<img
			src={props.url}
			alt=''
			key={props.id}
		/>
		</li>
);

export default Image;
