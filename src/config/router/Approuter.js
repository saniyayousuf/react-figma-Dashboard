
import React from 'react';
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';
import Notification from "../../pages/Dashboardscreens/Notification"
import Email from "../../pages/Dashboardscreens/Email"
import Inbox from "../../pages/Dashboardscreens/Inbox"
import Message from "../../pages/Dashboardscreens/Message"
import Trash from "../../pages/Dashboardscreens/Trash"
import FigmaDashboard from '../../pages/FigmaDashboard'


function Approuter() {
    return (

        <BrowserRouter>
            <Routes>

                <Route path="FigmaDashboard/*" element={<FigmaDashboard />} />
                <Route path="Notification" element={<Notification />} />
                <Route path="Email" element={<Email />} />
                <Route path="Inbox" element={<Inbox />} />
                <Route path="Message" element={<Message />} />
                <Route path="Trash" element={<Trash />} />
            </Routes>
        </ BrowserRouter>
    );
}

export default Approuter;
