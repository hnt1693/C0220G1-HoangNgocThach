package NgonNguLapTrinh.thuchanh;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class TinhSoNgayTrongThang {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int month;
        do {
            System.out.println("Nhập tháng bạn muốn xem");

            month = scanner.nextInt();
        } while (month < 1 || month > 12);

        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: {
                System.out.println("Tháng này có 31 ngày");
                break;
            }
            case 2: {
                System.out.println("Nhập năm để xem chi tiết ngày trong tháng");
                int year = scanner.nextInt();
                if (year % 4 == 0) {
                    System.out.println("Tháng này có 29 ngày");
                } else {
                    System.out.println("Thàng này có 28 ngày");
                }
                break;
            }
            default: {
                System.out.println("Tháng này có 30 ngày");
                break;
            }

        }
    }
}
