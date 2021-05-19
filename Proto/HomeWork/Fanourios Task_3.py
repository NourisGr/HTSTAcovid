def Parallel_resistors(a=0,b=0,c=0,d=0):
    result_resistors = 1/ (1/a + 1/b + 1/c + 1/d)
    return result_resistors
print("a= 1 Ohm, b = 10 Ohm, c = 330 Ohm, d = 1000 Ohm => Result = ",Parallel_resistors(1,10,330,1000),"Ohm")
print("a= 500 Ohm, b = 33 Ohm, c = 500 Ohm, d = 100 Ohm => Result = ",Parallel_resistors(500,500,33,100),"Ohm")
print("a= 600 Ohm, b = 3 Ohm, c = 330 Ohm, d = 1000 Ohm => Result = ",Parallel_resistors(600,330,3,1000),"Ohm")
import Proto.HomeWork.Fanourios_task_2
Proto.HomeWork.Fanourios_task_2.Rectangle(10, 10)