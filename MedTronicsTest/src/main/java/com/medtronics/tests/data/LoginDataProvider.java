package com.medtronics.tests.data;
import org.testng.annotations.DataProvider;

import java.lang.reflect.Method;

public class LoginDataProvider {

       @DataProvider(name="loginDataProvider")
        public static Object[][] getLoginDataProvider(Method m){
           if(m.getName().equalsIgnoreCase("LoginWithValidUsers")){
            return new Object[][] {
                    { "9663003852", "iloveindia" }


            };
        }
           else if(m.getName().equalsIgnoreCase("LoginWithInValidUsers")){
               return new Object[][] {
                       { "subbu", "password" },
                       { "rayudu", "password" }

               };
           }
           else if(m.getName().equalsIgnoreCase("LoginWithValidUserInvalidPassword")){
               return new Object[][] {
                       { "9663003852", "password" },
                       { "9663003852", "password@123" }

               };
           }
           return null;
       }

}
