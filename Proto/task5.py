number = 23  
Continue = True 
while Continue:  
    guessed = int(input('Enter a number: '))  
    if number == guessed:  
           print ("Congratulations, you guessed it") 
           Continue = False # that leads to the end of the while-loop  
    else:  
        print ("No, this number is wrong")  
else:  
        print ("The while-loop has ended")  
       # Here you could also do other things.  
        print ("Finished") 