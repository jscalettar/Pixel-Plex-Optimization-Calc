$(document).ready(function(){	
	/* Declare Housing */
	var cabin = [], house = [], duplex = [], condo = [], motel = [], apartment = [];
	/* Declare Factory */
	var lumber = [], cement = [], steel = [];
	/* Declare Businesses */
	var farm = [], diner = [], bakery = [], coffee = [], gas = [];
	var clinic = [], fastfood = [], carrental = [], bank = [], cinema = [];
	var market = [], office = [], tech = [], space = [];
	/* Declare Recreation */
	var playground, basketball, tennis, pool, fountain, church, garden, museum;
	/* Declare Infratructure */ 
	var warehouse = [], trade = [], school = [], contractor = [];
	
	/* Declare HTML variables */
	var housingTitle = [], factoryTitle = [], businessTitle = [], recreationTitle = [], infratructureTitle = [];
	var levelOneText = [], levelTwoText = [], levelThreeText = [], levelFourText = [], levelFiveText = [];
	var costsText = [], incomeText = [];
	var moneySymbol = [], woodSymbol = [], cementSymbol = [], steelSymbol = [];
	var moneyColor = [], woodColor = [], cementColor = [], steelColor = [];
	var chevronCircle = [];
	
	/* Prints "key pressed" when typing in contractor text input box */
	/* $('#contractorLvl').on('keyup', function(){
		console.log('key pressed');
	}); */
	
	/* Makes text box yellow when selected */
	$('input').focus(function(){
		$(this).css('background','#ffc728'); 
	});
	
	/* Returns text box to white when deselected */
	$('input').blur(function(){
		$(this).css('background','white');
	});
	
	/* Changes made when calculate button is pressed */
	$('#submitButton').click(function(e){
		// console.log('button pressed');
		/* Save value from input */
		var conLvl = $('#contractorLvl').val();
		//console.log(conLvl);
		/* Print value from input to page */
		/* Test */
		/* $('#calcResults').html(' \
			your constructor level is <b>' + conLvl + '</b><br> \
			Level 1 cabins cost $' + cabin[0].costM + '. \
		'); */
		$('#calcResults').html(
			/***** HOUSING *****/ housingTitle + 
			/* Cabin Stats */ chevronCircle + '<font color="#0"><b>Cabin</b></font>' + 
			/*Lvl 1*/ levelOneText + cabin[0].printStats(conLvl) + /*Lvl 2*/ levelTwoText + cabin[1].printStats(conLvl) + /*Lvl 3*/ levelThreeText + cabin[2].printStats(conLvl) + /*Lvl 4*/ levelFourText + cabin[3].printStats(conLvl) + /*Lvl 5*/ levelFiveText + cabin[4].printStats(conLvl) +
			/* House Stats */ chevronCircle + '<font color="#0"><b>House</b></font>' + 
			/*Lvl 1*/ levelOneText + house[0].printStats(conLvl) + /*Lvl 2*/ levelTwoText + house[1].printStats(conLvl) + /*Lvl 3*/ levelThreeText + house[2].printStats(conLvl) + /*Lvl 4*/ levelFourText + house[3].printStats(conLvl) + /*Lvl 5*/ levelFiveText + house[4].printStats(conLvl) +
			
			/***** FACTORY *****/ factoryTitle + 
			/* Lumbere Mill Stats */ chevronCircle + '<font color="#0"><b>Lumber Mill</b></font>' + 
			/*Lvl 1*/ levelOneText + lumber[0].printStats(conLvl) + levelTwoText + /*Lvl 2*/ lumber[1].printStats(conLvl) + /*Lvl 3*/ levelThreeText + lumber[2].printStats(conLvl) + /*Lvl 4*/ levelFourText + lumber[3].printStats(conLvl) + /*Lvl 5*/ levelFiveText + lumber[4].printStats(conLvl) 	
		);
		
		//Tests setting efficency for number of current employees
		/* farm[3].setEfficency(2);
		console.log(2 + ' out of ' + farm[3].people + ' total employees is ' + farm[3].efficency * 100 + '% efficent.'); */
	});	
	
	/* Building Object */
	function building(type, name, level, costM, costL, costC, costS, people, incomeMax, incomeL, incomeC, incomeS, happiness, contractorLvl, incomePer){
		/* Read-in Variables */
		this.type = type;
		this.name = name;
		this.level = level;
		this.costM = costM;
		this.costL = costL;
		this.costC = costC;
		this.costS = costS;
		this.people = people;
		this.incomeMax = incomeMax
		this.incomeL = incomeL;
		this.incomeC = incomeC;
		this.incomeS = incomeS;
		this.happiness = happiness;
		this.contractorLvl = contractorLvl;
		this.incomePer = incomePer;
		/* Other Variables */
		this.efficency = 0; //0% efficent because noone works here yet
		
		/* Calculate all incomes based off possible number of employees */
		
		/* Calculate all efficency based off possible number of employees */
		  //then change setEfficency() to just grab these values
		
		this.printStats = function(conLvl){
			/* Grey out what you can't build yet */
			if(this.contractorLvl > conLvl){
				return 'Unlocks at contrator level ' + this.contractorLvl + '.';
			}else{
				if(this.name == "lumber"){
					return costsText + moneySymbol + moneyColor + this.costM + '</font> ' + woodSymbol + woodColor + this.costL + '</font> ' + cementSymbol + cementColor + this.costC + '</font> ' + steelSymbol + steelColor + this.costS + '</font> ' + 
						incomeText + woodSymbol + woodColor + this.incomeL + '</font> ';
				}else if(this.name == "cement"){
					return costsText + cementSymbol + cementColor + this.costM + '</font> ' + woodSymbol + woodColor + this.costL + '</font> ' + cementSymbol + cementColor + this.costC + '</font> ' + steelSymbol + steelColor + this.costS + '</font> ' + 
						incomeText + steelSymbol + steelColor + this.incomeL + '</font> ';
				}else if(this.name == "steel"){
					return costsText + moneySymbol + moneyColor + this.costM + '</font> ' + woodSymbol + woodColor + this.costL + '</font> ' + cementSymbol + cementColor + this.costC + '</font> ' + steelSymbol + steelColor + this.costS + '</font> ' + 
						incomeText + woodSymbol + woodColor + this.incomeL + '</font> ';
				}else{
					return costsText + moneySymbol + moneyColor + this.costM + '</font> ' + woodSymbol + woodColor + this.costL + '</font> ' + cementSymbol + cementColor + this.costC + '</font> ' + steelSymbol + steelColor + this.costS + '</font> ' + 
						incomeText + moneySymbol + moneyColor + this.incomeMax + '</font> ';
				}
			}
		}
		
		/* Calculate efficency based on number of current employees */
		this.setEfficency = function(employees){
			this.efficency = employees / this.people;
			//console.log(employees + ' out of ' + this.people + ' total employees is ' + this.efficency * 100 + '% efficent.');
		}
		
		/* Returns true if building will make residents in the same block sad */
		this.sadResidents = function(){
			if(this.happiness < 0 ) return true;
			return false;
		}
		
		/* Calculate happiness of suggested block */
		this.getHappiness = function(){
			
		}
	}
	
	/********** DEFINING HTML FOR TEXT **********/
	housingTitle = ['<font color=#9e64a5 size="60"><i class="fa fa-home"></i> <b>Housing</b> </font>'];
	factoryTitle = ['<br><br><font color=#9e64a5 size="60"><i class="fa fa-industry"></i> <b>Factory</b> </font>'];
	businessTitle = ['<br><br><font color=#9e64a5 size="60"><i class="fa fa-building"></i> <b>Businesses</b> </font>'];
	recreationTitle = ['<br><br><font color=#9e64a5 size="60"><i class="fa fa-basket-ball"></i> <b>Recreation</b> </font>'];
	infratructureTitle = ['<br><br><font color=#9e64a5 size="60"><i class="fa fa-warehouse"></i> <b>Infratructure</b> </font>'];
	levelOneText = ['<br><font color=#0><b>Level 1:</b></font> '];
	levelTwoText = ['<br><font color=#0><b>Level 2:</b></font> '];
	levelThreeText = ['<br><font color=#0><b>Level 3:</b></font> '];
	levelFourText = ['<br><font color=#0><b>Level 4:</b></font> '];
	levelFiveText = ['<br><font color=#0><b>Level 5:</b></font> '];
	costsText = ['<b>Costs: </b>'];
	incomeText = ['<br><b>Income: </b>'];
	moneySymbol = ['<font color=#89ad30><i class="fa fa-money"></i></font> '];
	moneyColor = ['<font color=#89ad30>'];
	woodSymbol = ['<font color=#f47442><i class="fa fa-industry"></i></font> '];
	woodColor = ['<font color=#f47442>'];
	cementSymbol = ['<font color=#e74e4e><i class="fa fa-industry"></i></font> '];
	cementColor = ['<font color=#e74e4e>'];
	steelSymbol = ['<font color=#45a2a6><i class="fa fa-industry"></i></font> '];
	steelColor = ['<font color=#45a2a6>'];
	chevronCircle = ['<br><font color=#ffc727><i class="fa fa-chevron-circle-right"></i></font> '];
	
	/********** DEFINING STATS FOR ALL BUILDING TYPES **********/
	/*************** HOUSING ****************/
	/* Initialize Cabin lvl 1-5 values */
	cabin[0] = new building('housing', 'cabin', 1,/*costs:*/ 60, 35, 5, 0,/*people:*/ 2,/*income:*/ 14, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 1,/*incomePer:*/ 7);
	cabin[1] = new building('housing', 'cabin', 2,/*costs:*/ 210, 65, 25, 0,/*people:*/ 3,/*income:*/ 21, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 1,/*incomePer:*/ 7);
	cabin[2] = new building('housing', 'cabin', 3,/*costs:*/ 725, 115, 40, 0,/*people:*/ 4,/*income:*/ 30, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 4,/*incomePer:*/ 8);
	cabin[3] = new building('housing', 'cabin', 4,/*costs:*/ 1120, 180, 75, 0,/*people:*/ 5,/*income:*/ 45, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 9);
	cabin[4] = new building('housing', 'cabin', 5,/*costs:*/ 1600, 250, 110, 0,/*people:*/ 6,/*income:*/ 60, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 10);

	/* Initialize House lvl 1-5 values */
	house[0] = new building('housing', 'house', 1,/*costs:*/ 100, 60, 15, 0,/*people:*/ 2,/*income:*/ 16, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 3,/*incomePer:*/ 8);
	house[1] = new building('housing', 'house', 2,/*costs:*/ 300, 85, 30, 0,/*people:*/ 3,/*income:*/ 24, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 3,/*incomePer:*/ 8);
	house[2] = new building('housing', 'house', 3,/*costs:*/ 810, 125, 50, 0,/*people:*/ 4,/*income:*/ 35, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 4,/*incomePer:*/ 9);
	house[3] = new building('housing', 'house', 4,/*costs:*/ 1250, 200, 90, 0,/*people:*/ 5,/*income:*/ 50, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 6,/*incomePer:*/ 10);
	house[4] = new building('housing', 'house', 5,/*costs:*/ 1800, 275, 130, 0,/*people:*/ 6,/*income:*/ 65, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 8,/*incomePer:*/ 11);

	/* Initialize Duplex lvl 1-5 values */
	duplex[0] = new building('housing', 'duplex', 1,/*costs:*/ 250, 50, 35, 0,/*people:*/ 2,/*income:*/ 18, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 4,/*incomePer:*/ 9);
	duplex[1] = new building('housing', 'duplex', 2,/*costs:*/ 580, 75, 60, 5,/*people:*/ 4,/*income:*/ 28, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 4,/*incomePer:*/ 7);
	duplex[2] = new building('housing', 'duplex', 3,/*costs:*/ 1100, 110, 90, 25,/*people:*/ 6,/*income:*/ 45, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 4,/*incomePer:*/ 8);
	duplex[3] = new building('housing', 'duplex', 4,/*costs:*/ 1910, 160, 140, 55,/*people:*/ 8,/*income:*/ 70, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 9);
	duplex[4] = new building('housing', 'duplex', 5,/*costs:*/ 2800, 250, 215, 100,/*people:*/ 10,/*income:*/ 90, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 9);

	/* Initialize Condo lvl 1-5 values */
	condo[0] = new building('housing', 'condo', 1,/*costs:*/ 950, 150, 75, 50,/*people:*/ 3,/*income:*/ 25, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 5,/*incomePer:*/ 8);
	condo[1] = new building('housing', 'condo', 2,/*costs:*/ 1365, 220, 125, 100,/*people:*/ 5,/*income:*/ 35, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 5,/*incomePer:*/ 7);
	condo[2] = new building('housing', 'condo', 3,/*costs:*/ 2110, 370, 190, 235,/*people:*/ 7,/*income:*/ 55, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 5,/*incomePer:*/ 8);
	condo[3] = new building('housing', 'condo', 4,/*costs:*/ 3675, 525, 275, 400,/*people:*/ 9,/*income:*/ 75, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 8);
	condo[4] = new building('housing', 'condo', 5,/*costs:*/ 5100, 750, 450, 550,/*people:*/ 12,/*income:*/ 95, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 8);

	/* Initialize Motel lvl 1-5 values */
	motel[0] = new building('housing', 'motel', 1,/*costs:*/ 550, 120, 55, 20,/*people:*/ 5,/*income:*/ 10, 0, 0, 0,/*happiness:*/ -12,/*contractor:*/ 6,/*incomePer:*/ 2);
	motel[1] = new building('housing', 'motel', 2,/*costs:*/ 900, 190, 110, 60,/*people:*/ 9,/*income:*/ 20, 0, 0, 0,/*happiness:*/ -12,/*contractor:*/ 6,/*incomePer:*/ 2);
	motel[2] = new building('housing', 'motel', 3,/*costs:*/ 1420, 280, 170, 110,/*people:*/ 12,/*income:*/ 35, 0, 0, 0,/*happiness:*/ -12,/*contractor:*/ 6,/*incomePer:*/ 3);
	motel[3] = new building('housing', 'motel', 4,/*costs:*/ 2550, 375, 235, 180,/*people:*/ 15,/*income:*/ 50, 0, 0, 0,/*happiness:*/ -12,/*contractor:*/ 6,/*incomePer:*/ 3);
	motel[4] = new building('housing', 'motel', 5,/*costs:*/ 3800, 500, 300, 270,/*people:*/ 18,/*income:*/ 65, 0, 0, 0,/*happiness:*/ -12,/*contractor:*/ 8,/*incomePer:*/ 4);

	/* Initialize Apartment lvl 1-5 values */
	apartment[0] = new building('housing', 'apartment', 1,/*costs:*/ 2200, 320, 200, 140,/*people:*/ 6,/*income:*/ 30, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 5);
	apartment[1] = new building('housing', 'apartment', 2,/*costs:*/ 3850, 550, 280, 295,/*people:*/ 10,/*income:*/ 45, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 5);
	apartment[2] = new building('housing', 'apartment', 3,/*costs:*/ 5100, 670, 410, 460,/*people:*/ 14,/*income:*/ 65, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 5);
	apartment[3] = new building('housing', 'apartment', 4,/*costs:*/ 7300, 790, 560, 640,/*people:*/ 18,/*income:*/ 85, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 5);
	apartment[4] = new building('housing', 'apartment', 5,/*costs:*/ 9100, 910, 700, 820,/*people:*/ 22,/*income:*/ 110, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 5);

	/*************** FACTORY ****************/
	/* Initialize Lumber Mill lvl 1-5 values */
	lumber[0] = new building('factory', 'lumber', 1,/*costs:*/ 100, 25, 0, 0,/*people:*/ 1,/*income:*/ 0, 8, 0, 0,/*happiness:*/ -10,/*contractor:*/ 1,/*incomePer:*/ 0);
	lumber[1] = new building('factory', 'lumber', 2,/*costs:*/ 450, 50, 0, 0,/*people:*/ 3,/*income:*/ 0, 14, 0, 0,/*happiness:*/ -10,/*contractor:*/ 1,/*incomePer:*/ 0);
	lumber[2] = new building('factory', 'lumber', 3,/*costs:*/ 1225, 110, 50, 15,/*people:*/ 5,/*income:*/ 0, 20, 0, 0,/*happiness:*/ -10,/*contractor:*/ 4,/*incomePer:*/ 0);
	lumber[3] = new building('factory', 'lumber', 4,/*costs:*/ 2350, 200, 100, 50,/*people:*/ 7,/*income:*/ 0, 26, 0, 0,/*happiness:*/ -10,/*contractor:*/ 6,/*incomePer:*/ 0);
	lumber[4] = new building('factory', 'lumber', 5,/*costs:*/ 4500, 320, 160, 110,/*people:*/ 10,/*income:*/ 0, 32, 0, 0,/*happiness:*/ -10,/*contractor:*/ 8,/*incomePer:*/ 0);

	/* Initialize Cement Factory lvl 1-5 values */
	cement[0] = new building('factory', 'cement', 1,/*costs:*/ 650, 80, 20, 10,/*people:*/ 2,/*income:*/ 0, 0, 8, 0,/*happiness:*/ -20,/*contractor:*/ 3,/*incomePer:*/ 0);
	cement[1] = new building('factory', 'cement', 2,/*costs:*/ 1100, 140, 60, 25,/*people:*/ 4,/*income:*/ 0, 0, 14, 0,/*happiness:*/ -20,/*contractor:*/ 3,/*incomePer:*/ 0);
	cement[2] = new building('factory', 'cement', 3,/*costs:*/ 1800, 190, 90, 50,/*people:*/ 6,/*income:*/ 0, 0, 20, 0,/*happiness:*/ -20,/*contractor:*/ 4,/*incomePer:*/ 0);
	cement[3] = new building('factory', 'cement', 4,/*costs:*/ 3250, 250, 140, 100,/*people:*/ 8,/*income:*/ 0, 0, 26, 0,/*happiness:*/ -20,/*contractor:*/ 6,/*incomePer:*/ 0);
	cement[4] = new building('factory', 'cement', 5,/*costs:*/ 5500, 400, 220, 180,/*people:*/ 10,/*income:*/ 0, 0, 32, 0,/*happiness:*/ -20,/*contractor:*/ 8,/*incomePer:*/ 0);

	/* Initialize Steel Mill lvl 1-5 values */
	steel[0] = new building('factory', 'steel', 1,/*costs:*/ 1300, 180, 150, 0,/*people:*/ 3,/*income:*/ 0, 0, 0, 8,/*happiness:*/ -25,/*contractor:*/ 5,/*incomePer:*/ 0);
	steel[1] = new building('factory', 'steel', 2,/*costs:*/ 1500, 270, 200, 80,/*people:*/ 5,/*income:*/ 0, 0, 0, 14,/*happiness:*/ -25,/*contractor:*/ 5,/*incomePer:*/ 0);
	steel[2] = new building('factory', 'steel', 3,/*costs:*/ 2700, 300, 250, 150,/*people:*/ 7,/*income:*/ 0, 0, 0, 20,/*happiness:*/ -25,/*contractor:*/ 5,/*incomePer:*/ 0);
	steel[3] = new building('factory', 'steel', 4,/*costs:*/ 4900, 440, 300, 210,/*people:*/ 10,/*income:*/ 0, 0, 0, 26,/*happiness:*/ -25,/*contractor:*/ 6,/*incomePer:*/ 0);
	steel[4] = new building('factory', 'steel', 5,/*costs:*/ 6100, 515, 350, 300,/*people:*/ 15,/*income:*/ 0, 0, 0, 32,/*happiness:*/ -25,/*contractor:*/ 8,/*incomePer:*/ 0);

	/*************** BUSINESS ****************/
	/* Initialize Farm lvl 1-5 values */
	farm[0] = new building('business', 'farm', 1,/*costs:*/ 90, 35, 20, 0,/*people:*/ 2,/*income:*/ 12, 0, 0, 0,/*happiness:*/ 1,/*contractor:*/ 1,/*incomePer:*/ 6);
	farm[1] = new building('business', 'farm', 2,/*costs:*/ 230, 55, 40, 0,/*people:*/ 3,/*income:*/ 19, 0, 0, 0,/*happiness:*/ 1,/*contractor:*/ 1,/*incomePer:*/ 6);
	farm[2] = new building('business', 'farm', 3,/*costs:*/ 650, 80, 60, 10,/*people:*/ 4,/*income:*/ 26, 0, 0, 0,/*happiness:*/ 1,/*contractor:*/ 4,/*incomePer:*/ 7);
	farm[3] = new building('business', 'farm', 4,/*costs:*/ 1015, 120, 90, 30,/*people:*/ 5,/*income:*/ 38, 0, 0, 0,/*happiness:*/ 1,/*contractor:*/ 6,/*incomePer:*/ 8);
	farm[4] = new building('business', 'farm', 5,/*costs:*/ 1400, 200, 120, 60,/*people:*/ 6,/*income:*/ 52, 0, 0, 0,/*happiness:*/ 1,/*contractor:*/ 8,/*incomePer:*/ 9);

	/* Initialize Diner lvl 1-5 values */
	diner[0] = new building('business', 'diner', 1,/*costs:*/ 130, 35, 30, 5,/*people:*/ 2,/*income:*/ 14, 0, 0, 0,/*happiness:*/ 5,/*contractor:*/ 2,/*incomePer:*/ 7);
	diner[1] = new building('business', 'diner', 2,/*costs:*/ 250, 55, 45, 10,/*people:*/ 3,/*income:*/ 22, 0, 0, 0,/*happiness:*/ 5,/*contractor:*/ 2,/*incomePer:*/ 7);
	diner[2] = new building('business', 'diner', 3,/*costs:*/ 650, 80, 70, 15,/*people:*/ 4,/*income:*/ 30, 0, 0, 0,/*happiness:*/ 5,/*contractor:*/ 4,/*incomePer:*/ 8);
	diner[3] = new building('business', 'diner', 4,/*costs:*/ 1015, 120, 100, 30,/*people:*/ 5,/*income:*/ 42, 0, 0, 0,/*happiness:*/ 5,/*contractor:*/ 6,/*incomePer:*/ 8);
	diner[4] = new building('business', 'diner', 5,/*costs:*/ 1500, 200, 130, 55,/*people:*/ 6,/*income:*/ 56, 0, 0, 0,/*happiness:*/ 5,/*contractor:*/ 8,/*incomePer:*/ 9);

	/* Initialize Bakery lvl 1-5 values */
	bakery[0] = new building('business', 'bakery', 1,/*costs:*/ 150, 45, 35, 5,/*people:*/ 2,/*income:*/ 16, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 2,/*incomePer:*/ 8);
	bakery[1] = new building('business', 'bakery', 2,/*costs:*/ 400, 70, 50, 10,/*people:*/ 3,/*income:*/ 26, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 2,/*incomePer:*/ 9);
	bakery[2] = new building('business', 'bakery', 3,/*costs:*/ 925, 110, 65, 35,/*people:*/ 4,/*income:*/ 38, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 4,/*incomePer:*/ 10);
	bakery[3] = new building('business', 'bakery', 4,/*costs:*/ 1650, 160, 90, 65,/*people:*/ 5,/*income:*/ 50, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 6,/*incomePer:*/ 10);
	bakery[4] = new building('business', 'bakery', 5,/*costs:*/ 2500, 230, 125, 100,/*people:*/ 6,/*income:*/ 62, 0, 0, 0,/*happiness:*/ 2,/*contractor:*/ 8,/*incomePer:*/ 10);

	/* Initialize Bakery lvl 1-5 values */
	coffee[0] = new building('business', 'coffee', 1,/*costs:*/ 200, 40, 20, 5,/*people:*/ 2,/*income:*/ 12, 0, 0, 0,/*happiness:*/ 6,/*contractor:*/ 3,/*incomePer:*/ 6);
	coffee[1] = new building('business', 'coffee', 2,/*costs:*/ 300, 65, 35, 10,/*people:*/ 4,/*income:*/ 25, 0, 0, 0,/*happiness:*/ 6,/*contractor:*/ 3,/*incomePer:*/ 6);
	coffee[2] = new building('business', 'coffee', 3,/*costs:*/ 800, 110, 65, 25,/*people:*/ 6,/*income:*/ 40, 0, 0, 0,/*happiness:*/ 6,/*contractor:*/ 4,/*incomePer:*/ 7);
	coffee[3] = new building('business', 'coffee', 4,/*costs:*/ 1700, 150, 90, 60,/*people:*/ 8,/*income:*/ 55, 0, 0, 0,/*happiness:*/ 6,/*contractor:*/ 6,/*incomePer:*/ 7);
	coffee[4] = new building('business', 'coffee', 5,/*costs:*/ 3600, 200, 130, 90,/*people:*/ 10,/*income:*/ 75, 0, 0, 0,/*happiness:*/ 6,/*contractor:*/ 8,/*incomePer:*/ 8);

	/* Initialize Gas Station lvl 1-5 values */
	gas[0] = new building('business', 'gas', 1,/*costs:*/ 320, 65, 100, 10,/*people:*/ 2,/*income:*/ 20, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 3,/*incomePer:*/ 6);
	gas[1] = new building('business', 'gas', 2,/*costs:*/ 750, 105, 140, 30,/*people:*/ 3,/*income:*/ 36, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 3,/*incomePer:*/ 6);
	gas[2] = new building('business', 'gas', 3,/*costs:*/ 1200, 140, 190, 50,/*people:*/ 4,/*income:*/ 58, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 3,/*incomePer:*/ 6);
	gas[3] = new building('business', 'gas', 4,/*costs:*/ 1850, 190, 260, 85,/*people:*/ 5,/*income:*/ 75, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 3,/*incomePer:*/ 6);
	gas[4] = new building('business', 'gas', 5,/*costs:*/ 2800, 260, 350, 120,/*people:*/ 6,/*income:*/ 100, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 3,/*incomePer:*/ 6);

	/* Initialize Clinic lvl 1-5 values */
	clinic[0] = new building('business', 'clinic', 1,/*costs:*/ 350, 70, 40, 15,/*people:*/ 2,/*income:*/ 19, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 4,/*incomePer:*/ 10);
	clinic[1] = new building('business', 'clinic', 2,/*costs:*/ 800, 115, 65, 30,/*people:*/ 3,/*income:*/ 35, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 4,/*incomePer:*/ 12);
	clinic[2] = new building('business', 'clinic', 3,/*costs:*/ 1450, 140, 95, 60,/*people:*/ 4,/*income:*/ 56, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 4,/*incomePer:*/ 14);
	clinic[3] = new building('business', 'clinic', 4,/*costs:*/ 2500, 220, 130, 100,/*people:*/ 5,/*income:*/ 72, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 14);
	clinic[4] = new building('business', 'clinic', 5,/*costs:*/ 3550, 310, 175, 160,/*people:*/ 6,/*income:*/ 95, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 16);

	/* Initialize Fast Food lvl 1-5 values */
	fastfood[0] = new building('business', 'fastfood', 1,/*costs:*/ 500, 90, 50, 30,/*people:*/ 3,/*income:*/ 16, 0, 0, 0,/*happiness:*/ 3,/*contractor:*/ 5,/*incomePer:*/ 5);
	fastfood[1] = new building('business', 'fastfood', 2,/*costs:*/ 1020, 85, 85, 50,/*people:*/ 4,/*income:*/ 32, 0, 0, 0,/*happiness:*/ 3,/*contractor:*/ 5,/*incomePer:*/ 8);
	fastfood[2] = new building('business', 'fastfood', 3,/*costs:*/ 1600, 110, 120, 85,/*people:*/ 5,/*income:*/ 48, 0, 0, 0,/*happiness:*/ 3,/*contractor:*/ 5,/*incomePer:*/ 10);
	fastfood[3] = new building('business', 'fastfood', 4,/*costs:*/ 2800, 150, 160, 125,/*people:*/ 6,/*income:*/ 65, 0, 0, 0,/*happiness:*/ 3,/*contractor:*/ 6,/*incomePer:*/ 11);
	fastfood[4] = new building('business', 'fastfood', 5,/*costs:*/ 3950, 250, 220, 170,/*people:*/ 8,/*income:*/ 80, 0, 0, 0,/*happiness:*/ 3,/*contractor:*/ 8,/*incomePer:*/ 10);

	/* Initialize Car Rental lvl 1-5 values */
	carrental[0] = new building('business', 'carrental', 1,/*costs:*/ 750, 60, 40, 60,/*people:*/ 2,/*income:*/ 26, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 13);
	carrental[1] = new building('business', 'carrental', 2,/*costs:*/ 900, 90, 75, 100,/*people:*/ 3,/*income:*/ 40, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 13);
	carrental[2] = new building('business', 'carrental', 3,/*costs:*/ 1150, 130, 110, 155,/*people:*/ 4,/*income:*/ 60, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 15);
	carrental[3] = new building('business', 'carrental', 4,/*costs:*/ 1400, 170, 180, 215,/*people:*/ 5,/*income:*/ 82, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 16);
	carrental[4] = new building('business', 'carrental', 5,/*costs:*/ 3600, 350, 265, 290,/*people:*/ 6,/*income:*/ 106, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 18);

	/* Initialize Bank lvl 1-5 values */
	bank[0] = new building('business', 'bank', 1,/*costs:*/ 875, 90, 70, 100,/*people:*/ 3,/*income:*/ 28, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 9);
	bank[1] = new building('business', 'bank', 2,/*costs:*/ 1260, 140, 110, 150,/*people:*/ 5,/*income:*/ 42, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 8);
	bank[2] = new building('business', 'bank', 3,/*costs:*/ 1950, 210, 170, 220,/*people:*/ 7,/*income:*/ 64, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 9);
	bank[3] = new building('business', 'bank', 4,/*costs:*/ 2850, 300, 215, 350,/*people:*/ 9,/*income:*/ 88, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 10);
	bank[4] = new building('business', 'bank', 5,/*costs:*/ 4000, 440, 355, 470,/*people:*/ 11,/*income:*/ 118, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 11);

	/* Initialize Cinema lvl 1-5 values */
	cinema[0] = new building('business', 'cinema', 1,/*costs:*/ 350, 40, 30, 5,/*people:*/ 3,/*income:*/ 28, 0, 0, 0,/*happiness:*/ 10,/*contractor:*/ 7,/*incomePer:*/ 9);
	cinema[1] = new building('business', 'cinema', 2,/*costs:*/ 600, 75, 35, 15,/*people:*/ 4,/*income:*/ 44, 0, 0, 0,/*happiness:*/ 10,/*contractor:*/ 7,/*incomePer:*/ 11);
	cinema[2] = new building('business', 'cinema', 3,/*costs:*/ 1100, 100, 70, 35,/*people:*/ 5,/*income:*/ 60, 0, 0, 0,/*happiness:*/ 10,/*contractor:*/ 7,/*incomePer:*/ 12);
	cinema[3] = new building('business', 'cinema', 4,/*costs:*/ 2350, 140, 105, 75,/*people:*/ 6,/*income:*/ 80, 0, 0, 0,/*happiness:*/ 10,/*contractor:*/ 7,/*incomePer:*/ 13);
	cinema[4] = new building('business', 'cinema', 5,/*costs:*/ 3200, 170, 130, 110,/*people:*/ 8,/*income:*/ 110, 0, 0, 0,/*happiness:*/ 10,/*contractor:*/ 8,/*incomePer:*/ 14);

	/* Initialize Market lvl 1-5 values */
	market[0] = new building('business', 'market', 1,/*costs:*/ 1150, 160, 110, 60,/*people:*/ 4,/*income:*/ 30, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 8);
	market[1] = new building('business', 'market', 2,/*costs:*/ 1800, 220, 170, 100,/*people:*/ 5,/*income:*/ 48, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 10);
	market[2] = new building('business', 'market', 3,/*costs:*/ 2950, 330, 245, 135,/*people:*/ 6,/*income:*/ 78, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 13);
	market[3] = new building('business', 'market', 4,/*costs:*/ 4400, 470, 360, 170,/*people:*/ 8,/*income:*/ 96, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 12);
	market[4] = new building('business', 'market', 5,/*costs:*/ 6000, 690, 475, 210,/*people:*/ 10,/*income:*/ 120, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 12);

	/* Initialize Office lvl 1-5 values */
	office[0] = new building('business', 'office', 1,/*costs:*/ 2000, 300, 325, 350,/*people:*/ 5,/*income:*/ 32, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 6);
	office[1] = new building('business', 'office', 2,/*costs:*/ 3500, 450, 480, 500,/*people:*/ 10,/*income:*/ 55, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 6);
	office[2] = new building('business', 'office', 3,/*costs:*/ 5000, 660, 680, 750,/*people:*/ 15,/*income:*/ 80, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 5);
	office[3] = new building('business', 'office', 4,/*costs:*/ 7500, 850, 950, 1100,/*people:*/ 20,/*income:*/ 105, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 5);
	office[4] = new building('business', 'office', 5,/*costs:*/ 10000, 1050, 1300, 1550,/*people:*/ 30,/*income:*/ 140, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 9,/*incomePer:*/ 5);

	/* Initialize Tech Company lvl 1-5 values */
	tech[0] = new building('business', 'tech', 1,/*costs:*/ 10000, 1050, 1300, 1550,/*people:*/ 5,/*income:*/ 35, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 10,/*incomePer:*/ 7);
	tech[1] = new building('business', 'tech', 2,/*costs:*/ 12000, 1350, 1780, 1900,/*people:*/ 10,/*income:*/ 60, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 10,/*incomePer:*/ 6);
	tech[2] = new building('business', 'tech', 3,/*costs:*/ 15000, 1750, 2100, 2500,/*people:*/ 15,/*income:*/ 90, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 10,/*incomePer:*/ 6);
	tech[3] = new building('business', 'tech', 4,/*costs:*/ 20000, 2100, 2600, 3100,/*people:*/ 20,/*income:*/ 125, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 10,/*incomePer:*/ 6);
	tech[4] = new building('business', 'tech', 5,/*costs:*/ 25000, 2550, 3200, 3550,/*people:*/ 30,/*income:*/ 160, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 10,/*incomePer:*/ 5);

	/* Initialize Space pleX lvl 1-5 values */
	space[0] = new building('business', 'space', 1,/*costs:*/ 10000, 1050, 1300, 1550,/*people:*/ 10,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 11,/*incomePer:*/ 0);
	space[1] = new building('business', 'space', 2,/*costs:*/ 12000, 1350, 1780, 1900,/*people:*/ 15,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 11,/*incomePer:*/ 0);
	space[2] = new building('business', 'space', 3,/*costs:*/ 15000, 1750, 2100, 2500,/*people:*/ 20,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 11,/*incomePer:*/ 0);
	space[3] = new building('business', 'space', 4,/*costs:*/ 20000, 2100, 2600, 3100,/*people:*/ 25,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 11,/*incomePer:*/ 0);
	space[4] = new building('business', 'space', 5,/*costs:*/ 25000, 2550, 3200, 3550,/*people:*/ 30,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 11,/*incomePer:*/ 0);

	/*************** RECREATION ****************/
	/* Initialize values */
	playground = new building('recreation', 'playground', 1,/*costs:*/ 175, 40, 15, 5,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 20,/*contractor:*/ 1,/*incomePer:*/ 0);
	basketball = new building('recreation', 'basketball', 1,/*costs:*/ 750, 0, 150, 5,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 55,/*contractor:*/ 3,/*incomePer:*/ 0);
	tennis = new building('recreation', 'tennis', 1,/*costs:*/ 600, 0, 120, 0,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 50,/*contractor:*/ 4,/*incomePer:*/ 0);
	pool = new building('recreation', 'pool', 1,/*costs:*/ 2250, 50, 200, 85,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 60,/*contractor:*/ 5,/*incomePer:*/ 0);
	fountain = new building('recreation', 'fountain', 1,/*costs:*/ 550, 40, 120, 0,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 30,/*contractor:*/ 6,/*incomePer:*/ 0);
	church = new building('recreation', 'church', 1,/*costs:*/ 2500, 300, 150, 80,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 70,/*contractor:*/ 7,/*incomePer:*/ 0);
	garden = new building('recreation', 'garden', 1,/*costs:*/ 1250, 85, 85, 0,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 50,/*contractor:*/ 8,/*incomePer:*/ 0);
	museum = new building('recreation', 'museum', 1,/*costs:*/ 4000, 500, 400, 250,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 65,/*contractor:*/ 9,/*incomePer:*/ 0);

	/*************** INFRASTRUCTURE ****************/
	/* Initialize Warehouse lvl 1-5 values */
	warehouse[0] = new building('infratructure', 'warehouse', 1,/*costs:*/ 200, 50, 30, 10,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 2,/*incomePer:*/ 0);
	warehouse[1] = new building('infratructure', 'warehouse', 2,/*costs:*/ 600, 140, 60, 25,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 2,/*incomePer:*/ 0);
	warehouse[2] = new building('infratructure', 'warehouse', 3,/*costs:*/ 2400, 215, 120, 80,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 4,/*incomePer:*/ 0);
	warehouse[3] = new building('infratructure', 'warehouse', 4,/*costs:*/ 5600, 380, 240, 200,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 6,/*incomePer:*/ 0);
	warehouse[4] = new building('infratructure', 'warehouse', 5,/*costs:*/ 7800, 520, 480, 350,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 0);

	/* Initialize Trade Depot lvl 1-5 values */
	trade[0] = new building('infratructure', 'trade', 1,/*costs:*/ 100, 20, 20, 0,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -8,/*contractor:*/ 2,/*incomePer:*/ 0);
	trade[1] = new building('infratructure', 'trade', 2,/*costs:*/ 350, 60, 60, 20,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -8,/*contractor:*/ 2,/*incomePer:*/ 0);
	trade[2] = new building('infratructure', 'trade', 3,/*costs:*/ 600, 100, 120, 40,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -8,/*contractor:*/ 4,/*incomePer:*/ 0);
	trade[3] = new building('infratructure', 'trade', 4,/*costs:*/ 800, 140, 240, 75,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -8,/*contractor:*/ 6,/*incomePer:*/ 0);
	trade[4] = new building('infratructure', 'trade', 5,/*costs:*/ 1000, 190, 480, 120,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -8,/*contractor:*/ 8,/*incomePer:*/ 0);

	/* Initialize School lvl 1-5 values */
	school[0] = new building('infratructure', 'school', 1,/*costs:*/ 1400, 150, 120, 0,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 7,/*incomePer:*/ 0);
	school[1] = new building('infratructure', 'school', 2,/*costs:*/ 2300, 225, 280, 75,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 7,/*incomePer:*/ 0);
	school[2] = new building('infratructure', 'school', 3,/*costs:*/ 3800, 510, 480, 250,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 7,/*incomePer:*/ 0);
	school[3] = new building('infratructure', 'school', 4,/*costs:*/ 5000, 950, 770, 520,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 7,/*incomePer:*/ 0);
	school[4] = new building('infratructure', 'school', 5,/*costs:*/ 8000, 1350, 1130, 900,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ 0,/*contractor:*/ 8,/*incomePer:*/ 0);

	/* Initialize Contractor lvl 1-10 values */
	contractor[0] = new building('infratructure', 'contractor', 1,/*costs:*/ 0, 0, 0, 0,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 99,/*incomePer:*/ 0);
	contractor[1] = new building('infratructure', 'contractor', 2,/*costs:*/ 180, 65, 50, 0,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 1,/*incomePer:*/ 0);
	contractor[2] = new building('infratructure', 'contractor', 3,/*costs:*/ 750, 100, 90, 0,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 2,/*incomePer:*/ 0);
	contractor[3] = new building('infratructure', 'contractor', 4,/*costs:*/ 1400, 150, 120, 0,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 3,/*incomePer:*/ 0);
	contractor[4] = new building('infratructure', 'contractor', 5,/*costs:*/ 2300, 225, 280, 75,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 4,/*incomePer:*/ 0);
	contractor[5] = new building('infratructure', 'contractor', 6,/*costs:*/ 3800, 510, 480, 250,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 5,/*incomePer:*/ 0);
	contractor[6] = new building('infratructure', 'contractor', 7,/*costs:*/ 5000, 950, 770, 520,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 6,/*incomePer:*/ 0);
	contractor[7] = new building('infratructure', 'contractor', 8,/*costs:*/ 8000, 1350, 1130, 900,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 7,/*incomePer:*/ 0);
	contractor[8] = new building('infratructure', 'contractor', 9,/*costs:*/ 11000, 1800, 1700, 1480,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 8,/*incomePer:*/ 0);
	contractor[9] = new building('infratructure', 'contractor', 10,/*costs:*/ 15000, 2500, 2300, 2200,/*people:*/ 0,/*income:*/ 0, 0, 0, 0,/*happiness:*/ -20,/*contractor:*/ 9,/*incomePer:*/ 0);

});