def total (value1 , value2):  #initialization of the function

    totalValue = value1 + value2

    LPEMClass = "3TPIFI"
    if totalValue %2 == 0:
        text1 = "The total value is an even number"
    elif totalValue %2 != 0:
        text1 = "The total value isa an odd number"

    return totalValue, text1, LPEMClass


total(8 , 10) 
print( "Total value is :", total (8,10))    #first call function --> evem 
print( "Total value is :", total (2,5))     #second call function --> odd

print("Total value is :" , total(2))
print("Total value is :" , total())

case_1 = total(8,10)
print ("What is the value of case 1?", case_1)
returnValueElement1 = case_1[0]
returnValueElement2 = case_1[1]
returnValueElement3 = case_1[2]

print(returnValueElement1,returnValueElement2,returnValueElement3)