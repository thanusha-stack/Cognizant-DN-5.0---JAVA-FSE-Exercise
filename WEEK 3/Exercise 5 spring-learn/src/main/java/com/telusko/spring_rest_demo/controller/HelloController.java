package com.telusko.spring_rest_demo.controller;
import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.telusko.spring_rest_demo.model.*;

@RestController
public class HelloController {
	@GetMapping("/hello")
	public String hello() {
		return "Hello Spring REST";
	}
	
	@GetMapping("/student")
	public Student getStudent() {
		return new Student(101,"Thanusha","CSE");
	}
	
	@GetMapping("/students")
	public List<Student> getStudents(){
		List<Student> students=new ArrayList<>();
		students.add(new Student(101,"Thanusha","CSE"));
		students.add(new Student(102,"Asha","CSE"));
		students.add(new Student(103,"Kavin","IT"));
		return students;
	}
	
}
