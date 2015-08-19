//TODO: WORK ON FIRE DAMAGE, BOUNCE BACK ANIMATION
//TODO: INVENTORY

Engine.db = new Database();
function Engine(){
	var BI_BLACK = new Image("black", "Images/Backgrounds/blackTile.bmp");
	var BI_ROCKCAVE1 = new Image("rockcave1", "Images/Backgrounds/RockCave1.bmp");
	var BI_ROCKCAVE2 = new Image("rockcave2", "Images/Backgrounds/RockCave2.bmp");
	var OLD_MAN = new Image("oldman", "Images/Backgrounds/OldMan.bmp");
	var MAIN_CHAR_SPRITEF1 = new Image("mainF1", "Images/Sprites/ZeldaForward1.png");
	var MAIN_CHAR_SPRITEF2 = new Image("mainF2", "Images/Sprites/ZeldaForward2.png");
	var MAIN_CHAR_SPRITEB1 = new Image("mainB1", "Images/Sprites/ZeldaBack1.png");
	var MAIN_CHAR_SPRITEB2 = new Image("mainB2", "Images/Sprites/ZeldaBack2.png");
	var MAIN_CHAR_SPRITEL1 = new Image("mainL1", "Images/Sprites/ZeldaLeft1.png");
	var MAIN_CHAR_SPRITEL2 = new Image("mainL2", "Images/Sprites/ZeldaLeft2.png");
	var MAIN_CHAR_SPRITER1 = new Image("mainR1", "Images/Sprites/ZeldaRight1.png");
	var MAIN_CHAR_SPRITER2 = new Image("mainR2", "Images/Sprites/ZeldaRight2.png");	
	var MAIN_CHAR_SPRITEH1 = new Image("mainH1", "Images/Sprites/ZeldaForwardHolding1.png");	
	var FIRE1 = new Image("fire1", "Images/Sprites/Fire1.bmp");
	var FIRE2 = new Image("fire1", "Images/Sprites/Fire3.bmp");
	var FIRE3 = new Image("fire3", "Images/Sprites/Fire3.bmp");
	var SWORD = new Image("sword", "Images/Backgrounds/Sword.bmp");
	
	var keyState = {};
	window.addEventListener('keydown', function(e){
		keyState[e.keyCode || e.which] = true;
	}, true);
	window.addEventListener('keyup', function(e){
		keyState[e.keyCode || e.which] = false;
	}, true)
	
	Engine.db.addImage(BI_BLACK);
	Engine.db.addImage(BI_ROCKCAVE1);
	Engine.db.addImage(BI_ROCKCAVE2);
	Engine.db.addImage(MAIN_CHAR_SPRITEF1);
	Engine.db.addImage(MAIN_CHAR_SPRITEF2);
	Engine.db.addImage(MAIN_CHAR_SPRITEB1);
	Engine.db.addImage(MAIN_CHAR_SPRITEB2);
	Engine.db.addImage(MAIN_CHAR_SPRITEL1);
	Engine.db.addImage(MAIN_CHAR_SPRITEL2);
	Engine.db.addImage(MAIN_CHAR_SPRITER1);
	Engine.db.addImage(MAIN_CHAR_SPRITER2);
	Engine.db.addImage(MAIN_CHAR_SPRITEH1);
	Engine.db.addImage(OLD_MAN);
	Engine.db.addImage(FIRE1);
	Engine.db.addImage(FIRE2);
	Engine.db.addImage(FIRE3);
	Engine.db.addImage(SWORD);
	
	var page = new Page();
	var a = Engine.db.getImageByName("black");
	
	page.lstBackGround = [
	[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
    [a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],
	];
	
	var arrayforfire = [];
	arrayforfire.push(Engine.db.getImageByName("fire1"), Engine.db.getImageByName("fire2"), Engine.db.getImageByName("fire3"));
	var fire1 = new StaticSprite_Damage(70, 80, arrayforfire);
	var fire2 = new StaticSprite_Damage(70, 160, arrayforfire);
	
	var oldman = new StaticCollideable(70, 120, Engine.db.getImageByName("oldman"));
	
	//inhertance pratice
	var sword = new Sword();
	var item = new Item();
	sword.__proto__ = item;
	sword.setup(100, 120, Engine.db.getImageByName("sword"), "item-sword");
	
	var rock00 = new StaticCollideable(0, 0, Engine.db.getImageByName("rockcave2"));
	var rock01 = new StaticCollideable(0, 16, Engine.db.getImageByName("rockcave2"));
	var rock02 = new StaticCollideable(0, 32, Engine.db.getImageByName("rockcave2"));
	var rock03 = new StaticCollideable(0, 48, Engine.db.getImageByName("rockcave2"));
	var rock04 = new StaticCollideable(0, 64, Engine.db.getImageByName("rockcave2"));
	var rock05 = new StaticCollideable(0, 80, Engine.db.getImageByName("rockcave2"));
	var rock06 = new StaticCollideable(0, 96, Engine.db.getImageByName("rockcave2"));
	var rock07 = new StaticCollideable(0, 112, Engine.db.getImageByName("rockcave2"));
	var rock08 = new StaticCollideable(0, 128, Engine.db.getImageByName("rockcave2"));
	var rock09 = new StaticCollideable(0, 144, Engine.db.getImageByName("rockcave2"));
	var rock010 = new StaticCollideable(0, 160, Engine.db.getImageByName("rockcave2"));
	var rock011 = new StaticCollideable(0, 176, Engine.db.getImageByName("rockcave2"));
	var rock012 = new StaticCollideable(0, 192, Engine.db.getImageByName("rockcave2"));
	var rock013 = new StaticCollideable(0, 208, Engine.db.getImageByName("rockcave2"));
	var rock014 = new StaticCollideable(0, 224, Engine.db.getImageByName("rockcave2"));
	var rock015 = new StaticCollideable(0, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock10 = new StaticCollideable(16, 0, Engine.db.getImageByName("rockcave2"));
	var rock11 = new StaticCollideable(16, 16, Engine.db.getImageByName("rockcave2"));
	var rock12 = new StaticCollideable(16, 32, Engine.db.getImageByName("rockcave2"));
	var rock13 = new StaticCollideable(16, 48, Engine.db.getImageByName("rockcave2"));
	var rock14 = new StaticCollideable(16, 64, Engine.db.getImageByName("rockcave2"));
	var rock15 = new StaticCollideable(16, 80, Engine.db.getImageByName("rockcave2"));
	var rock16 = new StaticCollideable(16, 96, Engine.db.getImageByName("rockcave2"));
	var rock17 = new StaticCollideable(16, 112, Engine.db.getImageByName("rockcave2"));
	var rock18 = new StaticCollideable(16, 128, Engine.db.getImageByName("rockcave2"));
	var rock19 = new StaticCollideable(16, 144, Engine.db.getImageByName("rockcave2"));
	var rock110 = new StaticCollideable(16, 160, Engine.db.getImageByName("rockcave2"));
	var rock111 = new StaticCollideable(16, 176, Engine.db.getImageByName("rockcave2"));
	var rock112 = new StaticCollideable(16, 192, Engine.db.getImageByName("rockcave2"));
	var rock113 = new StaticCollideable(16, 208, Engine.db.getImageByName("rockcave2"));
	var rock114 = new StaticCollideable(16, 224, Engine.db.getImageByName("rockcave2"));
	var rock115 = new StaticCollideable(16, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock20 = new StaticCollideable(32, 0, Engine.db.getImageByName("rockcave2"));
	var rock21 = new StaticCollideable(32, 16, Engine.db.getImageByName("rockcave2"));
	var rock214 = new StaticCollideable(32, 224, Engine.db.getImageByName("rockcave2"));
	var rock215 = new StaticCollideable(32, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock30 = new StaticCollideable(48, 0, Engine.db.getImageByName("rockcave2"));
	var rock31 = new StaticCollideable(48, 16, Engine.db.getImageByName("rockcave2"));
	var rock314 = new StaticCollideable(48, 224, Engine.db.getImageByName("rockcave2"));
	var rock315 = new StaticCollideable(48, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock40 = new StaticCollideable(64, 0, Engine.db.getImageByName("rockcave2"));
	var rock41 = new StaticCollideable(64, 16, Engine.db.getImageByName("rockcave2"));
	var rock414 = new StaticCollideable(64, 224, Engine.db.getImageByName("rockcave2"));
	var rock415 = new StaticCollideable(64, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock50 = new StaticCollideable(80, 0, Engine.db.getImageByName("rockcave2"));
	var rock51 = new StaticCollideable(80, 16, Engine.db.getImageByName("rockcave2"));
	var rock514 = new StaticCollideable(80, 224, Engine.db.getImageByName("rockcave2"));
	var rock515 = new StaticCollideable(80, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock60 = new StaticCollideable(96, 0, Engine.db.getImageByName("rockcave2"));
	var rock61 = new StaticCollideable(96, 16, Engine.db.getImageByName("rockcave2"));
	var rock614 = new StaticCollideable(96, 224, Engine.db.getImageByName("rockcave2"));
	var rock615 = new StaticCollideable(96, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock70 = new StaticCollideable(112, 0, Engine.db.getImageByName("rockcave2"));
	var rock71 = new StaticCollideable(112, 16, Engine.db.getImageByName("rockcave2"));
	var rock714 = new StaticCollideable(112, 224, Engine.db.getImageByName("rockcave2"));
	var rock715 = new StaticCollideable(112, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock80 = new StaticCollideable(128, 0, Engine.db.getImageByName("rockcave2"));
	var rock81 = new StaticCollideable(128, 16, Engine.db.getImageByName("rockcave2"));
	var rock814 = new StaticCollideable(128, 224, Engine.db.getImageByName("rockcave2"));
	var rock815 = new StaticCollideable(128, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock90 = new StaticCollideable(144, 0, Engine.db.getImageByName("rockcave2"));
	var rock91 = new StaticCollideable(144, 16, Engine.db.getImageByName("rockcave2"));
	var rock914 = new StaticCollideable(144, 224, Engine.db.getImageByName("rockcave2"));
	var rock915 = new StaticCollideable(144, 240, Engine.db.getImageByName("rockcave2"));
	
	var rock100 = new StaticCollideable(160, 0, Engine.db.getImageByName("rockcave2"));
	var rock101 = new StaticCollideable(160, 16, Engine.db.getImageByName("rockcave2"));
	var rock102 = new StaticCollideable(160, 32, Engine.db.getImageByName("rockcave1"));
	var rock103 = new StaticCollideable(160, 48, Engine.db.getImageByName("rockcave1"));
	var rock104 = new StaticCollideable(160, 64, Engine.db.getImageByName("rockcave1"));
	var rock105 = new StaticCollideable(160, 80, Engine.db.getImageByName("rockcave1"));
	var rock106 = new StaticCollideable(160, 96, Engine.db.getImageByName("rockcave1"));
	var rock109 = new StaticCollideable(160, 144, Engine.db.getImageByName("rockcave1"));
	var rock1010 = new StaticCollideable(160, 160, Engine.db.getImageByName("rockcave1"));
	var rock1011 = new StaticCollideable(160, 176, Engine.db.getImageByName("rockcave1"));
	var rock1012 = new StaticCollideable(160, 192, Engine.db.getImageByName("rockcave1"));
	var rock1013 = new StaticCollideable(160, 208, Engine.db.getImageByName("rockcave1"));
	var rock1014 = new StaticCollideable(160, 224, Engine.db.getImageByName("rockcave2"));
	var rock1015 = new StaticCollideable(160, 240, Engine.db.getImageByName("rockcave2"));
	
	page.lstStaticColliable = [oldman, rock00, rock01, rock02, rock03, rock04, rock05, rock06, rock07, rock08, rock09, rock010, rock011, rock012, rock013, rock014, rock015, rock10, rock11, rock12, rock13, rock14, rock15, rock16, rock17, rock18, rock19, rock110, rock111, rock112, rock113, rock114, rock115, rock20, rock21, rock214, rock215, rock30, rock31, rock314, rock315, rock40, rock41, rock414, rock415, rock50, rock51, rock514, rock515, rock60, rock61, rock614, rock615, rock70, rock71, rock714, rock715, rock80, rock81, rock814, rock815, rock90, rock91, rock914, rock915, rock100, rock101, rock102, rock103, rock104, rock105, rock106, rock109, rock1010, rock1011, rock1011, rock1012, rock1013, rock1014, rock1015];
	
	page.lstStaticSprite_Damage = [fire1, fire2];
	
	page.lstItems = [sword];
	
	page.textable = ['I', 'T', "'", 'S', ' ', 'D', 'A', 'N', 'G', 'E', 'R', 'O', 'U', 'S', ' ', 'T', 'O', ' ', 'G', 'O', "\n", 'A', 'L', 'O', 'N', 'E', '!', ' ', 'T', 'A', 'K', 'E', ' ', 'T', 'H', 'I', 'S', '.'];
	page.spawnTextpos(24, 77);
	
	page.makePage();
	
	var player = new Player(156, 120, page);
	player.spawn(3);
	
	var gameLoop = function(){
		if(keyState[65]){
			player.handlekeydown('A');
		} else if(keyState[68]){
			player.handlekeydown('D');
		} else if(keyState[87]){
			player.handlekeydown('W');
		} else if(keyState[83]){
			player.handlekeydown('S');
		}
		if(player.canMoveTime != 0){
			setTimeout(gameLoop, 90 + player.canMoveTime);
			player.canMoveTime = 0;
		} else {
			setTimeout(gameLoop, 90);
		}
	}
	
	gameLoop();
}
function Inventory(){
}
function Item(){
	this.top;
	this.left;
	this.imagesrc;
	this.itemid;
	
	this.leftborder = this.left;
	this.topborder = this.top; 
	this.rightborder = this.left + 16;
	this.bottomborder = this.top + 16;
	
	this.setup = function(atop, aleft, aimagesrc, itemid){
		this.top = atop;
		this.left = aleft;
		this.imagesrc = aimagesrc;
		this.leftborder = this.left;
		this.topborder = this.top; 
		this.rightborder = this.left + 16;
		this.bottomborder = this.top + 16;
	}
	
	this.spawn = function(){
		var statDiv = document.createElement("img");
		statDiv.className = "static-item-element";
		statDiv.id = this.itemid;
		statDiv.src = this.imagesrc;
		statDiv.style = "top:" + this.top + "; left:" + this.left + ";";
		document.body.appendChild(statDiv);
	}
}
function Sword(){
}
function StaticSprite_Damage(atop, aleft, aarray){
	this.top = atop;
	this.left = aleft;
	this.imagesrc = aarray;
	
	this.leftborder = this.left;
	this.topborder = this.top; 
	this.rightborder = this.left + 16;
	this.bottomborder = this.top + 16;
	
	this.damage = 0.5;
	
	this.spawn = function(){
		var statDiv = document.createElement("img");
		statDiv.className = "static-sprite-damage-element";
		statDiv.src = this.imagesrc[0];
		statDiv.style = "top:" + this.top + "; left:" + this.left + ";";
		document.body.appendChild(statDiv);
	}
	
	this.spriteLoop = function(){
		//fire loop
	}
}
function StaticCollideable(atop, aleft, aimagesrc){
	this.top = atop;
	this.left = aleft;
	this.imagesrc = aimagesrc;
	
	this.leftborder = this.left;
	this.topborder = this.top; 
	this.rightborder = this.left + 16;
	this.bottomborder = this.top + 16;
	
	this.spawn = function(){
		var statDiv = document.createElement("img");
		statDiv.className = "static-collide-element";
		statDiv.src = this.imagesrc;
		statDiv.style = "top:" + this.top + "; left:" + this.left + ";";
		document.body.appendChild(statDiv);
	}
}
function Page(){
	this.lstBackGround = [];
	this.lstStaticColliable = [];
	this.lstStaticSprite_Damage = [];
	this.lstItems = [];
	this.maxleft = 0;
	this.maxtop = 0;
	this.maxright = 256;
	this.maxbottom = 176;
	
	this.texttop = 0;
	this.textleft = 0;
	this.textable = [];
	
	this.destroyItem = function(i, itemid){
		if(this.lstItems[i] == undefined){
			var previousimage = document.getElementById(itemid);
			previousimage.parentNode.removeChild(previousimage);
			this.lstItems.splice(i, 1); //MAKE SURE THIS IS RIGHT USE
		}
	}
	this.placeItems = function(){
		for(var i = 0; i < this.lstItems.length; i++){
			this.lstItems[i].spawn();
		}
	}
	this.spawnTextpos = function(atop, aleft){
		this.texttop = atop;
		this.textleft = aleft;
	}	
	this.showTexable = function(){
		var textDiv = document.createElement("p");
		textDiv.className = "text-element";
		textDiv.id = "text";
		textDiv.style = "top: " + this.texttop + "; left:" + this.textleft + ";";
		
		this.textloop = function(){
			for(var i = 0; i < this.textable.length; i++){
				(function(index, text){
					setTimeout(function(){
						textDiv.innerHTML += text[index];
						document.body.appendChild(textDiv);
					}, 100 * (i * 1))
				})(i, this.textable);
			}
		}
		this.textloop();
	}
	this.placeStatics = function(){
		for(var i = 0; i < this.lstStaticColliable.length; i++){
			this.lstStaticColliable[i].spawn();
		}
	}
	this.placeStaticSpritesDamage = function(){
		for(var i = 0; i < this.lstStaticSprite_Damage.length; i++){
			this.lstStaticSprite_Damage[i].spawn();
		}
	}
	this.placeBackground = function(){
		var pageDiv = document.createElement("div");
		pageDiv.className = "page";
		document.body.appendChild(pageDiv);
		var newDiv = document.createElement("div");
		newDiv.className = "page-element";
		for(var height = 0; height < this.lstBackGround.length; height++){
			var rowDiv = document.createElement("div");
			rowDiv.className = "row-element";
			newDiv.appendChild(rowDiv);
			var picrow = this.lstBackGround[height];
			for(var width = 0; width < picrow.length; width++){
				var colDiv = document.createElement("div");
				colDiv.className = "col-element";
				rowDiv.appendChild(colDiv);
				var block = document.createElement("img");
				block.className = "back-tile-element";
				block.src = picrow[width];
				colDiv.appendChild(block);
			}
		}
		pageDiv.appendChild(newDiv);	
	}
	this.makePage = function(){
		this.placeBackground();
		this.placeStatics();
		this.placeStaticSpritesDamage();
		this.showTexable();
		this.placeItems();
	}
}
function Player(atop, aleft, acurrentpage){
	this.top = atop;
	this.left = aleft;
	this.sprite = [];
	this.items = [];
	this.currentPage = acurrentpage;
	this.movespeed = 4;
	this.canMoveTime = 0;
	
	var downMoveCounter = 0;
	var upMoveCounter = 0;
	var rightMoveCounter = 0;
	var leftMoveCounter = 0;
	
	this.leftborder = this.left;
	this.topborder = this.top; 
	this.rightborder = this.left + 16;
	this.bottomborder = this.top + 16;
	
	this.sprite.push(Engine.db.getImageByName("mainF1"));
	this.sprite.push(Engine.db.getImageByName("mainF2"));
	this.sprite.push(Engine.db.getImageByName("mainB1"));
	this.sprite.push(Engine.db.getImageByName("mainB2"));
	this.sprite.push(Engine.db.getImageByName("mainR1"));
	this.sprite.push(Engine.db.getImageByName("mainR2"));
	this.sprite.push(Engine.db.getImageByName("mainL1"));
	this.sprite.push(Engine.db.getImageByName("mainL2"));
	this.sprite.push(Engine.db.getImageByName("mainH1"));
	
	this.spawn = function(spritedir){
		var statDiv = document.createElement("img");
		statDiv.className = "main-element";
		statDiv.id = "main";
		statDiv.src = this.sprite[spritedir];
		statDiv.style = "top:" + this.top + "; left:" + this.left + ";";
		document.body.appendChild(statDiv);
	}
	
	this.move = function(atop, aleft, asprite){
		var previousimage = document.getElementById("main");
		previousimage.parentNode.removeChild(previousimage);
		var statDiv = document.createElement("img");
		statDiv.className = "main-element";
		statDiv.id = "main";
		statDiv.src = asprite
		statDiv.style = "top:" + atop + "; left:" + aleft + ";";
		document.body.appendChild(statDiv);
		this.top = atop;
		this.left = aleft;
		this.leftborder = this.left;
		this.topborder = this.top; 
		this.rightborder = this.left + 16;
		this.bottomborder = this.top + 16;
	}
	
	//lets not split this bettween item types :/ 
	//but will fix later it's low prority
	this.handlekeydown = function(ecode){
		var canMove = true;
		var thiscanpickup = false;
		var pickupnum = 0;
		this.canMoveTime = 0;
		switch(ecode){
			case 'A':
				for(var i = 0; i < this.currentPage.lstStaticColliable.length; i++){
					if(this.currentPage.lstStaticColliable[i].topborder == this.topborder && this.currentPage.lstStaticColliable[i].bottomborder == this.bottomborder){
						if(this.leftborder >= this.currentPage.lstStaticColliable[i].leftborder){
							if(this.left + this.movespeed <= this.currentPage.lstStaticColliable[i].rightborder){
								canMove = false;
							}
						}
					} else if(this.currentPage.lstStaticColliable[i].topborder < this.topborder && this.currentPage.lstStaticColliable[i].bottomborder > this.topborder){
						if(this.leftborder >= this.currentPage.lstStaticColliable[i].leftborder){
							if(this.left + this.movespeed <= this.currentPage.lstStaticColliable[i].rightborder){
								canMove = false;
							}
						}
					} else if(this.currentPage.lstStaticColliable[i].topborder > this.topborder && this.currentPage.lstStaticColliable[i].topborder < this.bottomborder){
						if(this.leftborder >= this.currentPage.lstStaticColliable[i].leftborder){
							if(this.left + this.movespeed <= this.currentPage.lstStaticColliable[i].rightborder){
								canMove = false;
							}
						}
					}
				}
				if(canMove){
					if(leftMoveCounter % 2 == 0){
						this.move(this.top, this.left - this.movespeed, this.sprite[6]);
					} else {
						this.move(this.top, this.left - this.movespeed, this.sprite[7]);
					}
					leftMoveCounter += 1;
				} else {
					this.move(this.top, this.left, this.sprite[6]);
				}
				break;
			case 'W':
				for(var i = 0; i < this.currentPage.lstStaticColliable.length; i++){
					if(this.currentPage.lstStaticColliable[i].leftborder == this.leftborder && this.currentPage.lstStaticColliable[i].rightborder == this.rightborder){
						if(this.bottomborder >= this.currentPage.lstStaticColliable[i].bottomborder){
							if(this.topborder + this.movespeed <= this.currentPage.lstStaticColliable[i].bottomborder){
								canMove = false;
							}
						}
					} else if(this.currentPage.lstStaticColliable[i].leftborder < this.leftborder && this.currentPage.lstStaticColliable[i].rightborder > this.leftborder){
						if(this.bottomborder >= this.currentPage.lstStaticColliable[i].bottomborder){
							if(this.topborder + this.movespeed <= this.currentPage.lstStaticColliable[i].bottomborder){
								canMove = false;
							}
						}
					} else if(this.currentPage.lstStaticColliable[i].leftborder > this.leftborder && this.currentPage.lstStaticColliable[i].leftborder < this.rightborder) {
						if(this.bottomborder >= this.currentPage.lstStaticColliable[i].bottomborder){
							if(this.topborder + this.movespeed <= this.currentPage.lstStaticColliable[i].bottomborder){
								canMove = false;
							}
						}
					}
				}
				if(canMove){
					if(downMoveCounter % 2 == 0){
						this.move(this.top - this.movespeed, this.left, this.sprite[2]);
					} else {
						this.move(this.top - this.movespeed, this.left, this.sprite[3]);
					}
					downMoveCounter += 1;
				} else {
					this.move(this.top, this.left, this.sprite[2]);
				}
				for(var i = 0; i < this.currentPage.lstItems.length; i++){
					if(this.currentPage.lstItems[i].leftborder == this.leftborder && this.currentPage.lstItems[i].rightborder == this.rightborder){
						if(this.bottomborder >= this.currentPage.lstItems[i].bottomborder){
							if(this.topborder + this.movespeed <= this.currentPage.lstItems[i].bottomborder){
								thiscanpickup = true;
								pickupnum = i;
							}
						}
					} else if(this.currentPage.lstItems[i].leftborder < this.leftborder && this.currentPage.lstItems[i].rightborder > this.leftborder){
						if(this.bottomborder >= this.currentPage.lstItems[i].bottomborder){
							if(this.topborder + this.movespeed <= this.currentPage.lstItems[i].bottomborder){
								thiscanpickup = true;
								pickupnum = i;
							}
						}
					} else if(this.currentPage.lstItems[i].leftborder > this.leftborder && this.currentPage.lstItems[i].leftborder < this.rightborder) {
						if(this.bottomborder >= this.currentPage.lstItems[i].bottomborder){
							if(this.topborder + this.movespeed <= this.currentPage.lstItems[i].bottomborder){
								thiscanpickup = true;
								pickupnum = i;
							}
						}
					}
				}
				if(thiscanpickup){
					this.move(this.top, this.left, this.sprite[8]);
					this.items.push(this.currentPage.lstItems[pickupnum]);
					delete this.currentPage.lstItems[pickupnum];
					//this.currentPage.destroyItem(pickupnum, this.items[pickupnum].itemid);
					this.pause = function(player, curpage, picknum, items){
						window.setTimeout(function(){player.move(player.top, player.left, player.sprite[0]); curpage.destroyItem(picknum, items[picknum].itemid)}, 3000);
						player.canMoveTime = 2910;
					}(this, this.currentPage, pickupnum, this.items);
				}
				break;
			case 'D':
				for(var i = 0; i < this.currentPage.lstStaticColliable.length; i++){
					if(this.currentPage.lstStaticColliable[i].topborder == this.topborder && this.currentPage.lstStaticColliable[i].bottomborder == this.bottomborder){
						if(this.rightborder <= this.currentPage.lstStaticColliable[i].rightborder){
							if(this.rightborder + this.movespeed >= this.currentPage.lstStaticColliable[i].leftborder){
								canMove = false;
							}
						}
					} else if(this.currentPage.lstStaticColliable[i].topborder < this.topborder && this.currentPage.lstStaticColliable[i].bottomborder > this.topborder){
						if(this.rightborder <= this.currentPage.lstStaticColliable[i].rightborder){
							if(this.rightborder + this.movespeed >= this.currentPage.lstStaticColliable[i].leftborder){
								canMove = false;
							}
						}
					} else if(this.currentPage.lstStaticColliable[i].topborder > this.topborder && this.currentPage.lstStaticColliable[i].topborder < this.bottomborder){
						if(this.rightborder <= this.currentPage.lstStaticColliable[i].rightborder){
							if(this.rightborder + this.movespeed >= this.currentPage.lstStaticColliable[i].leftborder){
								canMove = false;
							}
						}
					}
				}
				if(canMove){
					if(rightMoveCounter % 2 == 0){
						this.move(this.top, this.left + this.movespeed, this.sprite[4]);
					} else {
						this.move(this.top, this.left + this.movespeed, this.sprite[5]);
					}
					rightMoveCounter += 1;
				} else {
					this.move(this.top, this.left, this.sprite[4]);
				}
				break;
			case 'S':
				for(var i = 0; i < this.currentPage.lstStaticColliable.length; i++){
					if(this.currentPage.lstStaticColliable[i].leftborder == this.leftborder && this.currentPage.lstStaticColliable[i].rightborder == this.rightborder){
						if(this.topborder <= this.currentPage.lstStaticColliable[i].topborder){
							if(this.bottomborder + this.movespeed >= this.currentPage.lstStaticColliable[i].topborder){
								canMove = false;
							}
						}
					} else if(this.currentPage.lstStaticColliable[i].leftborder < this.leftborder && this.currentPage.lstStaticColliable[i].rightborder > this.leftborder){
						if(this.topborder <= this.currentPage.lstStaticColliable[i].topborder){
							if(this.bottomborder + this.movespeed >= this.currentPage.lstStaticColliable[i].topborder){
								canMove = false;
							}
						}
					} else if(this.currentPage.lstStaticColliable[i].leftborder > this.leftborder && this.currentPage.lstStaticColliable[i].leftborder < this.rightborder) {
						if(this.topborder <= this.currentPage.lstStaticColliable[i].topborder){
							if(this.bottomborder + this.movespeed >= this.currentPage.lstStaticColliable[i].topborder){
								canMove = false;
							}
						}
					}
				}
				if(canMove){
					if(downMoveCounter % 2 == 0){
						this.move(this.top + this.movespeed, this.left, this.sprite[0]);
					} else {
						this.move(this.top + this.movespeed, this.left, this.sprite[1]);
					}
					downMoveCounter += 1;
				} else {
					this.move(this.top, this.left, this.sprite[0]);
				}
				break;
		}
	}
}
function Database(){
	this.lstImages = [];
	
	this.addImage = function(backImage){
		this.lstImages.push(backImage);
	}
	
	this.getImageByName = function(aname){
		for(var i = 0; i < this.lstImages.length; i++){
			var bi = this.lstImages[i];
			if(bi.name == aname){
				return bi.image;
			}
		}
	}
}
function Image(aname, aimage){
	this.name = aname;
	this.image = aimage;
}