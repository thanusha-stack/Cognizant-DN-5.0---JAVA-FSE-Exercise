package com.example.test;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {
        //fake implementation
        ExternalApi mockApi = mock(ExternalApi.class);
        //stubbing
        when(mockApi.getData()).thenReturn("Mock Data");
        //mock(fake) api injection
        MyService service = new MyService(mockApi);

        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }
}
