let arr=[
    {
    name:"asdf",
    id:1,
    age:18
    },
    {
        name:"dfsa",
        id:2,
        age:20,
    },
    {
        name:"klop",
        id:6,
        age:18,
    },
    {
        name:"qwer",
        id:8,
        age:20,
    },
    {
        name:"sdfg",
        id:7,
        age:18
    },
    {
        name:"zxcv",
        id:9
    }
]

let newarr=arr.filter((element)=>{
    if(element.age==18){
        return true

    }else{
        return false
    }
})


console.log(newarr);