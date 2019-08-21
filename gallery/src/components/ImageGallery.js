import React from 'react';
import Image from './Image';
import NotFound from './NotFound';

const ImageGallery = props => {
	const results = props.data
	console.log(results);
	let imgs;
	if (results.length > 0){
    imgs = results.map(img => <Image url={img.urls.small} key={img.id} />);
  } else {
    imgs = <NotFound/>
  }

	return (
		<div className="photo-container">
			<h2>Your Results for: {props.title}</h2>
			<ul className="img-list">
				{imgs}
			</ul>
		</div>
	);
};

export default ImageGallery;
