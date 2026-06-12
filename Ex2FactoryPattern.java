interface Shape{
    void draw();
}

class Circle implements Shape{
    @Override
    public void draw(){
        System.out.print("Drawing circle");
    }
}

class Rectangle implements Shape{
    @Override
    public void draw(){
        System.out.print("Drawing rectangle");
    }
}

class ShapeFactory{
    public Shape getShape(String shapeType){
        if(shapeType==null)
            return null;
        else if(shapeType.equalsIgnoreCase("circle"))
            return new Circle();
        else if(shapeType.equalsIgnoreCase(("rectangle")))
            return new Rectangle();
        return null;
    }
}

public class Ex2FactoryPattern {
    public static void main(String[] args){
        ShapeFactory factory=new ShapeFactory();
        Shape s1=factory.getShape("Circle");
        s1.draw();

    }
}
