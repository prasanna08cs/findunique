let ar =[18,49,15,30,56,20,49,67,82,69,84,63,93,87,66,17,38,32,17,32,94,66,67,63,48,64,84,82,87,18,79,64,79,15,71,94,59,5,22,59,4,98,81,4,98,73,69,88,30,81,48,56,71,20,93,22,73,5,88];
console.log(lonelyinteger(ar));
function lonelyinteger(a) {
    if(a.length==1){
        return a[0];
    }
   let ar =a;
  let k=0;
for(let i =0;i<ar.length;i++){
     let c=0;
  k++
  console.log(i)
   //   console.log(`for${i} ${k}`);
   
   for(let j=i+1;j<ar.length;j++){
       //console.log(`for${i} j ${j}`);
       if(ar[i]==ar[j]){
    //     console.log('inner array breaked'+j);
         c=1;
        //  console.log(ar);
       //  console.log('arry boroken'+ar[i]+" "+ar[j]);
         console.log('popped'+ar[i])
         ar =ar.filter(e => e !== ar[i]);
         if(ar.length ==1){
           console.log(ar[0]);
             return ar[0];
         }
         i=-1;
         break;
      //   console.log(ar);
       }
     if(j ==ar.length-1 && c==0){
         return ar[i];
       console.log('unique'+ar[i]);
       break;
     }
     if(j ==ar.length-1 && c==1){
      // console.log('dupliacated elements'+ar[i]);
       break;
     }
     
   }
   // console.log('end of 2n for'+ar[i]);
  
}


}
