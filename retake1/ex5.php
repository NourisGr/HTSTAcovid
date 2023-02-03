<?php
for ($i=200; $i<=300; $i++)
{
    if( $i %8 != 0)
    {
        print '<span style="color:red">'.$i.'</span></br>' ;
    }else{
        print $i.'</br>' ;
    }
   
}
?>