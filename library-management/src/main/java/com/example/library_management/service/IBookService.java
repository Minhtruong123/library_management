package com.example.library_management.service;

import com.example.library_management.dto.response.BookResponse;

import java.util.List;

public interface IBookService {
    List<BookResponse> getAllBooks();
    BookResponse getBookById(Integer id);
}
