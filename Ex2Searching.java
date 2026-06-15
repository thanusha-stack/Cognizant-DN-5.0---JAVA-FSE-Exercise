import java.util.*;

class Product{
    private String productId;
    private String productName;
    private String category;

    Product(String productId,String productName,String category){
        this.productId=productId;
        this.productName=productName;
        this.category=category;
    }

    public String getProductId(){return productId;}
    public String getProductName(){return productName;}
    public String getCategory(){return category;}

   @Override
    public String toString() {
        return productId + " (" + productName + ")";
    }

}
class ECommerceSearch{
    public static int linearSearch(Product[] products,String targetId){
        for(int i=0;i<products.length;i++){
            if(products[i].getProductId().equals(targetId))
                return i;
        }
        return -1;
    }

    public static int binarySearch(Product[] products,String targetId){
        int left=0;
        int right=products.length-1;

        while(left<=right){
            int mid=left+(right-left)/2;
            int comparison=products[mid].getProductId().compareTo(targetId);
            if(comparison==0)
                return mid;
            else if(comparison<0)
                left=mid+1;
            else if(comparison>0)
                right=mid-1;
        }
                return -1;
 }
}
 
public class Ex2Searching {
    public static void main(String[] args) {
        Product[] products = {
            new Product("P103", "Phone Charger", "Electronics"),
            new Product("P101", "Keyboard", "Electronics"),
            new Product("P102", "Swing", "Furniture")
        };
        System.out.println("Linear Search Index: " + ECommerceSearch.linearSearch(products, "P102"));
        
        Arrays.sort(products, Comparator.comparing(Product::getProductId));
        System.out.println("Sorted Products: " + Arrays.toString(products));
        
        System.out.println("Binary Search Index: " + ECommerceSearch.binarySearch(products, "P102"));
    }
}