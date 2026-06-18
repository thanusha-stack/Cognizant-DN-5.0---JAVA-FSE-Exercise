import java.util.Scanner;

public class Ex2FinancialForecast {

    public static double forecast(double value,
                                  double growthRate,
                                  int years) {

        if (years == 0)
            return value;

        return forecast(
                value * (1 + growthRate),
                growthRate,
                years - 1
        );
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter present value: ");
        double presentValue = sc.nextDouble();

        System.out.print("Enter annual growth rate (%): ");
        double growthRate = sc.nextDouble() / 100;

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        double futureValue =
                forecast(presentValue,
                         growthRate,
                         years);

        System.out.printf("Future Value after %d years = %.2f",
                          years,
                          futureValue);

        sc.close();
    }
}