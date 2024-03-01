package vn.vti.quizzy.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import vn.vti.quizzy.models.Service;

public interface ServiceRepository extends MongoRepository<Service, Long>
{
}
