$(document).ready(function(){
  var weapons= [
    {   "name": "44_pistol",
        "damage": 48,
        "fire_rate": 6,
        "range": 119,
        "accuracy": 66,
        "weight": 4.2,
        "value": 99
    },
    {   "name": "10mm_pistol",
        "damage": 18,
        "fire_rate": 46,
        "range": 119,
        "accuracy": 61,
        "weight": 4.2,
        "value": 53
    },
    {   "name": "assault_rifle",
        "damage": 30,
        "fire_rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144
    }
  ];
  
  var junk = [
    {
        "name":"baseball",
        "weight":0.5,
        "value":4
    },
    {
        "name":"desk_fan",
        "weight":3,
        "value":4
    },
    {
        "name":"ladle",
        "weight":0.5,
        "value":2
    }
    ];

    var ammo = [
    {
        "name":"5.56",
        "weight":0,
        "value":2
    },
    {
        "name":"5mm",
        "weight":0,
        "value":1
    },
    {
        "name":"shotgun",
        "weight":0,
        "value":3
    }
  ];

  $('.item-list a').on('click',function(e){
    $('.item-list a').removeClass('active');
    $(e.currentTarget).addClass('active');
  });

  $('.item-list a').on('mouseenter', function(e){
    var current_item=$(e.currentTarget).attr('class');
    console.log(current_item);

    for(item in weapons){
      if(weapons[item].name == current_item){
        console.log(weapons[item]);

        var container=$('.item-stats');
        container.find('.damage').html(weapons[item].damage);
        container.find('.fire_rate').html(weapons[item].fire_rate);
        container.find('.accuracy').html(weapons[item].accuracy);
        container.find('.range').html(weapons[item].range);
        container.find('.weight').html(weapons[item].weight);
        container.find('.value').html(weapons[item].value);
      }
    }
  });
  $('.item-list a').on('mouseenter', function(e){
    var current_item=$(e.currentTarget).attr('class');
    console.log(current_item);

    for(item in junk){
      if(junk[item].name == current_item){
        console.log(junk[item]);

        var container=$('.item-stats');
        container.find('.weight').html(junk[item].weight);
        container.find('.value').html(junk[item].value);
      }
    }
  });

  $('.item-list a').on('mouseenter', function(e){
    var current_item=$(e.currentTarget).attr('class');
    console.log(current_item);

    for(item in ammo){
      if(ammo[item].name == current_item){
        console.log(ammo[item]);

        var container=$('.item-stats');
        container.find('.weight').html(ammo[item].weight);
        container.find('.value').html(ammo[item].value);
      }
    }
  });
});
