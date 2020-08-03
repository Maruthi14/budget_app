var budgetController=(function(){
	
	var Expense=function(id,desc,value){
		this.id=id
		this.desc=desc,
		this.value=value
		
	}
	Expense.prototype.calcpercent=function(totalIncome){
		if (totalIncome>0){
			this.percent=Math.round((this.value/totalIncome)*100)
		}else{
			this.percent=-1
		}
		
	}
	//Expense.prototype.getpercent=function(){
	//return this.percent}
	
	var Income=function(id,desc,value){
		this.id=id
		this.desc=desc,
		this.value=value
	}
	var data={
		all_items:{
		inc:[],
		exp:[]
		},
		totals:{
			inc:0,
			exp:0	
		},
		percentage:-1,
		budget:0
				
	}
	var calcTotals = function(type){
		var s=0
		data.all_items[type].forEach(function(cur){
			s+=cur.value
		})
		data.totals[type]=s
	}
	
	
	
	
	return {
		addNewItem:function(type,desc,val){
			var newItem,ID
			//create new ID based last ID of the the same type
			if (data.all_items[type].length>0){
			ID=data.all_items[type][data.all_items[type].length -1].id+1
			}
			else if (data.all_items[type].length==0){
				ID=0
			}
				
			if (type==='inc'){
				newItem= new Income(ID,desc,val)
			}
			else if(type==='exp'){
				newItem=new Expense(ID,desc,val)
				calcTotals('inc')
				newItem.calcpercent(data.totals['inc'])
			}
			data.all_items[type].push(newItem)
			
			return newItem
		},
		deleteItem:function(type,id){
			var ids,ind
			ids=data.all_items[type].map(function(current){
				return current.id
			})
			ind=ids.indexOf(id)
			
			if (ind !==-1){
				data.all_items[type].splice(ind,1)
				
			}
			
		},
		
		calBudget:function(){
			calcTotals('inc')
			calcTotals('exp')
			//calculate budget inc-exp
			data.budget=data.totals['inc']-data.totals['exp']
			
			//calculate the percentage of income 
			if (data.totals['inc']!=0){
				data.percentage=Math.round((data.totals['exp']/data.totals['inc'])*100)
			}
			
		},
		getBudget:function(){
			return {
				totalIncome:data.totals['inc'],
				totalExp:data.totals['exp'],
				percentage:data.percentage,
				budget:data.budget
			}
		}
	}
	
	
})()



var UIController=(function(){
	
	var DOMString={
		inputdesc:'.add__description',
		inputValue:'.add__value',
		inputType:'.add__type',
		inputBtn:'.add__btn',
		incomelist:'.income__list',
		expenselist:'.expenses__list',
		budgetLabel:'.budget__value',
		incomeLabel:'.budget__income--value',
		expenseLabel:'.budget__expenses--value',
		percentageLabel:'.budget__expenses--percentage',
		percentLabel:'.item__percentage',
		deletebtn:'.container',
		datelabel:'.budget__title--month'
	}
	
	
	var formatNumber = function(num,type){
		var i,d,nums
		num=Math.abs(num)
		num=num.toFixed(2)
		nums=num.split('.')
		i=nums[0]
		d=nums[1]
		if (i.length>3){
			i=i.substr(0,i.length-3)+','+i.substr(i.length-3,3)
		}
		
		return (type==='exp' ? '-' : '+' )+ ' '+i+'.'+d
	}
	return {
		
		get_input:function(){
			return{
			desc:document.querySelector(DOMString.inputdesc).value,
			val:parseFloat(document.querySelector(DOMString.inputValue).value),
			type:document.querySelector(DOMString.inputType).value
			}
		},
		
		display_month:function(){
			var month,year,tod
			tod=new Date()
			year=tod.getFullYear()
			month=tod.getMonth()
			document.querySelector(DOMString.datelabel).textContent=' '+(month+1) + '/'+year
			
			
		},
		
		get_DomString:function(){
			return DOMString
			
		},
		
		addItem:function(obj,type){
			var ele,html,newHtml
			if (type==='inc'){
				ele=DOMString.incomelist
				html='<div class="item clearfix" id="inc-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%val%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
			}
			else if(type==='exp'){
				ele=DOMString.expenselist
				html='<div class="item clearfix" id="exp-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%val%</div><div class="item__percentage">%percent%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
			}
			
			newHtml=html.replace('%id%',obj.id)
			newHtml=newHtml.replace('%desc%',obj.desc)
			newHtml=newHtml.replace('%val%',formatNumber(obj.value,type))
			if (obj.percent>0){
			newHtml=newHtml.replace('%percent%',obj.percent+'%')
			}
			else{
				newHtml=newHtml.replace('%percent%','--')
			}
			document.querySelector(ele).insertAdjacentHTML('beforeend',newHtml)
		},
		deleteItem:function(id){
			var ele
			ele=document.getElementById(id)
			ele.parentNode.removeChild(ele)
		},
		
		
		clearFields:function(){
			var fields
			fields=document.querySelectorAll(DOMString.inputValue+','+DOMString.inputdesc)
			for( var i=0;i<fields.length;i++){
				fields[i].value=''
			}
			fields[0].focus()
		},
		dispalyBudget:function(obj){
			var type
			obj.budget>=0 ? type='inc':type='exp'
			document.querySelector(DOMString.budgetLabel).textContent=formatNumber(obj.budget,type)
			document.querySelector(DOMString.incomeLabel).textContent=formatNumber(obj.totalIncome,'inc')
			document.querySelector(DOMString.expenseLabel).textContent=formatNumber(obj.totalExp,'exp')
			if (obj.percentage>0){
			document.querySelector(DOMString.percentageLabel).textContent=obj.percentage+'%'
			}
			else{
				document.querySelector(DOMString.percentageLabel).textContent='--'
			}
			
		}
		
		
	
	}
	
	
})()



var controller=(function(budgetctrl,UIctrl){
	
	var updBudget =function(){
		budgetctrl.calBudget()
		var budget = budgetctrl.getBudget()
		console.log(budget)
		//display budget
		UIctrl.dispalyBudget(budget)
	}
	
	var ctrlAddItem = function(){
		//1.get input value
		var input_data= UIctrl.get_input()
		
		//2.add item to budgetController
		if (input_data.desc !=='' && ! isNaN(input_data.val) && input_data.val>0){
			var newItem=budgetctrl.addNewItem(input_data.type,input_data.desc,input_data.val)
			
			//3.add item to UIController
			UIctrl.addItem(newItem,input_data.type)
			//4.clear fields
			UIctrl.clearFields()
			//5.calculate budget
			updBudget()
			//6.update the budget on UI
	
			}
		
	}
	var ctrlDeleteItem=function(event){
		var itemID,item,type,id
		itemID=event.target.parentNode.parentNode.parentNode.parentNode.id
		
		if (itemID){
			item=itemID.split('-')
			type=item[0]
			id=parseInt(item[1])
			
			//delete item from data strcture
			budgetctrl.deleteItem(type,id)
			//delete item from UI
			UIctrl.deleteItem(itemID)
			//update budget
			updBudget()
		}
	}
	
	var setupEventListener=function(){
		var Dom=UIController.get_DomString()
		document.querySelector(Dom.inputBtn).addEventListener('click',ctrlAddItem)
		document.querySelector(Dom.deletebtn).addEventListener('click',ctrlDeleteItem)
		document.addEventListener('keypress',function(e){
		
		if (e.keycode===13 ||e.which===13){
			ctrlAddItem()
		}
	})
	}
	
	return{
		in_it:function(){
		UIctrl.dispalyBudget({totalIncome:0,
				totalExp:0,
				percentage:0,
				budget:0})
		setupEventListener()
		UIctrl.display_month()}
		
	}
	
	
})(budgetController,UIController)
controller.in_it()