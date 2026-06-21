package com.example.test;

public class MyService{
    private ExternalApi api;

    public MyService(External api){
        this.api=api;
    }

    public void fetchData(){
        api.getData(); //no return value , interaction verifying
    }
}
