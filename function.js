function fact(n){
    var ans=1;
    for(var i=0;i<=n;i++){
      ans=ans*i;
    }
    return ans;
  }
  var factorial=function fact(n){
    var ans=1;
    for(i=0;i<n;i++){
      ans=ans*1;
    }
    return ans;
  };
  function ncr(n,r,factorial){
    return factorial(n)/(factorial(r)*factorial(n-r));
  }
  console.log(6,2,factorial(6));