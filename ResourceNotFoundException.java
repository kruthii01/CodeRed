package exceptions;

public class ResourceNotFoundException extends RuntimeException {
    private static final long serialVersionUID = 1L; // Recommended for serialization

    public ResourceNotFoundException(String message) {
        super(message);
    }

    public ResourceNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}


