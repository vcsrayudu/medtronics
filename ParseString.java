

import java.util.*;

public class ParseString
{
	public static List getSymbals(String str)
	{
	 List<Character> symbals=new ArrayList();
	 for(int i=0;i<str.length();i++)
	 {
	 if(str.charAt(i)=='+'|| str.charAt(i)=='-' || str.charAt(i)=='*'|| str.charAt(i)=='/'|| str.charAt(i)=='%')
	  symbals.add(str.charAt(i));
	 }
	 return symbals;
	}
	
	public static float operation(float operand1, float operand2, char op)
	{
		switch(op)
		{
		case '+':
		      return operand1+operand2;
		case '-':
			return operand1-operand2;
		case '/':
		      if (operand2==0)
				   throw new UnsupportedOperationException("Cannot divide by zero"); 
			    
			  else{
			   return operand1/operand2;
			  }
		case '*':
			return operand1*operand2;
		case '%':
			return operand1%operand2;
		}
		return 0;
		
	}
 public static void main(String str[])
 {
    
	
 
	String expStr="2+3*3-2*9*5.0+0";
	String [] operands=expStr.split("\\+|\\-|\\/|\\*|\\%");
	List symbals =getSymbals(expStr);
	float results=0.0f;
	 Stack<Float> values = new Stack<Float>();
	 Stack<Character> ops = new Stack<Character>();
	 
	if((symbals.size()==operands.length-1))
	{
		results=Float.parseFloat(operands[0]);
		values.push(Float.parseFloat(operands[0]));
		for(int i=1;i<operands.length;i++)
		{
			if(symbals.get(i-1).equals('/')||symbals.get(i-1).equals('*') ||symbals.get(i-1).equals('%'))
			{
			results=operation(values.pop(), Float.parseFloat(operands[i]),(char)(symbals.get(i-1)));
			
			
			values.push(results);
			}
		    else
			{
				
				ops.push((char)symbals.get(i-1));
				values.push(Float.parseFloat(operands[i]));
				
			}
		}
		results=0.0f;
		while(!ops.empty())
		{
			float b=values.pop();
			float a=values.pop();
			
			char op=ops.pop();
			if(!ops.empty()&&ops.peek()=='-')
				results=operation(-a,b,op);
			else if(op=='-' && b<0)
				results=operation(a,b,'+');
			else
				results=operation(a,b,op);
			values.push(results);
			
		}
		System.out.println("Expression value = "+results);
	}
	else{
	System.out.println("Expression is invalid");
	}
 
 
 
 }
 }
 
