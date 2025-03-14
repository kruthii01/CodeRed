package repository;
import model.Quiz;
import model.User;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
public interface QuizRepository extends JpaRepository<Quiz, Long> {
	Optional<Quiz> findById(Long id);
	List<Quiz> findByTeacher(User teacher);
	List<Quiz> findByTitleContaining(String title);
	List<Quiz> findByDeadlineBefore(java.time.LocalDateTime deadline);
	List<Quiz> findByDeadlineAfter(java.time.LocalDateTime deadline);
}
