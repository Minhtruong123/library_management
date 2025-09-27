package com.example.library_management.dto.response;

import com.example.library_management.model.Book;
import com.example.library_management.model.Author;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.stream.Collectors;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class BookResponse {
    Integer id;
    String title;
    String isbn;
    Integer publishedYear;
    String language;
    Integer availableCopies;
    String categoryName;
    String authorName;
    String image;

    public BookResponse(Book book){
        setId(book.getId());
        setTitle(book.getTitle());
        setIsbn(book.getIsbn());
        setPublishedYear(book.getPublishedYear());
        setLanguage(book.getLanguage());
        setAvailableCopies(book.getAvailableCopies());
        setCategoryName(book.getCategory().getName());
        setAuthorName(book.getAuthors().stream()
                .map(Author::getFullName)
                .collect(Collectors.joining(", ")));
        setImage(book.getImage());
    }
}
