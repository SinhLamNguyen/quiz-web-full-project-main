package vn.vti.quizzy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.vti.quizzy.models.Notification;

import java.util.List;

public interface NotificationRepository
        extends MongoRepository<Notification, Long>
{
    List<Notification> findAllBySenderId(Long senderId);
   // List<Notification> findAllByReceivedId(Long receivedId);
}
