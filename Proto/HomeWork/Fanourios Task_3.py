def Parallel_resistors(a=0,b=0,c=0,d=0):
    return(a+b+c+d)
print("a= 1 Ohm, b = 10 Ohm, c = 330 Ohm, d = 1000 Ohm => Result = ",Parallel_resistors(1,10,330,1000),"Ohm")
print("a= 500 Ohm, b = 33 Ohm, c = 500 Ohm, d = 100 Ohm => Result = ",Parallel_resistors(500,500,33,100),"Ohm")
print("a= 600 Ohm, b = 3 Ohm, c = 330 Ohm, d = 1000 Ohm => Result = ",Parallel_resistors(600,330,3,1000),"Ohm")