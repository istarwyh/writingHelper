package spiderJava.Utils;

import org.springframework.util.StopWatch;

import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @Description: SceduledExecutorService
 * @Author: wx:istarwyh
 * @Date: 2021-03-11 11:12
 * @Version: ing
 */
public class DelayedTask {
    static StopWatch st = new StopWatch();

    public static void poolTask(Runnable r) {
        int corePoolSize = 5;
//        这里不用Executors只是为了传进去一个开线程有名字的线程工厂
//        var pool = Executors.newScheduledThreadPool(5);

        var pool = new ScheduledThreadPoolExecutor(corePoolSize, new ClientThreadFactory("DelayedTask"));
        pool.scheduleAtFixedRate(r, 2000, 3000,
                    TimeUnit.MILLISECONDS);
    }

    public static void main(String[] args) {
//        long startTime = System.currentTimeMillis();
//        DelayedTask.poolTask(() -> System.out.println("过了" + (System.currentTimeMillis()-startTime) + "ms"));
//        这里容易出bug:5个线程实例轮流执行run(),当其中线程抛出异常，那么整个程序都会阻塞
//        所以这里需要前后都有st.start()
        st.start();
        DelayedTask.poolTask(() -> {
            st.stop();System.out.println("过了" +st.getLastTaskTimeMillis() + "ms");st.start();
        });
    }

    public static class ClientThreadFactory implements ThreadFactory {
        private final String namePrefix;
        private final AtomicInteger nextId = new AtomicInteger(1);

        ClientThreadFactory(String whatFeature) {
            namePrefix = whatFeature;
        }

        @Override
        public Thread newThread(Runnable task) {
            String name = namePrefix +"-"+ nextId.getAndIncrement();
            Thread thread = new Thread(null, task, name, 0, false);
            System.out.println(thread.getName());
            return thread;
        }
    }
}
