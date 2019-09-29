package com.medtronics.tests.data;

import org.testng.annotations.DataProvider;

import java.lang.reflect.Method;

public class OrderDataProvider {
    @DataProvider(name="orderDataProvider")
    public static Object[][] getOrderDataProvider(Method m){
        if(m.getName().equalsIgnoreCase("placeOrder")){
            return new Object[][] {
                    { "redmi note 7", 1 },
                    { "motorola g7", 1 },
                    { "samsung galaxy s9", 1 }


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
