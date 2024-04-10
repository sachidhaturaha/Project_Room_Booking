import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import moment from 'moment';
function Bookingscreen() {
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState(false);
    const [room, setroom] = useState(null);
    const [totaldays, settotaldays] = useState(0);

    const { roomid, fromdate, todate } = useParams();
    
    useEffect(() => {
        const fetchRoomDetails = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/rooms/getroombyid', {
                    roomid: roomid // Use `roomid` obtained from `useParams`
                });

                setroom(response.data);
                const fromDateMoment = moment(fromdate, "DD-MM-YYYY");
                const toDateMoment = moment(todate, "DD-MM-YYYY");
                settotaldays(toDateMoment.diff(fromDateMoment, 'days'));
            } catch (error) {
                console.error(error);
                seterror(true);
            } finally {
                setloading(false);
            }
        };

        // Call the async function
        fetchRoomDetails();
    }, [roomid, fromdate, todate]); 

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>Error fetching room details..</h1>;
    }
    async function bookRoom() {
        const actualTotalDays = totaldays + 1;
        const totalamount = actualTotalDays * room.rentperday;
        const bookingDetails = {
            room,
            userid: JSON.parse(localStorage.getItem('currentUser'))._id,
            fromdate,
            todate,
            totalamount,
            totaldays: actualTotalDays

        };

        try {
            const result = await axios.post('http://localhost:5000/api/bookings/bookroom', bookingDetails)
            alert('Your room is booked!')
        } catch (error) {
        }
    }
    
    return (
        <div>
            {loading ? (<h1>Loading...</h1>) : error ? (<h1>Error...</h1>) : (<div>

                <div className="row justify-content-center mt-5">
                    <div className="col-md-5 ">

                        <h3>{room.name}</h3>
                        <img src={room.imageurls[0]} className='bigimg' />
                    </div>
                    <div className="col-md-5" >
                        <div style={{ textAlign: 'right' }}>
                            <h5>
                                Booking Details
                            </h5>
                            <hr />
                            <b>
                                <p>Name : {JSON.parse(localStorage.getItem('currentUser')).name}</p>
                                <p>From Date : {fromdate} </p>
                                <p>To Date : {todate}</p>
                                <p>Max count : {room.maxcount} </p>
                            </b>

                        </div>
                        <div style={{ textAlign: 'right' }}>
    <b>
        <h5>Amount</h5>
        <hr />
        <p>Total days : {totaldays + 1} </p>
        <p>Rent per Day : {room.rentperday} </p>
        <p>Total amount : {(totaldays + 1) * room.rentperday}</p>
    </b>
</div>
                        <div style={{ float: 'right' }}>
                            <button className='btn btn-primary' onClick={bookRoom}>Confirm by paying Now</button>
                        </div>
                    </div>


                </div>

            </div>)};
        </div>
    )
}

export default Bookingscreen;
