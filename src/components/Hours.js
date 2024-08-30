import React from "react";

    const Hours = () => {
        // add logic

        const shelterHours = [
            { day: "Monday", open: "10:00", close: "16:00" },
            { day: "Tuesday", open: "10:00", close: "16:00" },
            { day: "Wednesday", open: "10:00", close: "16:00" },
            { day: "Thursday", open: "10:00", close: "16:00" },
            { day: "Friday", open: "10:00", close: "16:00" },
            { day: "Saturday", open: "9:00", close: "20:00" },
            { day: "Sunday", open: "9:00", close: "20:00" },
    
        ]

        // get the long day name and store it in a variable called today
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

        // get today's hours
        const todayHours = shelterHours.find((day) => day.day === today);

        // display today and the hours in an div with an id of hours
        return (
            <div id="hours">
                <h2>Today's Hours</h2>
                <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
                <p>{shelterHours[0].day} {shelterHours[0].open} - {shelterHours[0].close}</p>
                <p>{shelterHours[1].day} {shelterHours[1].open} - {shelterHours[1].close}</p>
                <p>{shelterHours[2].day} {shelterHours[2].open} - {shelterHours[2].close}</p>
                <p>{shelterHours[3].day} {shelterHours[3].open} - {shelterHours[3].close}</p>
                <p>{shelterHours[4].day} {shelterHours[4].open} - {shelterHours[4].close}</p>
                <p>{shelterHours[5].day} {shelterHours[5].open} - {shelterHours[5].close}</p>
                <p>{shelterHours[6].day} {shelterHours[6].open} - {shelterHours[6].close}</p>
            </div>
        )
    }

export default Hours;