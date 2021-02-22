
$(document).ready(function () {
    //Display current time and date//
    var nowDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').html(nowDate);
    //used click listener for user input//
    $('.saveBtn').on('click', function () {
        console.log(this);

        var time = $(this).parent().attr('id');
        var content = $(this).siblings('.description').val();
        //saves input to local storage//
        localStorage.setItem(time, content);
    })


    function timeAgent() {
        var currentTime = moment().hour();
        // loops over different time blocks
        $('.time-block').each(function () {
            var setTime = parseInt($(this).attr('id').split('hour')[1]);
            console.log(setTime, currentTime);

            if (setTime < currentTime) {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            }
            else if (setTime === currentTime) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }

        })
    }
    //each hour loads save date from local storage
    $('#hour8 .description').val(localStorage.getItem('hour8'));
    $('#hour9 .description').val(localStorage.getItem('hour9'));
    $('#hour10 .description').val(localStorage.getItem('hour10'));
    $('#hour11 .description').val(localStorage.getItem('hour11'));
    $('#hour12 .description').val(localStorage.getItem('hour12'));
    $('#hour13 .description').val(localStorage.getItem('hour13'));
    $('#hour14 .description').val(localStorage.getItem('hour14'));
    $('#hour15 .description').val(localStorage.getItem('hour15'));
    $('#hour16 .description').val(localStorage.getItem('hour16'));
    $('#hour17 .description').val(localStorage.getItem('hour17'));

    timeAgent();
})