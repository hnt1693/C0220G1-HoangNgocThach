package NgonNguLapTrinh.thuchanh;

import java.util.Scanner;

public class TimKiemPhanTuTrongMang {
    public static void main(String[] args) {
        String[] students = {"Christian", "Michael", "Camila", "Sienna", "Tanya", "Connor", "Zachariah", "Mallory", "Zoe", "Emily"};
        System.out.println("Nhập chuỗi bạn cần tìm");
        Scanner scanner = new Scanner(System.in);
        String searchStr = scanner.nextLine();
        int index = getIndexString(students,searchStr);
        if (index==0){
            System.out.println("Không tìm thấy chuối trong mảng");
        }else{
            System.out.println("Chuỗi bạn tìm nằm ở vị trí thứ " + index);
        }
    }

    public static int getIndexString(String[] str, String searchStr) {
        for (int i = 0; i < str.length; i++) {
            if (str[i].equals(searchStr)) {
                return i;
            }
        }
        return 0;
    }
}
