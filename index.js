

let a = [3,4,1,2,0,5,8];
for(let i= 0 ;i<a.length ;i++){
    for(let j=i+1 ;j<a.length ;j++){
        if(a[i]<a[j]){
            let tg =a[i];
            a[i]=a[j];
            a[j]=tg;
        }
    }
    console.log(a)
}

let b = [3,4,1,2,0,5,8];
for(let i= 0 ;i<b.length ;i++){
    console.log('a chạy')
    for(let j=i+1 ;j<b.length ;j++){
        console.log('b chay') ;
    }
   
}
console.log('1')