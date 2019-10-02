function getCurrentDateTime() {
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth()+1)  + "/"
        + currentdate.getFullYear() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes();
    // + currentdate.getSeconds();
    return datetime;
}

function send(){
	var chat = document.getElementById('chat').value;
	var contentchat = document.getElementById("contentchat");
    var result = '<div class="wrap-content row" >';
    result += '<div class="col-md-8 col-12">';
    result += '<span class="chat-icon">U</span>';
    result += '<div class="content-c">';
    result += '<p class="chat-username">php39</p>';
    result += '<p class="chat-text">' + chat + '</p>';
    result += '</div>';
    result += '</div>';
    result += '<div class="col-md-4 col-12">';
    result += '<div class="datetime-wrap">';
    result += '<i class="fas fa-certificate"></i> <span class="chat-datetime">' + getCurrentDateTime() + '</span>';
    result += '</div>';
    result += '</div>';
    result += '</div>';
    contentchat.innerHTML += result;
    return false;
}
