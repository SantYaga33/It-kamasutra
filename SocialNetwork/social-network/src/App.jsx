import React from 'react';
import './App.css';

import TimeLine from "./Components/TimeLine/TimeLine";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { faCoffee ,faSearch,faHome ,faCommentAlt,
    faClipboard,faMouse, faFile,faUser,faImages,
    faVideo,faSms,faBell, faStreetView,faChartLine,
    faPowerOff,faGlobeAsia } from '@fortawesome/free-solid-svg-icons'



library.add(fab, faCoffee ,faSearch,faHome ,faCommentAlt,
    faGlobeAsia,  faClipboard,faMouse, faFile,faUser,faImages,
    faVideo,faSms,faBell, faStreetView,faChartLine,faPowerOff );


const  App = () => {
    return (
        <TimeLine/>
    );
};

export default App;
