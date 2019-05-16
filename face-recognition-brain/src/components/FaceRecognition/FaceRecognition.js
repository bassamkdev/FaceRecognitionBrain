import React from 'react';
import './FaceRecognition.css'


const FaceRecognition = ({imageUrl, box}) => {
	return (
		<div className='center ma'>
			<div className='absolute mt2 br5 br-black'>
				<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
				<div className='bounding-box' style={{top: box.toprow, bottom: box.bottomrow, right: box.rightcol, left: box.leftcol }}></div>
			</div>		
		</div>
	)
}

export default FaceRecognition;