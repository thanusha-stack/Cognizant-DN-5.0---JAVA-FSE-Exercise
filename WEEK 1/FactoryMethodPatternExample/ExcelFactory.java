package FactoryMethodPatternExample;

class ExcelFactory extends DocumentFactory{
    @Override
    public Document createDocument(){
        return new WordDocument();
    }
}
