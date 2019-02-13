function palindrome() 
{
	var rev = "";
	var instr = document.getElementById("num").value;

	i = instr.length;

	for(var j=i; j>0; j--)
	{
		rev = rev + instr.charAt(j-1);	
	}

    if(instr === rev)
    { 
    	alert(instr + " is a palindrome");	
    }
    else
    {
    	alert(instr + " is not a palindrome");		
    }   	
}