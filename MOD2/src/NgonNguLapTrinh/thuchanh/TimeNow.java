package NgonNguLapTrinh.thuchanh;

import java.sql.Timestamp;
import java.util.Date;


public class TimeNow {
    public static void main(String[] args) {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        System.out.println(timestamp);
        Date date = new Date();
        System.out.println(date);
    }
}
