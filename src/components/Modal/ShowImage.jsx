import { Box } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const ShowImage = () => {

    const linkPhoto = useSelector(state => state.modal.linkPhoto)
    let [height, setHeight] = useState('auto')
    const refImage = useRef(null)
    useEffect(() => {
        
        if(refImage.current.width < refImage.current.height) {
            //console.log(refImage.current.width, refImage.current.height)
            setHeight(window.innerHeight - 100)
        }
    },[refImage])
    return (
        <Box sx={{padding: '8px' ,textAlign: 'center', margin: '0 auto'}}>
            <img ref={refImage} src={linkPhoto} alt='foto sheveyko' style={{width: '100%',height: height, objectFit: 'contain', borderRadius: '8px'}}/>
        </Box>
    )
}

export default ShowImage