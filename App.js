$(document).ready(function() {
    $('#search_trains').click(function() {
        let boarding = $('#boarding').val();
        let destination = $('#destination').val();
        $.ajax({
            url: "https://indianrailapi.com/api/v2/TrainBetweenStation/apikey/put_api_key/From/" + boarding + "/To/" + destination,
            success: function(data) {
                console.log(data.Trains);
                let blob;
                for (let i = 0; i < data.Trains.length; i++) {
                    blob = blob + '<tr><td>${data.Trains[i].TrainNo}</td><td>${data.Trains[i].TrainName}</td><td>${data.Trains[i].TravelTime}</td><td>${data.Trains[i].TrainType}</td></tr>';
                    // console.log(data.Trains[i].TrainName);
                }

                $('#display_trains').html(`<
                                        table class = "table" >
                                        
                                        <tr >
                                        <th> Train Number < /th> 
                                        <th> Train Name < /th> 
                                        <th> Train Duration < /th> 
                                        <th > Train Type < /th> 
                                        </tr>
                                        $ { blob }
                                        </table>
                                        `);
            },
            error: function(error) {
                console.log(error);
                alert("Some Error occured");

            }
        })
    });
    $('#fetch_station').click(function() {
        let trainNo = $('#train_no').val();
        $.ajax({
            url: "http://indianrailapi.com/api/v2/TrainSchedule/apikey/<apikey>/TrainNumber/<TrainNumber>/",
            success: function(data) {
                console.log(data.Route);

                let textblob;
                for (let i = 0; i < data.Route.length; i++) {
                    textblob = textblob + '<tr><td>${data.Route[i].StationName}</td><td>${data.Route[i].ArrivalTime}</td><td>${data.Route[i].DepartureTime}</td><td>${data.Route[i].Distance}kms</td></tr>';
                    // console.log(data.Trains[i].TrainName);
                }

                $('#display_station').html(`<
                                        table class = "table" >
                                        <tr >
                                        <th> Station Name < /th> 
                                        <th> Arrival Time < /th> 
                                        <th> Departure Time < /th> 
                                        <th >Distance Travelled < /th> 
                                        </tr>
                                        $ { textblob }
                                        </table>
                                        `);
            },
            error: function(error) {
                console.log(error);
                alert("Some error occured");
            }
        })
    });
    $('#check_status').click(function() {
        let pnrNo = $('#pnr_no').val();
        $.ajax({
            url: "http://indianrailapi.com/api/v2/PNRCheck/apikey/<apikey>/PNRNumber/<pnrNumber>/",
            success: function(data) {
                console.log(data.Pnr);

                let pnrblob;
                for (let i = 0; i < data.Pnr.length; i++) {
                    pnrblob = pnrblob + '<tr><td>${data.Pnr[i].StationName}</td><td>${data.Pnr[i].ArrivalTime}</td><td>${data.Pnr[i].DepartureTime}</td><td>${data.Pnr[i].Distance}kms</td></tr>';
                    // console.log(data.Trains[i].TrainName);
                }
                //table modification baki hai
                $('#display_status').html(`<
                                        table class = "table" >
                                        <tr >

                                        <th >Name </th> 
                                        <th> Age/Gender </th> 
                                        <th> Departure Time </th> 
                                        <th> Arrival Time </th> 
                                        </tr>
                                        $ { pnrblob }
                                        </table>
                                        `);
            },
            error: function(error) {
                console.log(error);
                alert("Some error occured");
            }
        })
    });
    $('#track_status').click(function() {
        let trainStatus = $('#live_status').val();
        $.ajax({
            url: "http://indianrailapi.com/api/v2/livetrainstatus/apikey/<apikey>/trainnumber/<train_number>/date/<yyyymmdd>/",
            success: function(data) {
                console.log(data.Track);

                let trackblob;
                for (let i = 0; i < data.track.length; i++) {
                    trackblob = trackblob + '<tr><td>${data.Track[i].StationName}</td><td>${data.Track[i].ArrivalTime}</td><td>${data.Track[i].DepartureTime}</td><td>${data.Track[i].Distance}kms</td></tr>';

                }
                //table modification baki hai
                $('#display_live_status').html(`<
                                        table class = "table" >
                                        <tr >

                                        <th >Name </th> 
                                        <th> Age/Gender </th> 
                                        <th> Departure Time </th> 
                                        <th> Arrival Time </th> 
                                        </tr>
                                        $ { pnrblob }
                                        </table>
                                        `);
            },
            error: function(error) {
                console.log(error);
                alert("Some error occured");
            }
        })
    })
});