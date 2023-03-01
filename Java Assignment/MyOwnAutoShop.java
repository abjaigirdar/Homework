class Car {
    int speed;
    double regularPrice;
    String color;

    Car(int speed, double regularPrice, String color) {
        this.speed = speed;
        this.regularPrice = regularPrice;
        this.color = color;
    }

    double getSalePrice() {
        return regularPrice; // default implementation
    }
}

class Truck extends Car {
    int weight;

    Truck(int speed, double regularPrice, String color, int weight) {
        super(speed, regularPrice, color);
        this.weight = weight;
    }

    double getSalePrice() {
        if (weight > 2000) {
            return super.getSalePrice() * 0.9; // 10% discount
        } else {
            return super.getSalePrice() * 0.8; // 20% discount
        }
    }
}

class Ford extends Car {
    int year;
    int manufacturerDiscount;

    Ford(int speed, double regularPrice, String color, int year, int manufacturerDiscount) {
        super(speed, regularPrice, color);
        this.year = year;
        this.manufacturerDiscount = manufacturerDiscount;
    }

    double getSalePrice() {
        return super.getSalePrice() - manufacturerDiscount;
    }
}

class Sedan extends Car {
    int length;

    Sedan(int speed, double regularPrice, String color, int length) {
        super(speed, regularPrice, color);
        this.length = length;
    }

    double getSalePrice() {
        if (length > 20) {
            return super.getSalePrice() * 0.95; // 5% discount
        } else {
            return super.getSalePrice() * 0.9; // 10% discount
        }
    }
}

public class MyOwnAutoShop {
    public static void main(String[] args) {
        Sedan sedan = new Sedan(100, 35000, "red", 15);
        Ford ford1 = new Ford(120, 25000, "blue", 2010, 1000);
        Ford ford2 = new Ford(110, 22000, "green", 2012, 500);
        Car car = new Car(90, 18000, "black");

        System.out.println("Sale price of Sedan: " + sedan.getSalePrice());
        System.out.println("Sale price of Ford 1: " + ford1.getSalePrice());
        System.out.println("Sale price of Ford 2: " + ford2.getSalePrice());
        System.out.println("Sale price of Car: " + car.getSalePrice());
    }
}
