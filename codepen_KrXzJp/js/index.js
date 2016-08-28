$(document).ready(function(){
  var following = [];
  
    var url = "https://api.twitch.tv/kraken/streams/freecodecamp";
  $.getJSON(url,function(data1){
  if(data1.stream === null){
    $("#fccStatus").html("Free Code Camp Is Currently OFFLINE")
  }
    else {
      $("#fccStatus").html("Free Code Camp Is Currently ONLINE")
    }
  });
  var followerURL ="https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/";
  $.getJSON(followerURL, function(data2){
    for (var i = 0; i < data2.follows.length;i++){
      var displayName = data2.follows[i].channel.display_name;
      following.push(displayName);
    }
    following.push("pinballjoe");
    following.push("Trumpsc");
    following.push("DimMak");
    following.push("comster404");
    for(var i = 0;i<following.length;i++){
      var url2 = "https://api.twitch.tv/kraken/streams/" +following[i]+ "/?callback=?";
      
      $.getJSON(url2).done(function(data3){
        var logo;
        var status;
        var name;
        if(data3.error){
          logo = "http://www.iconarchive.com/download/i66407/saviourmachine/chat/blocked-offline.ico"
          name = data3.message
          status = data3.error
          
        
        $("#followerInfo").prepend('<div class= "row">' + '<div class="col-md-4">'+'<img src="'+logo+ '">'+'</div>'+'<div class="col-md-4">'+ name+'</div>'+'<div class="col-md-4">'+status+'</div> </div>');
                                  
        
        }
          if(data3.stream ===null){
            $.getJSON(data3._links.channel,function(data5){
              status = "OFFLINE";
              logo = data5.logo;
              name = data3.display_name;
               $("#followerInfo").prepend('<div class= "row">' + '<div class="col-md-4">'+'<img src="'+logo+ '">'+'</div>'+'<div class="col-md-4">'+ name+'</div>'+'<div class="col-md-4">'+status+'</div> </div>');       
                      
          
          });
            
    }
      });
    }
    for(var i = 0; i <following.length;i++){
    var onlineURL = "https://api.twitch.tv/kraken/streams/" +following[i];
      $.getJSON(onlineURL,function(data4){
      
          var logo = data4.stream.channel.logo;
          if (logo === null){
            logo = "http://www.morrell-middleton.co.uk/wp-content/uploads/logo-placeholder.jpg"
          }
          var status = data4.stream.channel.status;
        
          var name = data4.stream.channel.display_name;
         
        $("#followerInfo").prepend('<div class= "row">' + '<div class="col-md-4">'+'<img src="'+logo+ '">'+'</div>'+'<div class="col-md-4">'+ name+'</div>'+'<div class="col-md-4">'+status+'</div> </div>');
        console.log(name);
        
      });
    }
  });
  
});