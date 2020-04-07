package NgonNguLapTrinh.baitap;

import java.util.Scanner;

public class ChuyenDoiChuThanhSo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Nhập số có 3 chữ sô");
        short number = scanner.nextShort();
        convertNumberToString(number);

    }

    public static void convertNumberToString(short number) {
        StringBuilder stringBuilder = new StringBuilder();
        char hangTram = (number + "").charAt(0);
        char hangChuc = (number + "").charAt(1);
        char hangDonVi = (number + "").charAt(2);

        switch (hangTram) {
            case '1': {
                stringBuilder.append("one");
                break;
            }
            case '2' :{
                stringBuilder.append("two");
                break;
            }
            case '3': {
                stringBuilder.append("three");
                break;
            }
            case '4': {
                stringBuilder.append("four");
                break;
            }
            case '5': {
                stringBuilder.append("five");
                break;
            }
            default:
                break;
        }


    }
}
