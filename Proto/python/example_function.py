def total (value1 , value2): 

    totalValue = value1 + value2

    LPEMClass = "3TPIFI"
    if totalValue %2 == 0:
        text1 = "The total value is an even number"
    elif totalValue %2 != 0:
        text1 = "The total value isa an odd number"

    return totalValue, text1, LPEMClass


total(8 , 10) 
print( "Total value is :", total (8,10))