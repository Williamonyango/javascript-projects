def evenfib(first_value,second_value,lim):
    fib = [first_value,second_value]
    
    result = 0
    limit = lim
    
    while True:
        fib.append(fib[-1]+fib[-2])
        
        if fib[-1] >= limit:
            break
        
    for i in range(0,len(fib)-1):
        if fib[i]%2==0:
            result += fib[i]
            
    print(result)
    
evenfib(1,2,4000000)