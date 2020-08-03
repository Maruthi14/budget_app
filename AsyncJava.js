const first = ()=>{
	console.log('hello')
	second()
	third()
}
const third=()=>{
	console.log('in third')}

const second =() =>{
	setTimeout(()=>{
	console.log('Hey you did Async')},200)
}	

(()=>{
	console.log('something here')
})()

	
first()

//promises
/*
const get_id = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve([123,133,4556,244])
		//reject([123])
	},1500)

})

const get_recepie =r_id =>{
	return new Promise((resolve,reject)=>{
		setTimeout(id=>{
		resolve(`${id} is id of  the recepie`)
		},1500,r_id)
	})
}


get_id
.then(Id =>{
	console.log(Id)
	return get_recepie(Id[2])
})
.then(id2 =>{
	console.log(id2)
})
.catch(errorId =>{
	console.log(`error occured while fetching ${errorId}`)
})
*/
//Async await

/*
const get_id = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve([123,133,4556,244])
		//reject([123])
	},1500)

})

const get_recepie =r_id =>{
	return new Promise((resolve,reject)=>{
		setTimeout(id=>{
		resolve(`${id} is id of  the recepie`)
		},1500,r_id)
	})
}

async function Asyncawit(){
	const ids= await get_id
	console.log(ids)
	const id = await get_recepie(ids[2])
	console.log(id)
	//return id
}
Asyncawit()
//.then(id =>{
//	console.log(`${id} is desired value`)0})
//the above commented part can be used if we want to return somethinf from async function
*/

//fetch and promises
fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/')
.then(result => {
	console.log(result)
	return result.json()
})
.then(data =>{
	console.log(data)
})
.catch(error =>{
	console.log(error)
}) 

// Async Await

async function somefun(){
	try{
	const result =  await fetch('https://crossorigin.me/https://www.metaweather.com/api/location/2487956/')
	const data= await result.json()
	console.log(data)
	}
	catch(error){
		console.log(error)
	}
}
