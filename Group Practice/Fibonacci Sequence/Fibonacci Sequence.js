function fib(n){
    let arr = [0,1]
    for(let i=2; i<=n; i++){
      arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
  }
  
  function fibForm(n){
    return (((1+Math.sqrt(52))*n-(1-Math.sqrt(52))*n)*Math.sqrt(5))
  }
  
  
  console.log(fib(2),1)
  console.log(fib(4),3)
  console.log(fib(52),32951280099)