$(document).ready(function(){



    $("#CTA").click(function(event){
        event.preventDefault();
        var email = 'john@acelpower.com';
        var subject = 'Investment Inquires';
        var emailBody = 'Hi, I am interested in investing ACEL Power Inc.';
        // window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
        window.location = "https://forms.office.com/r/JwQyuBKnkj";     
    });


});