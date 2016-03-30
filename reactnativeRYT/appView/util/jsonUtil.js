import {MD5} from 'md5';
var jSONData={};
export function  putJson(key, value) {

    let newJson={};
    let myArray=new Array();
    if(JSON.stringify(jSONData)=='{}'){
        jSONData[key]=value;
        // return jSONData;
    }else{
        jSONData[key]=value;
    }

    for(let k in jSONData){
        myArray.push(k);
    }
    myArray.sort();
    for(let item in myArray){
        newJson[myArray[item]]=jSONData[myArray[item]];
    }

    jSONData={};
    jSONData=newJson;
console.log(key);
}
    export function getJson(){

    getJsonStr();
    var newJson=jSONData;
    jSONData={};
    return newJson;
}

 export function getJsonStr(){
    var appKey="BL2QEuXUXNoGbNeHObD4EzlX+KuGc70U";
    var signmsg="";
    for(var k in jSONData){
        var temp = k+"="+jSONData[k]+"&";
        signmsg += temp;
    }
    signmsg = signmsg+"key="+appKey;
    signmsg= MD5(signmsg);
    jSONData['signmsg']=signmsg;
    return signmsg;
}
