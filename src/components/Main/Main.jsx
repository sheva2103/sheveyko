import React from 'react'
import Home from '../Home/Home';
import { Box } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import Gallery from '../Galery/Gallery';
import Presentation from '../Presentation/Presentation';
import Creation from '../Creation/Creation';
import ClassActivity from '../ClassActivity/ClassActivity';

const Main = () => {
    return ( 
        <main>
            <Box mt={'58px'}>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/gallery' element={<Gallery />}/>
                    <Route path='/professional' element={<Presentation />}/>
                    <Route path='/creation' element={<Creation />}/>
                    <Route path='/classactivity' element={<ClassActivity />}/>
                </Routes>
            </Box>
        </main>

    );
}

export default Main;