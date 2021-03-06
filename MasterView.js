Titanium.UI.setBackgroundColor('black');

var win1 = Titanium.UI.createWindow({  //Windows
    text: 'Landing Page',
    backgroundColor:'black'
});
var fb = require('facebook');
fb.appid = 349114845295684;
fb.permissions = ['publish_stream'];
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});
    
// Add the button.  Note that it doesn't need a click event listener.
win1.add(fb.createLoginButton({
    top : '60%',
    style : fb.BUTTON_STYLE_WIDE
}));
win1.open();

var scheduleWindow = Ti.UI.createWindow({
	text:'Child Page',
	backgroundColor:'#fff'
});

var titleLabel = Ti.UI.createLabel({
	text:'Stephen Populus',    						
	left: '45%',
	height: Ti.UI.FILL,
	font:{
			fontSize:'75sp',
			fontWeight:'bold',
			fontColor:'#FF0000'
	}									
});
var titleView = Ti.UI.createView({		//Titles
	height: '20%',
	width: '100%',
	top:'0%',
	backgroundImage: 'homepagetitlepic.png'
});
var scheduleTitleView = Ti.UI.createView({
	top: 0,
	backgroundColor: 'black',
	height:'20%',
	width: '100%',
});
var scheduleTitleLabel = Ti.UI.createLabel({
	text:'Personal Bio',
	textAlign: 'center',
	color: '#d2b45b',
	height:Ti.UI.FILL,
	font:{
		fontSize:'75sp',
		fontWeight:'bold',
	}
});

var ContactList = Ti.UI.createView({				//HOME SCREEN
	height:'13%',
	width:'45%',
	left:'35%',
	top: '40%',				
});
var contactInfo = Ti.UI.createLabel({
	text: 'Stephen Populus \nB.S. Business Management & Human Resources \nPhone: (208) 660-8135 \npopu2236@vandals.uidaho.edu',   // contact info
	textAlign:'center',
	height:Ti.UI.FILL,
	right: '40%',
	font:{
		fontSize:'20sp'
	}
});

var HomeScrnPic = Ti.UI.createView({
	height:'25%',
	width:'60%',
	left:'20%',
	bottom: 0,
	borderRadius: 20,
	backgroundImage:'/images/vandals-1.jpg'			
});
var returnView = Ti.UI.createView({		//ButtonViews
	bottom: '0',
	left: 0,
	height:'10%',
	width:'100%',
	backgroundColor:'black'
});
var scheduleView = Ti.UI.createView({		
	height: '20%',
	width: '20%',
	left: 0,
	top: '20%'
});

var blablaView = Ti.UI.createView({
	top: '22%',
	left: '20%',
	height: '15%',
	width: '80%',
});	

var secondpageprofileview = Ti.UI.createView({
	height:'25%',
	width:'60%',
	left:'20%',
	bottom: '25%',
	borderRadius: 20,
	backgroundImage:'/images/124f3ea.jpg'			
});		

var PersonalBio = Ti.UI.createLabel({
	text: 'My name is Stephen and I am studying at the University of Idaho. I am majoring in\nBusiness Management &  HR \nPhone: (208) 660-8135\n popu2236@vandals.uidaho.edu \n I am currently looking for a Full Time job, \n I would like to gain Management experience' ,   // bio here
	textAlign:'center',
	height:Ti.UI.FILL,
	font:{
		fontSize:'20sp'
	
	}
});


var blablaLabel = Ti.UI.createLabel({		
	textAlign: 'center',
	top: '5%',
	text: 'I am currently a senior in college \n but I am also the GM of JAMMS Frozen Yogurt',  
	font:{
		fontSize:'25sp',
		fontWeight:'bold',
	}	
});

var scheduleButton = Ti.UI.createButton({			//Buttons
	title: 'Bio',
		color:'#d2b45b',
		height:Ti.UI.FILL,
		width:'100%',
		height: '100%',
		borderColor: '#d2b45b',							
		textAlign:'Center',
		font:{
			fontSize:'35sp',
			fontWeight:'bold'
		},
		backgroundColor:'black'
});

var returnButton = Ti.UI.createButton({
	title:'Return',
	color:'white',
	borderRadius: 10,
	height:Ti.UI.FILL,
	width:'15%',
	height:'100%',
	left: 0,
	bordercolor:'black',
	backgroundColor: '#d2b45b',
	textAlign:'center',
	font:{
		fontSize:'35sp',
		fontWeight:'bold',
	},
	backgroundcolor:'#333333'
});



scheduleButton.addEventListener('click', function(e){

	scheduleWindow.open();
});

returnButton.addEventListener('click', function(e){

	win1.open();
});

win1.open();

win1.add(titleView);

titleView.add(titleLabel);

win1.add(scheduleView);

win1.add(blablaView);

win1.add(HomeScrnPic);

win1.add(ContactList);

scheduleWindow.add(returnView);

scheduleWindow.add(scheduleTitleView);

scheduleWindow.add(secondpageprofileview);

scheduleWindow.add(PersonalBio);

blablaView.add(blablaLabel);

scheduleView.add(scheduleButton);

scheduleTitleView.add(scheduleTitleLabel);

ContactList.add(contactInfo);



module.exports = MasterView;
