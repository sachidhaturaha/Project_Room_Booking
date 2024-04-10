import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Room from '../components/Room';
import moment from 'moment';

import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

function Homescreen() {

    const [rooms, setrooms] = useState([])
    const [loading, setloading] = useState()
    const [error, seterror] = useState()
    const [fromdate, setfromdate] = useState()
    const [todate, settodate] = useState()
    const [duplicaterooms, setduplicaterooms] = useState([])

    useEffect(() => {
        // Define an async function inside the useEffect
        const fetchData = async () => {
            try {

                setloading(true)
                const response = await axios.get('http://localhost:5000/api/rooms/getallrooms');

                setrooms(response.data)
                setduplicaterooms(response.data)

                setloading(false)

            } catch (error) {
                seterror(true)
                console.log(error);
                setloading(false)
            }
        };

        // Call the async function
        fetchData();
    }, []); // Dependency array is empty, meaning this effect runs once after the initial render


    function filterByDate(dates) {
        // Check if dates is null or undefined
        if (!dates || dates.length === 0) {
            // Handle the case when no dates are selected (e.g., reset to showing all rooms)
            setfromdate(undefined);
            settodate(undefined);
            setrooms(duplicaterooms); // Assuming duplicaterooms holds the original full list of rooms
            return; // Exit the function early
        }
    
        setfromdate(dates[0].format('DD-MM-YYYY'));
        settodate(dates[1].format('DD-MM-YYYY'));
    
        var temprooms = [];
        var availability = false;
        for (const room of duplicaterooms) {
            if (room.currentbookings.length > 0) {
                availability = room.currentbookings.every(booking => {
                    const bookingFromDate = moment(booking.fromdate, 'DD-MM-YYYY');
                    const bookingToDate = moment(booking.todate, 'DD-MM-YYYY');
                    const selectedFromDate = moment(dates[0].format('DD-MM-YYYY'), 'DD-MM-YYYY');
                    const selectedToDate = moment(dates[1].format('DD-MM-YYYY'), 'DD-MM-YYYY');
    
                    return !(selectedFromDate.isBetween(bookingFromDate, bookingToDate, undefined, '[]') ||
                             selectedToDate.isBetween(bookingFromDate, bookingToDate, undefined, '[]') ||
                             bookingFromDate.isSame(selectedFromDate) || bookingFromDate.isSame(selectedToDate) ||
                             bookingToDate.isSame(selectedFromDate) || bookingToDate.isSame(selectedToDate));
                });
            }
    
            if (availability || room.currentbookings.length === 0) {
                temprooms.push(room);
            }
            availability = false; // Reset availability for the next room
        }
    
        setrooms(temprooms); // Update the rooms displayed based on availability
    }
    
    return (
        <div className='container'>

            <div className='row mt-5'>
                <div className='col-md-3'>
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                </div>

            </div>
            <div className="row justify-content-center mt-5">
                {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error</h1>) : (rooms.map(room => {
                    return <div className="col-md-9 mt-2">
                        <Room room={room} fromdate={fromdate} todate={todate} />
                    </div>
                }))}

            </div>
        </div>
    );
}

export default Homescreen;
